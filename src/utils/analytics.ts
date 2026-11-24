import type { TopicModule } from '../types/studio';

export const GA_MEASUREMENT_ID = 'G-MT196BXTX7';

type EventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params?: EventParams): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  try {
    window.gtag('event', eventName, params || {});
  } catch {
    // Analytics blocker veya çevrimdışı durumlarda akışı bozma
  }
}

export function trackTopicOpen(
  topic: TopicModule,
  mode: 'animation' | 'lab',
  source: 'hero' | 'kart' | 'liste' | 'menu' | 'modal_sekme' | 'modal_gecis' | 'dogrudan_link'
): void {
  trackEvent('konu_ac', {
    konu_kodu: topic.code,
    konu_basligi: topic.title.slice(0, 100),
    sinif: topic.grade,
    tur: mode === 'animation' ? 'animasyon' : 'etkinlik',
    kaynak: source,
  });
}

export function trackHtmlDownload(
  topicCode: string,
  fileName: string,
  source: 'hero' | 'kart' | 'liste' | 'modal'
): void {
  trackEvent('html_indir', {
    konu_kodu: topicCode,
    dosya_adi: fileName.slice(0, 100),
    kaynak: source,
  });
}

export function trackShareAction(
  target: string,
  method: 'konu_linki' | 'html_linki' | 'whatsapp' | 'portal_linki',
  source: 'hero' | 'kart' | 'liste' | 'modal' | 'urunler'
): void {
  trackEvent('paylasim', {
    hedef: target.slice(0, 100),
    yontem: method,
    kaynak: source,
  });
}

export function trackPortalClick(
  productTitle: string,
  action: 'portal_ac' | 'onizleme' | 'kutuphane_atlama',
  source: 'urunler' | 'menu' | 'mobil_menu'
): void {
  trackEvent('portal_tiklama', {
    uygulama_adi: productTitle.slice(0, 100),
    eylem: action,
    kaynak: source,
  });
}

export function trackFilterChange(
  filterType: 'sinif' | 'tema' | 'icerik' | 'arama' | 'favoriler',
  value: string
): void {
  trackEvent('filtreleme', {
    filtre_turu: filterType,
    deger: value.slice(0, 100),
  });
}

export function trackShowcaseAction(
  action: 'menu' | 'degistir' | 'sekme',
  topicCode: string
): void {
  trackEvent('canli_vitrin', {
    eylem: action,
    konu_kodu: topicCode,
  });
}

export function trackUsageModal(source: 'menu' | 'mobil_menu' | 'footer'): void {
  trackEvent('kullanim_amaci_ac', {
    kaynak: source,
  });
}

export function trackSocialClick(
  platform: 'instagram',
  source: 'navbar' | 'mobil_menu' | 'footer'
): void {
  trackEvent('sosyal_baglanti', {
    platform,
    kaynak: source,
  });
}
