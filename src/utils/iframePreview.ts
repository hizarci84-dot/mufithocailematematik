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

export function fitModalIframeOnMobile(iframe: HTMLIFrameElement | null): void {
  if (!iframe) return;
  try {
    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc || !doc.head || !doc.body) return;

    const styleId = 'studio-modal-mobile-fit';
    if (!doc.getElementById(styleId)) {
      const style = doc.createElement('style');
      style.id = styleId;
      style.textContent = `
        @media (max-width: 767px) {
          html, body {
            max-width: 100% !important;
            overflow-x: hidden !important;
          }
          body {
            padding: 10px 10px 16px !important;
            justify-content: flex-start !important;
          }
          .header, header {
            width: 100% !important;
            max-width: 100% !important;
            flex-wrap: wrap !important;
            gap: 6px 10px !important;
            padding: 8px 10px !important;
            margin-bottom: 8px !important;
          }
          .header-left {
            gap: 8px !important;
            font-size: 0.92rem !important;
          }
          .header-left img {
            width: 32px !important;
            height: 32px !important;
          }
          .brand, .kazanim {
            max-width: 100% !important;
            font-size: 0.72rem !important;
            line-height: 1.25 !important;
            padding: 4px 10px !important;
            white-space: normal !important;
            word-break: break-word !important;
          }
          .title-area, h1 {
            font-size: 1.12rem !important;
            line-height: 1.2 !important;
            margin-top: 2px !important;
            margin-bottom: 4px !important;
          }
          .subtitle {
            font-size: 0.8rem !important;
            line-height: 1.3 !important;
            margin-bottom: 6px !important;
          }
          .expl-text, .narrative-box, .step-box {
            padding: 8px 12px !important;
            font-size: 0.9rem !important;
            line-height: 1.3 !important;
            margin-bottom: 8px !important;
          }
          .canvas-area {
            width: 100% !important;
            max-width: 100% !important;
            min-height: 220px !important;
            height: 250px !important;
            padding: 8px !important;
          }
          .anim-container {
            width: 100% !important;
            max-width: 100% !important;
            height: 235px !important;
            flex-direction: column !important;
            gap: 8px !important;
          }
          .canvas-area svg, .canvas-area canvas {
            margin-top: 0 !important;
            max-width: 100% !important;
            max-height: 225px !important;
            object-fit: contain;
          }
          .controls, .btn-row, .button-group {
            flex-wrap: wrap !important;
            gap: 8px !important;
            justify-content: center !important;
          }
          .btn-play, .btn-start, .btn-action {
            margin-top: 10px !important;
            padding: 10px 22px !important;
            font-size: 0.95rem !important;
          }
        }
      `;
      doc.head.appendChild(style);
    }
  } catch {
    // Ignore cross-frame safely
  }
}
