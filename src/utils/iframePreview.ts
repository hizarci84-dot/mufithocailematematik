/**
 * Kart üzerindeki canlı önizleme iframe'i yüklendiğinde:
 * 1) Mini sahnede tekrar eden üst başlık çubuğunu gizler,
 * 2) Olası alert() çağrılarını önizleme modunda susturur,
 * 3) Animasyon başlatma düğmesi varsa otomatik tetikler.
 */
export function activateIframeHoverPreview(iframe: HTMLIFrameElement | null): void {
  if (!iframe) return;
  try {
    const win = iframe.contentWindow as (Window & { alert?: () => void; confirm?: () => boolean }) | null;
    const doc = iframe.contentDocument || win?.document;
    if (!doc || !win) return;

    // Prevent blocking alerts during mini hover preview
    win.alert = () => {};
    win.confirm = () => true;

    if (!doc.getElementById('studio-mini-preview-style')) {
      const style = doc.createElement('style');
      style.id = 'studio-mini-preview-style';
      style.textContent = `
        .header, .brand-header, .kazanim-box { display: none !important; }
        body {
          overflow: hidden !important;
          padding: 14px 20px !important;
          min-height: 650px !important;
          justify-content: center !important;
        }
        h1 { font-size: 1.55rem !important; margin-bottom: 6px !important; }
        .subtitle { font-size: 0.92rem !important; margin-bottom: 12px !important; }
      `;
      doc.head?.appendChild(style);
    }

    // Auto-start the animation smoothly once loaded (avoid pausing already-playing toggle buttons)
    window.setTimeout(() => {
      try {
        const btn = doc.querySelector<HTMLElement>(
          '#btnPlay, #btnRun, #btnAnim, #btnFire, #startBtn, #replayBtn, .btn-play, .btn-action, .btn-run, .btn-start'
        );
        const label = (btn?.textContent || '').trim();
        if (btn && !/durdur|duraklat|pause|stop/i.test(label)) {
          btn.click();
        }
      } catch {
        // Ignore cross-frame or internal script errors
      }
    }, 160);
  } catch {
    // Ignore safely if iframe hasn't finished navigating
  }
}

/**
 * Hero canlı vitrin penceresindeki iframe'in iç içeriğini tek kareye sığdırır,
 * kaydırma çubuklarını kaldırır ve gerçek içerik yüksekliğini döndürür.
 */
export function fitHeroSandboxIframe(
  iframe: HTMLIFrameElement | null,
  onMeasured: (virtualW: number, virtualH: number) => void
): void {
  if (!iframe) return;
  try {
    const win = iframe.contentWindow;
    const doc = iframe.contentDocument || win?.document;
    if (!doc) return;

    if (!doc.getElementById('studio-hero-fit-style')) {
      const style = doc.createElement('style');
      style.id = 'studio-hero-fit-style';
      style.textContent = `
        .header, .brand-header, .kazanim-box { display: none !important; }
        html, body {
          overflow: hidden !important;
          min-height: 100% !important;
          height: auto !important;
          justify-content: center !important;
          padding: 14px 24px !important;
        }
        h1 { margin-bottom: 6px !important; }
        .subtitle { margin-bottom: 14px !important; }
        .btn-play, .btn-start, .btn-action { margin-top: 14px !important; }
      `;
      doc.head?.appendChild(style);
    }

    const measure = () => {
      try {
        const contentH = Math.max(doc.body?.scrollHeight || 0, doc.documentElement?.scrollHeight || 0);
        const contentW = Math.max(doc.body?.scrollWidth || 0, doc.documentElement?.scrollWidth || 0);
        const targetH = Math.max(700, contentH + 16);
        const targetW = Math.max(1120, contentW, Math.round(targetH * 1.6));
        onMeasured(targetW, Math.round(targetW / 1.6));
      } catch {
        // Ignore measurement errors
      }
    };

    measure();
    window.setTimeout(measure, 180);
  } catch {
    // Ignore cross-frame safely
  }
}
