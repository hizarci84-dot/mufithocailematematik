import fs from 'fs';
import path from 'path';
import http from 'http';
import { chromium } from 'playwright-core';

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, 'public');
const THUMBS_DIR = path.join(PUBLIC_DIR, 'thumbs');
const CATALOG_PATH = path.join(ROOT, 'src', 'data', 'catalog.ts');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
};

function findBrowserExecutable() {
  const candidates = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  ];
  for (const p of candidates) {
    if (fs.existsSync(p)) return p;
  }
  return undefined;
}

function startStaticServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const reqPath = (req.url || '/').split('?')[0];
      const safePath = path.normalize(decodeURIComponent(reqPath)).replace(/^(\.\.[/\\])+/, '');
      let filePath = path.join(PUBLIC_DIR, safePath === '/' ? 'index.html' : safePath);
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        res.statusCode = 404;
        res.end('Not found');
        return;
      }
      const ext = path.extname(filePath).toLowerCase();
      res.setHeader('Content-Type', MIME_TYPES[ext] || 'application/octet-stream');
      fs.createReadStream(filePath).pipe(res);
    });
    server.listen(0, '127.0.0.1', () => {
      const addr = server.address();
      resolve({ server, port: addr.port });
    });
  });
}

function loadCatalogTopics() {
  const raw = fs.readFileSync(CATALOG_PATH, 'utf8');
  const start = raw.indexOf('= [');
  const jsonText = raw.slice(start + 2).replace(/;\s*$/, '');
  return JSON.parse(jsonText);
}

async function captureTopic(context, baseUrl, topic) {
  const target =
    topic.animations.find((a) => !a.isDraft) || topic.labs.find((l) => !l.isDraft);
  if (!target) return null;

  const outFile = path.join(THUMBS_DIR, `${topic.id}.jpg`);
  if (fs.existsSync(outFile) && fs.statSync(outFile).size > 2000) {
    return outFile;
  }
  const page = await context.newPage();

  try {
    // Accelerate setTimeout so multi-scene animations advance to rich mid-action frames quickly
    await page.addInitScript(() => {
      window.alert = () => {};
      window.confirm = () => true;
      const origSetTimeout = window.setTimeout.bind(window);
      window.setTimeout = (fn, delay, ...args) => {
        const ms = typeof delay === 'number' ? delay : 0;
        const fastMs = ms > 40 ? Math.max(15, Math.round(ms / 10)) : ms;
        return origSetTimeout(fn, fastMs, ...args);
      };
    });

    await page.goto(`${baseUrl}/${target.url}`, { waitUntil: 'load', timeout: 10000 });

    await page.addStyleTag({
      content: `
        .header, .brand-header, .kazanim-box { display: none !important; }
        body {
          overflow: hidden !important;
          padding: 14px 20px !important;
          min-height: 650px !important;
          justify-content: center !important;
        }
        * {
          transition-duration: 0.08s !important;
        }
      `,
    });

    // Click primary play/start button if present (never pause an auto-playing toggle)
    await page.evaluate(() => {
      const btn = document.querySelector(
        '#btnPlay, #btnRun, #btnAnim, #btnFire, #startBtn, #replayBtn, .btn-play, .btn-action, .btn-run, .btn-start'
      );
      if (btn instanceof HTMLElement) {
        const txt = (btn.textContent || '').trim();
        if (!/durdur|duraklat|pause|stop/i.test(txt)) {
          btn.click();
        }
      }
    });

    // Wait ~1200ms so requestAnimationFrame & accelerated timers draw rich mid-action frames
    await page.waitForTimeout(1200);

    await page.screenshot({
      path: outFile,
      type: 'jpeg',
      quality: 84,
    });
    return outFile;
  } finally {
    await page.close();
  }
}

async function main() {
  fs.mkdirSync(THUMBS_DIR, { recursive: true });
  const topics = loadCatalogTopics();
  const executablePath = findBrowserExecutable();
  const { server, port } = await startStaticServer();
  const baseUrl = `http://127.0.0.1:${port}`;

  console.log(`Capturing ${topics.length} thumbnails using ${executablePath || 'bundled chromium'}...`);

  const browser = await chromium.launch({
    headless: true,
    executablePath,
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  });

  const context = await browser.newContext({
    viewport: { width: 1040, height: 650 },
    deviceScaleFactor: 1,
  });

  // Block heavy external font/CDN timeouts if offline; allow fast inline/local assets
  await context.route('**/*', (route) => {
    const url = route.request().url();
    if (url.startsWith(baseUrl) || url.startsWith('data:') || url.startsWith('blob:')) {
      return route.continue();
    }
    // Allow Chart.js and MathJax, abort slow external fonts/avatars so captures are instant and crisp
    if (url.includes('cdn.jsdelivr.net')) {
      return route.continue();
    }
    return route.abort();
  });

  const CONCURRENCY = 3;
  let index = 0;
  let done = 0;
  const failures = [];

  async function worker() {
    while (index < topics.length) {
      const current = topics[index++];
      let lastErr = null;
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          await captureTopic(context, baseUrl, current);
          lastErr = null;
          break;
        } catch (err) {
          lastErr = err;
          await new Promise((r) => setTimeout(r, 250));
        }
      }
      if (lastErr) {
        failures.push({ id: current.id, error: String(lastErr) });
      } else {
        done++;
        if (done % 20 === 0 || done === topics.length) {
          console.log(`Progress: ${done}/${topics.length}`);
        }
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));

  await browser.close();
  server.close();

  console.log(`Finished: ${done} captured, ${failures.length} failed.`);
  if (failures.length > 0) {
    console.log(failures);
    process.exitCode = 1;
  }
}

main();
