import { useEffect, useRef } from 'react';
import { BookOpen, Monitor, Users, ShieldCheck, X } from 'lucide-react';

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

function UsageGuideDetails({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <p
        className={`leading-relaxed text-[var(--text-secondary)] ${
          compact ? 'text-xs sm:text-[13px]' : 'text-sm sm:text-base'
        }`}
      >
        <strong>Müfit Hoca ile Matematik — Dijital Stüdyo</strong>; ortaokul ve lise matematik
        derslerini görselleştirmek, öğrenciyi pasif izleyiciden aktif kaşife dönüştürmek ve
        öğretmenlerin sınıf içi uygulamalarını desteklemek amacıyla hazırlanmış ücretsiz bir
        dijital eğitim platformudur.
      </p>

      {/* 3-Column Audience & Purpose Grid */}
      <div
        className={`grid md:grid-cols-3 ${
          compact ? 'mt-3.5 gap-3 sm:gap-4' : 'mt-8 gap-6'
        }`}
      >
        {USAGE_PILLARS.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <article
              key={pillar.audience}
              className={`warm-card-shadow flex flex-col rounded-2xl border border-[var(--border-warm)] bg-[var(--bg-surface)] ${
                compact ? 'p-3.5 sm:p-4' : 'p-6'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`flex shrink-0 items-center justify-center rounded-xl text-white ${
                    compact ? 'h-8 w-8' : 'h-10 w-10'
                  }`}
                  style={{ backgroundColor: pillar.accent }}
                >
                  <Icon className={compact ? 'h-4 w-4' : 'h-5 w-5'} />
                </div>
                <span className="text-[11px] font-extrabold tracking-wider text-[var(--text-muted)] uppercase sm:text-xs">
                  {pillar.audience}
                </span>
              </div>

              <h3
                className={`font-extrabold text-[var(--text-primary)] ${
                  compact ? 'mt-2.5 text-sm sm:text-[15px]' : 'mt-3.5 text-base sm:text-lg'
                }`}
              >
                {pillar.title}
              </h3>
              <p
                className={`flex-1 leading-relaxed text-[var(--text-secondary)] ${
                  compact ? 'mt-1.5 text-xs' : 'mt-2 text-xs sm:text-sm'
                }`}
              >
                {pillar.description}
              </p>

              <ul
                className={`border-t border-[var(--border-warm)] ${
                  compact ? 'mt-3 space-y-1 pt-2.5' : 'mt-4 space-y-1.5 pt-3.5'
                }`}
              >
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
      <div
        className={`flex flex-col gap-3 rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-linen)]/70 sm:flex-row sm:items-start sm:gap-3.5 ${
          compact ? 'mt-3.5 p-3 sm:px-4 sm:py-3' : 'mt-8 p-5 sm:p-6'
        }`}
      >
        <div
          className={`flex shrink-0 items-center justify-center rounded-xl bg-[var(--bg-ink)] text-[#FFFDF8] ${
            compact ? 'h-9 w-9' : 'h-10 w-10'
          }`}
        >
          <ShieldCheck className={compact ? 'h-4.5 w-4.5' : 'h-5 w-5'} />
        </div>
        <div
          className={`leading-relaxed text-[var(--text-secondary)] ${
            compact ? 'text-xs' : 'text-xs sm:text-sm'
          }`}
        >
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
    </>
  );
}

export function UsageGuideSection() {
  return (
    <section
      id="kullanim-amaci"
      className="border-t border-[var(--border-warm)] bg-[var(--bg-canvas)] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-3 max-w-3xl">
          <p className="text-xs font-bold tracking-widest text-[var(--accent-terracotta)] uppercase">
            Platform Rehberi &amp; İlkeler
          </p>
          <h2 className="mt-1.5 text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Web Sitesinin Kullanım Amacı
          </h2>
        </div>
        <UsageGuideDetails />
      </div>
    </section>
  );
}

interface UsageGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UsageGuideModal({ isOpen, onClose }: UsageGuideModalProps) {
  const modalCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="usage-modal-title"
      onClick={(e) => {
        if (modalCardRef.current && !modalCardRef.current.contains(e.target as Node)) {
          onClose();
        }
      }}
      className="no-scrollbar fixed inset-0 z-50 overflow-y-auto bg-[#0F131B]/75 p-2.5 backdrop-blur-sm sm:p-5"
    >
      <div className="flex min-h-full items-center justify-center">
        <div
          ref={modalCardRef}
          className="flex w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-[var(--border-warm)] bg-[var(--bg-canvas)] shadow-2xl"
        >
          {/* Modal Header */}
          <div className="flex items-start justify-between gap-3 border-b border-[var(--border-warm)] bg-[var(--bg-surface)] px-4 py-3 sm:px-6 sm:py-3.5">
            <div className="min-w-0">
              <p className="text-[11px] font-bold tracking-widest text-[var(--accent-terracotta)] uppercase">
                Platform Rehberi &amp; İlkeler
              </p>
              <h2
                id="usage-modal-title"
                className="mt-0.5 text-lg font-extrabold tracking-tight text-[var(--text-primary)] sm:text-xl"
              >
                Web Sitesinin Kullanım Amacı
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Kullanım Amacı penceresini kapat"
              title="Kapat (Esc)"
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[var(--border-warm)] bg-[var(--bg-canvas)] text-[var(--text-primary)] transition hover:border-[var(--accent-terracotta)] hover:bg-[var(--accent-terracotta)] hover:text-white sm:h-9 sm:w-9"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          </div>

          {/* Modal Body (no inner scrollbar; all desktop content fits comfortably in view) */}
          <div className="px-4 py-3.5 sm:px-6 sm:py-4">
            <UsageGuideDetails compact />
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-end gap-3 border-t border-[var(--border-warm)] bg-[var(--bg-surface)] px-4 py-2.5 sm:px-6">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl bg-[var(--bg-ink)] px-5 py-2 text-xs font-bold text-[#FFFDF8] transition hover:bg-[var(--accent-cobalt)] sm:text-sm"
            >
              Anladım, Kapat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
