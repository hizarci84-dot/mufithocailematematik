import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const SOURCE_DIR = path.join(ROOT, 'Uygulamalar_ve_Animasyonlar');
const PUBLIC_DIR = path.join(ROOT, 'public');
const APPS_PUBLIC_DIR = path.join(PUBLIC_DIR, 'apps');
const OUTPUT_CATALOG = path.join(ROOT, 'src', 'data', 'catalog.ts');

const THEME_MAP = {
  5: {
    1: { theme: 'Sayılar ve Nicelikler', color: '#3B82F6' },
    2: { theme: 'İşlemlerle Sayılar', color: '#10B981' },
    3: { theme: 'Geometrik Şekiller', color: '#F59E0B' },
    4: { theme: 'Geometrik Nicelikler', color: '#F43F5E' },
    5: { theme: 'İstatistiksel Araştırma Süreci', color: '#06B6D4' },
    6: { theme: 'Veriden Olasılığa', color: '#8B5CF6' },
  },
  6: {
    1: { theme: 'Sayılar ve Nicelikler', color: '#3B82F6' },
    2: { theme: 'İşlemlerle Cebirsel Düşünme', color: '#F59E0B' },
    3: { theme: 'Geometrik Şekiller', color: '#8B5CF6' },
    4: { theme: 'Geometrik Nicelikler', color: '#F43F5E' },
    5: { theme: 'İstatistiksel Araştırma Süreci', color: '#06B6D4' },
    6: { theme: 'Veriden Olasılığa', color: '#10B981' },
  },
  7: {
    1: { theme: 'Sayılar ve Nicelikler', color: '#3B82F6' },
    2: { theme: 'İşlemlerle Cebirsel Düşünme', color: '#10B981' },
    3: { theme: 'Geometrik Şekiller', color: '#F59E0B' },
    4: { theme: 'Geometrik Nicelikler', color: '#F43F5E' },
    5: { theme: 'İstatistiksel Araştırma Süreci', color: '#06B6D4' },
    6: { theme: 'Veriden Olasılığa', color: '#8B5CF6' },
  },
  8: {
    1: { theme: 'Sayılar ve Nicelikler', color: '#3B82F6' },
    2: { theme: 'Doğrusal İlişkiler ve Algoritmalar', color: '#10B981' },
    3: { theme: 'Geometrik Şekiller ve Pisagor', color: '#8B5CF6' },
    4: { theme: 'Geometrik Nicelikler', color: '#F43F5E' },
    5: { theme: 'Dönüşüm Geometrisi', color: '#F59E0B' },
    6: { theme: 'İstatistiksel Araştırma Süreci', color: '#06B6D4' },
    7: { theme: 'Veriden Olasılığa', color: '#EC4899' },
  },
  9: {
    1: { theme: 'Sayılar ve Özdeşlikler', color: '#3B82F6' },
    2: { theme: 'Nicelikler ve Değişimler', color: '#10B981' },
    3: { theme: 'Algoritma ve Bilişim', color: '#06B6D4' },
    4: { theme: 'Geometrik Şekiller', color: '#8B5CF6' },
  },
  10: {
    1: { theme: 'Sayılar ve Bölünebilme', color: '#3B82F6' },
    2: { theme: 'Nicelikler ve Değişimler (Fonksiyonlar)', color: '#10B981' },
    3: { theme: 'Sayma, Algoritma ve Bilişim', color: '#06B6D4' },
    4: { theme: 'Geometrik Şekiller ve Trigonometri', color: '#F59E0B' },
    5: { theme: 'Analitik Geometri', color: '#8B5CF6' },
    6: { theme: 'İstatistiksel Araştırma Süreci', color: '#F43F5E' },
    7: { theme: 'Veriden Olasılığa', color: '#EC4899' },
  },
  11: {
    1: { theme: 'Nicelikler ve Değişimler (Trigonometri & Logaritma)', color: '#06B6D4' },
    2: { theme: 'Geometrik Şekiller (Çokgenler)', color: '#8B5CF6' },
    3: { theme: 'İstatistiksel Araştırma Süreci (Korelasyon)', color: '#10B981' },
  },
};

