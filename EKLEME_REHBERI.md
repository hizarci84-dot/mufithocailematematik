# Müfit Hoca ile Matematik — Dijital Stüdyo Rehberi

Bu web sitesi hem mevcut **5–11. Sınıf Maarif Modeli Animasyon ve Etkinlik Arşivini** barındırmak hem de ileride üreteceğiniz **yeni uygulama ve ürünleri** kolayca ekleyebilmeniz için modüler olarak tasarlanmıştır.

---

## 1. Yeni Uygulama veya Ürün Ekleme (`Uygulamalar & Ürünler` Vitrini)

`src/data/products.ts` dosyasını açıp `STUDIO_PRODUCTS` dizisine yeni bir kart eklemeniz yeterlidir:

```ts
{
  id: 'yeni-uygulama-id',
  title: 'Fonksiyon Grafik Stüdyosu',
  subtitle: 'İnteraktif Grafik ve Türev İnceleme Aracı',
  description: 'Öğrencilerin gerçek zamanlı olarak fonksiyon çizip köklerini görebildiği web aracı.',
  category: 'Araç', // 'Uygulama' | 'Araç' | 'Eğitim Paketi' | 'Dijital Ürün'
  status: 'active', // 'active' | 'beta' | 'coming-soon'
  badge: 'Yeni • v1.0',
  accentColor: '#3B82F6',
  highlights: [
    'Gerçek zamanlı grafik çizimi',
    'Akıllı tahta tam ekran uyumu',
  ],
  actionLabel: 'Uygulamayı Başlat',
  href: 'apps/ozel/grafik-studyo.html', // veya harici https://... adresi
  openInPlayer: true, // site içi stüdyo penceresinde açar
}
```

Eğer kendi hazırladığınız tek dosya bir HTML uygulaması ise dosyayı `public/apps/...` içine koyup `href` kısmına yolunu yazabilirsiniz.

---

## 2. Müfredat Kütüphanesine Yeni Animasyon veya Etkinlik Ekleme

1. Yeni `.html` dosyanızı `Uygulamalar_ve_Animasyonlar/<Sinif>_Sinif/` klasörüne (`MAT_<Sinif>_<Tema>_<Sira>_Animasyon.html` veya `_Etkinlik.html` formatında) ekleyin.
2. Terminalde senkronizasyon ve anlık önizleme görseli oluşturma komutlarını çalıştırın:
   ```bash
   npm run sync
   npm run thumbs
   ```
Bu komutlar yeni dosyaları `public/apps/` klasörüne kopyalar, taslak/aktif durumlarını denetler, `src/data/catalog.ts` dosyasını günceller ve her kartın anlık önizleme görüntüsünü `public/thumbs/` altına kaydeder.

---

## 3. Yerel Çalıştırma ve Yayına Alma (Build)

- Geliştirme sunucusu: `npm run dev`
- Yayına hazır statik üretim (`dist/` klasörü): `npm run build`

`npm run build` sonrası oluşan `dist` klasörünü doğrudan **Vercel**, **Netlify**, **GitHub Pages** veya kendi web hosting alanınıza yükleyebilirsiniz.

---

## 4. Konu Bağlantısı Paylaşma ve Çevrimdışı HTML İndirme

- Herhangi bir konunun **Paylaş** menüsünden kopyalanan bağlantı (`?konu=mat-8-3-4&mod=animasyon`) açıldığında ziyaretçiyi doğrudan o konunun oynatıcısına götürür.
- **HTML İndir** düğmesi, seçili animasyon veya etkinliği `logo.png` görselini içine gömerek internetsiz akıllı tahtalarda da tek başına çalışabilen bağımsız `.html` dosyası olarak indirir.
