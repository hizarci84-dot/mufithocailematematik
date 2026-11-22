import type { StudioProduct } from '../types/studio';

export const BRAND_CONFIG = {
  name: 'Müfit Hoca ile Matematik',
  tagline: 'Dijital Stüdyo',
  handle: '@mufithocailematematik',
  instagramUrl: 'https://www.instagram.com/mufithocailematematik',
  curriculumLabel: 'Türkiye Yüzyılı Maarif Modeli • 5–11. Sınıf',
};

/**
 * YENİ UYGULAMA VEYA ÜRÜN EKLEME ALANI
 * İleride geliştirdiğiniz herhangi bir web uygulaması, hesaplayıcı, oyun veya dijital ürünü
 * aşağıdaki diziye yeni bir nesne ekleyerek anında sitede yayınlayabilirsiniz.
 */
export const STUDIO_PRODUCTS: StudioProduct[] = [
  {
    id: 'tymm-5-sinif-etkinlik-portali',
    title: '5. Sınıf İnteraktif Matematik Etkinlik Portalı',
    subtitle: 'MEB Türkiye Yüzyılı Maarif Modeli • 32 Canlı Simülatör & Atölye',
    description:
      '7 temayı kapsayan 8 Destekleme ve 24 Zenginleştirme etkinliği; canlı simülatörler, KaTeX formül motoru, 3200 puanlık ilerleme sistemi ve bireysel gelişim karnesi.',
    category: 'Uygulama',
    status: 'active',
    badge: 'Yayında • %100 Ücretsiz',
    accentColor: '#0F766E',
    highlights: [
      '32 canlı simülatör ve atölye (8 Destekleme + 24 Zenginleştirme)',
      '7 Maarif Modeli teması & ders kitabı sayfa eşleşmesi',
      'Öğrenci profili & Gelişim Raporu / Dijital Karne çıktısı',
    ],
    actionLabel: 'Portalı Başlat',
    href: 'https://script.google.com/macros/s/AKfycbwKDBhCjX8C-FVMvjmHjBnrBed6LvoymMCYT7fcAEfO6u1ddym-I8Y0RQsekXsaNK7h/exec',
    allowModalPreview: true,
  },
  {
    id: 'tymm-6-sinif-etkinlik-portali',
    title: '6. Sınıf İnteraktif Matematik Etkinlik Portalı',
    subtitle: 'MEB Türkiye Yüzyılı Maarif Modeli • 23 Canlı Simülatör & Atölye',
    description:
      '6. sınıf müfredatına özel 13 Destekleme ve 10 Zenginleştirme etkinliği; tüm cihazlarda canlı çalışan etkileşimli simülatörler ve bireysel gelişim karnesi.',
    category: 'Uygulama',
    status: 'active',
    badge: 'Yayında • %100 Ücretsiz',
    accentColor: '#0284C7',
    highlights: [
      '23 canlı simülatör ve atölye (13 Destekleme + 10 Zenginleştirme)',
      'MEB Türkiye Yüzyılı Maarif Modeli 6. sınıf uyumlu',
      'Bireysel gelişim karnesi, dijital rapor & tüm cihazlarda canlı',
    ],
    actionLabel: 'Portalı Başlat',
    href: 'https://script.google.com/macros/s/AKfycbwKPgXBt585CX5Dn1TUlOoH8BkwWWxpQifyWzG1OUcZKAtg8Bc59hgR5xfsZBMZcQclmw/exec',
    allowModalPreview: true,
  },
  {
    id: 'tymm-7-sinif-etkinlik-portali',
    title: '7. Sınıf İnteraktif Matematik Etkinlik Portalı',
    subtitle: 'MEB Türkiye Yüzyılı Maarif Modeli • 24 Canlı Simülatör & Atölye',
    description:
      'Tam Sayılar & Cebir Terazisi, Açı & Çember Stüdyosu dahil 12 Destekleme + 12 Zenginleştirme etkinliği; Google Cloud ve WhatsApp karne entegrasyonlu web uygulaması.',
    category: 'Uygulama',
    status: 'active',
    badge: 'Yayında • %100 Ücretsiz',
    accentColor: '#1D4ED8',
    highlights: [
      '24 canlı simülatör & atölye (12 Destekleme + 12 Zenginleştirme)',
      'Tam Sayılar & Cebir Terazisi, Açı & Çember Stüdyosu',
      'Google Cloud & WhatsApp karne entegrasyonu, reklamsız & tüm cihazlarda canlı',
    ],
    actionLabel: 'Portalı Başlat',
    href: 'https://script.google.com/macros/s/AKfycby-3P9vbGTMfJd2zyoZukrFcdH0OkSe1UVakEKLy3exyOorrq3k6-DXUgEDG4xlBLfZXA/exec',
    allowModalPreview: true,
  },
  {
    id: 'yeni-uygulama-ve-urunler',
    title: 'Yeni Uygulamalar & Dijital Ürünler',
    subtitle: 'Üst Sınıf Portalları, Sınav Araçları ve Eğitim Paketleri',
    description:
      'Sıradaki sınıf portalları, LGS/TYT hesaplayıcıları, dinamik geometri araçları ve öğretmenler için dijital ders kaynaklarının yayınlanacağı vitrin alanı.',
    category: 'Dijital Ürün',
    status: 'coming-soon',
    badge: 'Yakında',
    accentColor: '#D94E34',
    highlights: [
      '8–11. sınıf dijital etkinlik portalları',
      'LGS / TYT sınav araçları ve özel web uygulamaları',
      'Öğretmen ve öğrencilere özel dijital kaynaklar',
    ],
    actionLabel: 'Çok Yakında',
  },
];