function pickIcon(title, description, theme) {
  const t = `${title} ${theme}`.toLocaleLowerCase('tr-TR');
  const full = `${title} ${description} ${theme}`.toLocaleLowerCase('tr-TR');
  const hasWord = (text, w) => new RegExp(`(^|[^\\p{L}])${w}`, 'iu').test(text);

  if (hasWord(t, 'olasılık') || hasWord(t, 'şans') || hasWord(t, 'bayes') || hasWord(t, 'zar')) return '🎲';
  if (hasWord(t, 'istatistik') || hasWord(t, 'grafik') || hasWord(t, 'korelasyon') || hasWord(t, 'ortalama') || hasWord(t, 'medyan') || hasWord(t, 'veri') || hasWord(t, 'serpme')) return '📊';
  if (hasWord(t, 'trigonometri') || hasWord(t, 'dönme dolap') || hasWord(t, 'birim çember') || hasWord(t, 'kosinüs') || hasWord(t, 'sinüs')) return '🌀';
  if (hasWord(t, 'çember') || hasWord(t, 'daire') || hasWord(t, 'yay') || hasWord(t, 'pi')) return '⭕';
  if (hasWord(t, 'pisagor') || hasWord(t, 'üçgen') || hasWord(t, 'çokgen') || hasWord(t, 'açı') || hasWord(t, 'paralel') || hasWord(t, 'benzerlik') || hasWord(t, 'thales')) return '📐';
  if (hasWord(t, 'silindir') || hasWord(t, 'prizma') || hasWord(t, 'hacim') || hasWord(t, 'küp') || hasWord(t, '3d')) return '🧊';
  if (hasWord(t, 'alan') || hasWord(t, 'çevre') || hasWord(t, 'dikdörtgen')) return '📏';
  if (hasWord(t, 'yansıma') || hasWord(t, 'öteleme') || hasWord(t, 'döndürme') || hasWord(t, 'simetri')) return '🪞';
  if (hasWord(t, 'algoritma') || hasWord(t, 'akış') || hasWord(t, 'mantık') || hasWord(t, 'kod')) return '⚙️';
  if (hasWord(t, 'fonksiyon') || hasWord(t, 'parabol') || hasWord(t, 'eğim') || hasWord(t, 'koordinat') || hasWord(t, 'logaritma') || hasWord(t, 'üstel')) return '📈';
  if (hasWord(t, 'kesir') || hasWord(t, 'ondalık') || hasWord(t, 'yüzde') || hasWord(t, 'devirli')) return '🍕';
  if (hasWord(t, 'denklem') || hasWord(t, 'terazi') || hasWord(t, 'cebir') || hasWord(t, 'özdeşlik') || hasWord(t, 'eşitlik')) return '⚖️';
  if (hasWord(t, 'üslü') || hasWord(t, 'köklü') || hasWord(t, 'karekök') || hasWord(t, 'asal') || hasWord(t, 'çarpan') || hasWord(t, 'ebob') || hasWord(t, 'ekok')) return '🧬';
  if (hasWord(t, 'örüntü') || hasWord(t, 'pascal') || hasWord(t, 'kombinasyon') || hasWord(t, 'sayma')) return '🧱';
  if (hasWord(full, 'problem')) return '🎯';
  return '🔢';
}

function cleanText(str) {
  return (str || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\\?\([^)]*\\?\)/g, (m) => m.replace(/\\\(|\\\)/g, ''))
    .trim();
}

function extractMeta(html) {
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const subMatch = html.match(/class="subtitle[^"]*"[^>]*>([\s\S]*?)<\/p>/i);
  const kazMatch =
    html.match(/class="kazanim-box"[^>]*>([\s\S]*?)<\/div>/i) ||
    html.match(/class="kazanim[^"]*"[^>]*>([\s\S]*?)<\/div>/i);

  const rawTitle = cleanText(titleMatch?.[1]);
  const heading = cleanText(h1Match?.[1]);
  const subtitle = cleanText(subMatch?.[1]);
  const kazanim = cleanText(kazMatch?.[1]).replace(/^Kazanım\s*/i, '').replace(/^>_\s*/, '').trim();

  return { rawTitle, heading, subtitle, kazanim };
}

