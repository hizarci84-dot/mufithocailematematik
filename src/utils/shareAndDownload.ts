let cachedLogoDataUrl: string | null = null;

async function getCompactLogoDataUrl(): Promise<string | null> {
  if (cachedLogoDataUrl) return cachedLogoDataUrl;
  try {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error('Logo yüklenemedi'));
      img.src = `${import.meta.env.BASE_URL}logo.png`;
    });

    const size = 128;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.drawImage(img, 0, 0, size, size);
    cachedLogoDataUrl = canvas.toDataURL('image/png');
    return cachedLogoDataUrl;
  } catch {
    return null;
  }
}

export function getTopicShareUrl(topicId: string, mode: 'animation' | 'lab' = 'animation'): string {
  const url = new URL(window.location.href);
  url.search = '';
  url.hash = '';
  url.searchParams.set('konu', topicId);
  url.searchParams.set('mod', mode);
  return url.toString();
}

export function getDirectHtmlUrl(relativeUrl: string): string {
  const base = new URL(import.meta.env.BASE_URL, window.location.href);
  return new URL(relativeUrl, base).toString();
}

export function getWhatsAppShareUrl(title: string, shareUrl: string): string {
  const text = `Müfit Hoca ile Matematik — ${title}\nİnteraktif animasyon ve etkinlik bağlantısı:\n${shareUrl}`;
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

export async function copyTextToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      return true;
    } catch {
      return false;
    }
  }
}

/**
 * HTML dosyasını indirirken logoyu gömerek tek başına (çevrimdışı akıllı tahtada bile)
 * kusursuz çalışan bağımsız bir HTML dosyası oluşturur.
 */
export async function downloadStandaloneHtml(relativeUrl: string, filename: string): Promise<void> {
  const fullUrl = getDirectHtmlUrl(relativeUrl);
  const res = await fetch(fullUrl);
  let html = await res.text();

  const logoDataUrl = await getCompactLogoDataUrl();
  if (logoDataUrl) {
    html = html
      .replace(/src=["']\.\.\/\.\.\/logom\.png["']/gi, `src="${logoDataUrl}"`)
      .replace(/\s+onerror=["'][^"']*["']/gi, '');
  }

  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const blobUrl = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = blobUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.setTimeout(() => URL.revokeObjectURL(blobUrl), 2500);
}
