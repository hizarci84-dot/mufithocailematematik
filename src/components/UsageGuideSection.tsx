import { BookOpen, Monitor, Users, ShieldCheck } from 'lucide-react';

const USAGE_PILLARS = [
  {
    icon: BookOpen,
    audience: 'Öğrenciler İçin',
    title: 'Ezber Değil, Görsel Kavrayış',
    accent: '#D94E34',
    description:
      'Soyut matematik kurallarını formül ezberine sıkıştırmadan adım adım animasyonlarla somutlaştırır; etkileşimli laboratuvarlarda değerleri değiştirerek kuralı kendinizin keşfetmesini sağlar.',
    points: [
      'Önce konu animasyonuyla mantığı sezin',
      'Etkinlik / Lab ekranında deneyerek pekiştirin',
      '5–7. sınıf portallarıyla bireysel karne oluşturun',
    ],
  },
  {
    icon: Monitor,
    audience: 'Öğretmenler İçin',
    title: 'Akıllı Tahta & Çevrimdışı Kullanım',
    accent: '#1D4ED8',
    description:
      'Sınıf içi ders anlatımlarında zaman kazandırmak için tasarlanmıştır. Her modül tam ekran tahta modunu destekler, öğrencilere tek bağlantıyla gönderilebilir veya HTML olarak indirilebilir.',
    points: [
      'Tek tıkla tam ekran akıllı tahta sunum modu',
      'İnternetsiz sınıflar için tek dosya HTML indirme',
      'Konu veya kazanım koduyla anında arama (Ctrl + K)',
    ],
  },
  {
    icon: Users,
    audience: 'Veliler & Genel Kullanım',
    title: 'Ücretsiz, Reklamsız Açık Kaynak',
    accent: '#0F766E',
    description:
      'Türkiye Yüzyılı Maarif Modeli kazanımlarını destekleyen tamamlayıcı dijital kaynaklar sunar. Üyelik zorunluluğu veya reklam olmadan tüm cihazlardan (telefon, tablet, bilgisayar) erişilebilir.',
    points: [
      'Kayıt veya abonelik gerektirmeyen açık erişim',
      '5. sınıftan 11. sınıfa müfredatla birebir eşleşme',
      'Evde güvenli ve etkileşimli ders tekrarı',
    ],
  },
];

export function UsageGuideSection() {
  return (
    <section
      id="kullanim-amaci"
      className="border-t border-[var(--border-warm)] bg-[var(--bg-canvas)] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-bold tracking-widest text-[var(--accent-terracotta)] uppercase">
            Platform Rehberi &amp; İlkeler
          </p>
          <h2 className="mt-1.5 text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Web Sitesinin Kullanım Amacı
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            <strong>Müfit Hoca ile Matematik — Dijital Stüdyo</strong>; ortaokul ve lise matematik
            derslerini görselleştirmek, öğrenciyi pasif izleyiciden aktif kaşife dönüştürmek ve
            öğretmenlerin sınıf içi uygulamalarını desteklemek amacıyla hazırlanmış ücretsiz bir
            dijital eğitim platformudur.
          </p>
        </div>

        {/* 3-Column Audience & Purpose Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {USAGE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.audience}
                className="warm-card-shadow flex flex-col rounded-2xl border border-[var(--border-warm)] bg-[var(--bg-surface)] p-6"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: pillar.accent }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-extrabold tracking-wider text-[var(--text-muted)] uppercase">
                    {pillar.audience}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-extrabold text-[var(--text-primary)]">
                  {pillar.title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                  {pillar.description}
                </p>

                <ul className="mt-4 space-y-1.5 border-t border-[var(--border-warm)] pt-4">
                  {pillar.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2 text-xs font-semibold text-[var(--text-primary)]"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: pillar.accent }}
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Scope & Open-Education Notice */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-linen)]/70 p-5 sm:flex-row sm:items-start sm:p-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--bg-ink)] text-[#FFFDF8]">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
            <strong className="block font-extrabold text-[var(--text-primary)]">
              Kullanım Koşulları &amp; Eğitim Kapsamı Bilgilendirmesi
            </strong>
            Bu web sitesindeki tüm animasyonlar, etkileşimli laboratuvarlar ve web portalları;
            <strong> MEB Türkiye Yüzyılı Maarif Modeli</strong> müfredatını destekleyici eğitim
            materyali olarak Matematik Öğretmeni <strong>Müfit Hızarcı</strong> tarafından
            hazırlanmıştır. İçerikler eğitim amaçlı ücretsiz olarak sınıflarda kullanılabilir,
            öğrencilerle paylaşılabilir ve indirilen HTML dosyaları ticari amaç taşımadan derslerde
            çevrimdışı çalıştırılabilir.
          </div>
        </div>
      </div>
    </section>
  );
}