function formatTopicTitle(raw) {
  return raw
    .replace(/^\d+(?:\.\d+)*\s*-\s*/i, '')
    .replace(/\s*-\s*(Animasyon|Etkinlik|Laboratuvar)$/i, '')
    .replace(/\s*\((Animasyon|Etkinlik|Uygulama)\)$/i, '')
    .replace(/\s+(Animasyonu|Animasyon|Etkinliği|Etkinlik)$/i, '')
    .trim();
}

function getAnimLabel(file, rawTitle) {
  if (file.includes('_Birlesme')) return 'Birleşme Özelliği';
  if (file.includes('_Dagilma')) return 'Dağılma Özelliği';
  if (file.includes('_Esitlik')) return 'Eşitliğin Korunumu';
  const cleaned = formatTopicTitle(rawTitle);
  return cleaned ? `Animasyon: ${cleaned}` : 'Konu Animasyonu';
}

function buildTags(parts) {
  const stop = new Set(['ve', 'ile', 'için', 'bir', 'olan', 'göre', 'nasıl', 'nedir', 'animasyonu', 'animasyon', 'etkinlik', 'etkinliği', 'laboratuvarı', 'laboratuvar', 'mat']);
  const tokens = new Set();
  for (const part of parts) {
    if (!part) continue;
    for (const w of part.toLocaleLowerCase('tr-TR').split(/[^\p{L}\p{N}]+/u)) {
      if (w.length >= 3 && !stop.has(w)) tokens.add(w);
    }
  }
  return [...tokens].slice(0, 10);
}

function stripDeadPolyfill(html) {
  return html.replace(/<script[^>]*polyfill\.io[^>]*><\/script>\s*/gi, '');
}

