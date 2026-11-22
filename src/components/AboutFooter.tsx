import { ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/products';
import type { GradeLevel } from '../types/studio';

interface AboutFooterProps {
  onSelectGrade: (grade: GradeLevel) => void;
  onOpenUsageModal: () => void;
  onOpenLiveShowcase: () => void;
}

const FOOTER_GRADES: GradeLevel[] = [5, 6, 7, 8, 9, 10, 11];

export function AboutFooter({
  onSelectGrade,
  onOpenUsageModal,
  onOpenLiveShowcase,
}: AboutFooterProps) {
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`;

  return (
    <footer id="hakkinda" className="border-t border-[var(--border-warm)] bg-[var(--bg-surface)] pt-14 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand Story */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-4">
              <img
                src={logoSrc}
                alt={BRAND_CONFIG.name}
                className="h-16 w-16 rounded-full border border-[var(--border-strong)] bg-[#14171d] object-cover shadow-sm"
              />
              <div>
                <h3 className="text-xl font-extrabold text-[var(--text-primary)]">
                  {BRAND_CONFIG.name}
                </h3>
                <p className="text-xs font-bold text-[var(--accent-terracotta)]">
                  {BRAND_CONFIG.tagline}
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)]">
              Matematiği yalnızca kural ezberi olmaktan çıkarıp, öğrencinin gözüyle görebildiği ve
              kendi eliyle manipüle edebildiği canlı bir keşif alanına dönüştürmek amacıyla
              oluşturulan dijital matematik ve uygulama stüdyosu.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-strong)] bg-[var(--bg-canvas)] px-4 py-2 text-xs font-bold text-[var(--text-primary)] transition hover:border-[var(--text-primary)]"
              >
                <span>Instagram: {BRAND_CONFIG.handle}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[var(--accent-terracotta)]" />
              </a>
            </div>
          </div>

          {/* Quick Grade Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-extrabold tracking-wider text-[var(--text-primary)] uppercase">
              Sınıf Kütüphaneleri
            </h4>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {FOOTER_GRADES.map((g) => (
                <li key={g}>
                  <button
                    type="button"
                    onClick={() => onSelectGrade(g)}
                    className="text-xs font-semibold text-[var(--text-secondary)] transition hover:text-[var(--accent-cobalt)]"
                  >
                    {g}. Sınıf Matematik
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform Sections */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-extrabold tracking-wider text-[var(--text-primary)] uppercase">
              Stüdyo Bölümleri
            </h4>
            <ul className="mt-3 space-y-2 text-xs font-semibold text-[var(--text-secondary)]">
              <li>
                <button
                  type="button"
                  onClick={onOpenLiveShowcase}
                  className="text-left transition hover:text-[var(--accent-cobalt)]"
                >
                  Canlı Vitrin
                </button>
              </li>
              <li>
                <a href="#kutuphane" className="transition hover:text-[var(--accent-cobalt)]">
                  Animasyon &amp; Etkinlik Arşivi
                </a>
              </li>
              <li>
                <a href="#urunler" className="transition hover:text-[var(--accent-cobalt)]">
                  Uygulamalar &amp; Ürünler
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenUsageModal}
                  className="text-left transition hover:text-[var(--accent-cobalt)]"
                >
                  Kullanım Amacı &amp; İlkeler
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[var(--border-warm)] pt-6 text-xs text-[var(--text-muted)] sm:flex-row">
          <span>
            © {new Date().getFullYear()} {BRAND_CONFIG.name} — Tüm hakları saklıdır.
          </span>
          <span className="font-mono-code text-[11px]">{BRAND_CONFIG.curriculumLabel}</span>
        </div>
      </div>
    </footer>
  );
}
