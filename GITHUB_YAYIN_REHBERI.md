# GitHub Pages Yayınlama Rehberi

Bu proje **GitHub Pages** için tam uyumlu hale getirilmiştir:
- `vite.config.ts` içinde `base: './'` tanımlıdır; böylece ister `https://kullaniciadi.github.io/` ana adresinde ister `https://kullaniciadi.github.io/depo-adi/` gibi herhangi bir alt klasör/depo adında tüm animasyonlar, önizleme görselleri ve logolar sorunsuz çalışır.
- `.github/workflows/deploy.yml` dosyası her `main` / `master` güncellemesinde siteyi otomatik derleyip yayınlar.
- `public/.nojekyll` dosyası GitHub Pages'in statik dosyaları değiştirmeden sunmasını sağlar.

---

## 1. Web Sitesi ve GitHub Depo (Repo) İsim Önerileri

Henüz isim konusunda kesin karar vermediyseniz, markanızla ve GitHub URL yapısıyla uyumlu seçeneklerden birini seçebilirsiniz (depo adını ne koyarsanız koyun site sorunsuz çalışır):

| Kullanım Şekli | Örnek Depo Adı | Oluşan Adres |
|---|---|---|
| **Kişisel / Ana Marka** | `mufithoca.github.io` *(GitHub kullanıcı adınız `mufithoca` ise)* | `https://mufithoca.github.io/` |
| **Stüdyo Odaklı** | `matematik-studyo` | `https://<kullanici-adi>.github.io/matematik-studyo/` |
| **Marka Birebir (Seçilen)** | `mufithocailematematik` | `https://hizarci84-dot.github.io/mufithocailematematik/` |
| **Kısa & Akılda Kalıcı** | `mat-lab` veya `dijital-matematik` | `https://<kullanici-adi>.github.io/dijital-matematik/` |

### Site Adını İstediğiniz Zaman Tek Yerden Değiştirme
İsme sonradan karar verdiğinizde sadece [src/data/products.ts](src/data/products.ts) dosyasının başındaki `BRAND_CONFIG` alanını değiştirmeniz yeterlidir:
```ts
export const BRAND_CONFIG = {
  name: 'Müfit Hoca ile Matematik', // Yeni site adını buraya yazın
  tagline: 'Dijital Stüdyo',        // Alt başlığı buradan değiştirin
  ...
};
```
Bu değişiklik hem üst menüyü, hem tarayıcı sekmesi başlığını hem de alt bilgiyi otomatik olarak günceller. (İsterseniz `index.html` içindeki `<title>` ve `<meta name="description">` satırlarını da aynı şekilde güncelleyebilirsiniz.)

---

## 2. GitHub'a Yükleme ve Yayınlama Adımları

1. **GitHub'da Yeni Depo Oluşturun**:
   - GitHub hesabınıza girip **New repository** (`Public` önerilir) oluşturun.
2. **Klasörü GitHub'a Gönderin**:
   Proje klasöründe terminal açıp şu komutları çalıştırın (`<DEPO_URL>` yerine kendi GitHub depo adresinizi yazın):
   ```bash
   git init
   git add .
   git commit -m "Müfit Hoca Dijital Stüdyo ilk sürüm"
   git branch -M main
   git remote add origin <DEPO_URL>
   git push -u origin main
   ```
3. **GitHub Pages'i Açın (Tek Seferlik Ayar)**:
   - GitHub deponuzda **Settings → Pages** sekmesine gidin.
   - **Build and deployment → Source** kısmını **GitHub Actions** olarak seçin.
4. **Otomatik Yayın**:
   - **Actions** sekmesinde `GitHub Pages Yayını` işinin yeşil onay almasını bekleyin (~1 dakika).
   - İş tamamlandığında aynı ekranda canlı web sitesi adresiniz (`https://...github.io/...`) görünecektir.

---

## 3. İleride Özel Alan Adı (`mufithoca.com` vb.) Bağlama

Bir alan adı aldığınızda `public/CNAME` adında bir dosya oluşturup içine yalnızca alan adınızı (ör. `mufithoca.com`) yazmanız ve alan adı sağlayıcınızdan GitHub Pages DNS kayıtlarını yönlendirmeniz yeterlidir.