function main() {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  fs.mkdirSync(APPS_PUBLIC_DIR, { recursive: true });
  fs.mkdirSync(path.dirname(OUTPUT_CATALOG), { recursive: true });

  // Copy logo.png to public/logo.png and public/logom.png (for ../../logom.png inside apps)
  const rootLogo = path.join(ROOT, 'logo.png');
  if (fs.existsSync(rootLogo)) {
    fs.copyFileSync(rootLogo, path.join(PUBLIC_DIR, 'logo.png'));
    fs.copyFileSync(rootLogo, path.join(PUBLIC_DIR, 'logom.png'));
  }

  const gradeDirs = fs
    .readdirSync(SOURCE_DIR)
    .filter((d) => /^\d+_Sinif$/.test(d) && fs.statSync(path.join(SOURCE_DIR, d)).isDirectory())
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

  const topics = [];
  let copiedFiles = 0;

  for (const gradeDir of gradeDirs) {
    const grade = parseInt(gradeDir, 10);
    const srcGradeDir = path.join(SOURCE_DIR, gradeDir);
    const dstGradeDir = path.join(APPS_PUBLIC_DIR, gradeDir);
    fs.mkdirSync(dstGradeDir, { recursive: true });

    const htmlFiles = fs
      .readdirSync(srcGradeDir)
      .filter((f) => f.endsWith('.html') && f !== 'index.html')
      .sort();

    const groups = new Map();

    for (const file of htmlFiles) {
      const srcPath = path.join(srcGradeDir, file);
      const dstPath = path.join(dstGradeDir, file);
      const rawHtml = fs.readFileSync(srcPath, 'utf8');
      const size = Buffer.byteLength(rawHtml, 'utf8');
      const cleanedHtml = stripDeadPolyfill(rawHtml);
      fs.writeFileSync(dstPath, cleanedHtml, 'utf8');
      copiedFiles++;

      const m = file.match(/^MAT_(\d+)_(\d+)(?:_(\d+))?_(Animasyon|Etkinlik)(?:_([A-Za-z]+))?\.html$/);
      if (!m) continue;

      const unit = parseInt(m[2], 10);
      const sub = m[3] ? parseInt(m[3], 10) : null;
      const kind = m[4];
      const key = sub !== null ? `${grade}_${unit}_${sub}` : `${grade}_${unit}`;
      const meta = extractMeta(rawHtml);
      const isDraft = size < 4000;

      if (!groups.has(key)) {
        groups.set(key, { grade, unit, sub, key, anims: [], labs: [] });
      }
      const entry = groups.get(key);
      const variant = {
        label: kind === 'Animasyon' ? getAnimLabel(file, meta.rawTitle) : 'İnteraktif Laboratuvar',
        file,
        url: `apps/${gradeDir}/${file}`,
        title: formatTopicTitle(meta.rawTitle) || meta.heading || file,
        isDraft,
        meta,
      };
      if (kind === 'Animasyon') entry.anims.push(variant);
      else entry.labs.push(variant);
    }

    const sortedGroups = [...groups.values()].sort((a, b) => {
      if (a.unit !== b.unit) return a.unit - b.unit;
      return (a.sub ?? 0) - (b.sub ?? 0);
    });

    for (const g of sortedGroups) {
      const themeInfo = THEME_MAP[g.grade]?.[g.unit] || { theme: 'Matematik Modülü', color: '#3B82F6' };
      const code = g.sub !== null ? `MAT.${g.grade}.${g.unit}.${g.sub}` : `MAT.${g.grade}.${g.unit}`;

      // Prefer non-draft metadata when choosing primary title/description
      const nonDrafts = [...g.anims, ...g.labs].filter((v) => !v.isDraft);
      const primary = nonDrafts[0] || g.anims[0] || g.labs[0];
      const animPrimary = g.anims.find((v) => !v.isDraft) || g.anims[0];
      const labPrimary = g.labs.find((v) => !v.isDraft) || g.labs[0];

      // Pick crisp title
      let title = formatTopicTitle(primary?.meta.rawTitle || '') || primary?.meta.heading || code;
      if (g.key === '5_2_1') title = 'İşlem Özellikleri ve Eşitliğin Korunumu';

      // Build informative Turkish description
      const rawKaz = primary?.meta.kazanim || labPrimary?.meta.kazanim || animPrimary?.meta.kazanim || '';
      const cleanKazDesc = rawKaz
        .replace(/^MAT\.\d+(?:\.\d+)*\.?\s*(?:-\s*\d+(?:\.\d+)*)?\.?\s*/i, '')
        .replace(/\s*\((Animasyon|Etkinlik|Uygulama|Etkileşimli)\)\s*$/i, '')
        .trim();
      const subtitle = nonDrafts.find((v) => v.meta.subtitle)?.meta.subtitle || '';

      let description = subtitle || cleanKazDesc || `${code} kazanımı için görsel animasyon ve etkileşimli etkinlik modülü.`;
      if (g.key === '5_2_1') {
        description = 'Çarpmada birleşme ve dağılma özellikleri ile eşitliğin korunumu animasyonları ve terazi laboratuvarı.';
      } else if (subtitle && cleanKazDesc && subtitle.length < 40 && !subtitle.includes(cleanKazDesc)) {
        description = `${cleanKazDesc} — ${subtitle}`;
      }

      const tags = buildTags([
        title,
        description,
        themeInfo.theme,
        code,
        `${g.grade}. sınıf`,
        ...g.anims.map((a) => a.title),
        ...g.labs.map((l) => l.title),
      ]);

      topics.push({
        id: `mat-${g.key.replace(/_/g, '-')}`,
        code,
        grade: g.grade,
        levelGroup: g.grade <= 8 ? 'Ortaokul' : 'Lise',
        unit: g.unit,
        theme: themeInfo.theme,
        color: themeInfo.color,
        icon: pickIcon(title, description, themeInfo.theme),
        title,
        description,
        kazanim: rawKaz || code,
        tags,
        animations: g.anims.map(({ meta: _m, ...rest }) => rest),
        labs: g.labs.map(({ meta: _m, ...rest }) => rest),
        hasCompletedContent: nonDrafts.length > 0,
        hasDraftPart: [...g.anims, ...g.labs].some((v) => v.isDraft),
      });
    }
  }

  const tsContent = `import type { TopicModule } from '../types/studio';

/**
 * Otomatik oluşturulan müfredat kataloğu (scripts/sync-apps.mjs).
 * Yeni HTML animasyon veya etkinlik eklediğinizde \`npm run sync\` çalıştırarak güncelleyebilirsiniz.
 */
export const CATALOG_TOPICS: TopicModule[] = ${JSON.stringify(topics, null, 2)};
`;

  fs.writeFileSync(OUTPUT_CATALOG, tsContent, 'utf8');
  console.log(`Synced ${copiedFiles} HTML files -> ${topics.length} topic modules in src/data/catalog.ts`);
}

main();
