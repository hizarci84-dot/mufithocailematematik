import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Download, Maximize2, Share2, Check, RefreshCw } from 'lucide-react';
import type { GradeLevel, TopicModule } from '../types/studio';
import { BRAND_CONFIG } from '../data/products';
import { fitHeroSandboxIframe } from '../utils/iframePreview';
import {
  copyTextToClipboard,
  downloadStandaloneHtml,
  getTopicShareUrl,
} from '../utils/shareAndDownload';

interface HeroProps {
  topics: TopicModule[];
  totalTopics: number;
  totalApps: number;
  showcaseTopic: TopicModule | null;
  showcaseTabs: TopicModule[];
  showcaseNonce: number;
  onSelectShowcaseTopic: (topic: TopicModule) => void;
  onShuffleShowcase: () => void;
  onSelectGrade: (grade: GradeLevel) => void;
  onOpenTopic: (topic: TopicModule, mode: 'animation' | 'lab') => void;
}

const QUICK_GRADES: GradeLevel[] = [5, 6, 7, 8, 9, 10, 11];

export function Hero({
  topics,
  totalTopics,
  totalApps,
  showcaseTopic,
  showcaseTabs,
  showcaseNonce,
  onSelectShowcaseTopic,
  onShuffleShowcase,
  onSelectGrade,
  onOpenTopic,
}: HeroProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [virtualSize, setVirtualSize] = useState({ w: 1120, h: 700 });
  const [containerWidth, setContainerWidth] = useState(340);
  const viewportRef = useRef<HTMLDivElement>(null);

  const activeTopic = showcaseTopic || topics[0];
  const visibleTabs = showcaseTabs.length > 0 ? showcaseTabs : activeTopic ? [activeTopic] : [];
  const activeVariant =
    activeTopic?.animations.find((a) => !a.isDraft) || activeTopic?.labs.find((l) => !l.isDraft);
  const iframeSrc = activeVariant ? `${import.meta.env.BASE_URL}${activeVariant.url}` : '';

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const updateWidth = () => {
      if (el.clientWidth > 0) setContainerWidth(el.clientWidth);
    };
    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    setVirtualSize({ w: 1120, h: 700 });
  }, [iframeSrc]);

  const scale = containerWidth / virtualSize.w;

  const handleCopyShare = async () => {
    if (!activeTopic) return;
    const ok = await copyTextToClipboard(getTopicShareUrl(activeTopic.id, 'animation'));
    if (ok) {
      setCopiedId(activeTopic.id);
      window.setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <section id="ust" className="border-b border-[var(--border-warm)] pt-8 pb-14 sm:pt-12 sm:pb-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        {/* Left: Editorial Copy & Navigation */}
        <div className="min-w-0 lg:col-span-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3.5 py-1 text-[11px] font-bold tracking-wider text-[var(--text-secondary)] uppercase">
            <span className="h-2 w-2 rounded-full bg-[var(--accent-terracotta)]" />
            <span>{BRAND_CONFIG.curriculumLabel}</span>
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:leading-[1.08]">
            Matematiği{' '}
            <span className="font-serif-editorial font-semibold italic text-[var(--accent-terracotta)]">
              görerek
            </span>{' '}
            anla, deneyerek keşfet.
          </h1>

          <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)]">
            Soyut kuralları canlı animasyonlara ve interaktif laboratuvarlara dönüştüren{' '}
            <strong className="font-bold text-[var(--text-primary)]">{BRAND_CONFIG.name}</strong>{' '}
            arşivi. İster tarayıcıda oynatın, ister bağlantı paylaşın, ister tek tıkla HTML olarak
            indirin.
          </p>

          {/* Compact Editorial Metrics Strip */}
          <div className="mt-6 grid grid-cols-3 gap-3 border-y border-[var(--border-warm)] py-4">
            <div>
              <div className="text-2xl font-extrabold text-[var(--text-primary)]">{totalTopics}</div>
              <div className="text-xs font-semibold text-[var(--text-secondary)]">Konu Modülü</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-[var(--accent-cobalt)]">{totalApps}</div>
              <div className="text-xs font-semibold text-[var(--text-secondary)]">
                Hazır Uygulama
              </div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-[var(--accent-teal)]">HTML5</div>
              <div className="text-xs font-semibold text-[var(--text-secondary)]">
                Paylaş &amp; İndir
              </div>
            </div>
          </div>

          {/* Primary Actions */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#kutuphane"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--bg-ink)] px-5 py-3 text-sm font-bold text-[#FFFDF8] shadow-md transition hover:-translate-y-0.5 hover:bg-[#2a2c33]"
            >
              <span>Tüm Arşivi İncele</span>
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#urunler"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-surface)] px-5 py-3 text-sm font-bold text-[var(--text-primary)] transition hover:border-[var(--text-primary)]"
            >
              <span>Uygulamalar &amp; Ürünler</span>
            </a>
          </div>

          {/* Quick Grade Jump */}
          <div className="mt-7">
            <p className="mb-2.5 text-[11px] font-bold tracking-wider text-[var(--text-muted)] uppercase">
              Sınıf Düzeyi Seçin
            </p>
            <div className="flex flex-wrap gap-1.5">
              {QUICK_GRADES.map((grade) => (
                <button
                  key={grade}
                  type="button"
                  onClick={() => onSelectGrade(grade)}
                  className="rounded-lg border border-[var(--border-warm)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs font-bold text-[var(--text-primary)] transition hover:border-[var(--accent-cobalt)] hover:bg-[var(--bg-linen)]"
                >
                  {grade}. Sınıf
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Single-Frame Scaled Live Interactive Sandbox Window */}
        <div className="min-w-0 lg:col-span-7">
          <div className="warm-card-shadow overflow-hidden rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-surface)]">
            {/* Showcase Tab Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-warm)] bg-[var(--bg-linen)]/75 px-3.5 py-2.5">
              <div className="flex flex-wrap items-center gap-1">
                {visibleTabs.map((item) => {
                  const active = activeTopic?.id === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => onSelectShowcaseTopic(item)}
                      title={`${item.code} — ${item.title}`}
                      className={`font-mono-code rounded-lg px-2.5 py-1.5 text-[11px] font-bold transition ${
                        active
                          ? 'bg-[var(--bg-ink)] text-[#FFFDF8] shadow-xs'
                          : 'text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {item.code}
                    </button>
                  );
                })}
                <button
                  type="button"
                  onClick={onShuffleShowcase}
                  title="Farklı bir animasyon vitrine getir"
                  className="inline-flex items-center gap-1 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] px-2.5 py-1.5 text-[11px] font-bold text-[var(--accent-terracotta)] transition hover:border-[var(--accent-terracotta)] hover:bg-[var(--accent-terracotta)] hover:text-white"
                >
                  <RefreshCw className="h-3 w-3" />
                  <span>Değiştir</span>
                </button>
              </div>

              {activeTopic && (
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleCopyShare}
                    title="Bu modülün paylaşım linkini kopyala"
                    className="inline-flex items-center gap-1 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] px-2.5 py-1.5 text-[11px] font-bold text-[var(--text-primary)] transition hover:border-[var(--text-primary)]"
                  >
                    {copiedId === activeTopic.id ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[var(--accent-teal)]" />
                        <span>Kopyalandı</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="h-3.5 w-3.5" />
                        <span>Paylaş</span>
                      </>
                    )}
                  </button>

                  {activeVariant && (
                    <button
                      type="button"
                      onClick={() => downloadStandaloneHtml(activeVariant.url, activeVariant.file)}
                      title="Çevrimdışı HTML olarak indir"
                      className="inline-flex items-center gap-1 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] px-2.5 py-1.5 text-[11px] font-bold text-[var(--text-primary)] transition hover:border-[var(--text-primary)]"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>HTML</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => onOpenTopic(activeTopic, 'animation')}
                    title="Tam ekranda büyüt"
                    className="inline-flex items-center gap-1 rounded-lg bg-[var(--accent-cobalt)] px-2.5 py-1.5 text-[11px] font-bold text-white transition hover:opacity-90"
                  >
                    <Maximize2 className="h-3.5 w-3.5" />
                    <span>Büyüt</span>
                  </button>
                </div>
              )}
            </div>

            {/* Auto-Scaled Single-Frame Live Viewport (No Scrollbars) */}
            <div
              ref={viewportRef}
              className="relative aspect-[16/10] w-full overflow-hidden bg-[#0F131B]"
            >
              {iframeSrc && (
                <iframe
                  key={`${iframeSrc}-${showcaseNonce}`}
                  src={iframeSrc}
                  title={activeTopic?.title || 'Canlı Matematik Önizleme'}
                  scrolling="no"
                  onLoad={(e) =>
                    fitHeroSandboxIframe(e.currentTarget, (w, h) => {
                      setVirtualSize((prev) => (prev.w === w && prev.h === h ? prev : { w, h }));
                    })
                  }
                  style={{
                    width: `${virtualSize.w}px`,
                    height: `${virtualSize.h}px`,
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                  }}
                  className="border-0"
                  loading="eager"
                />
              )}
            </div>

            {/* Bottom Caption Bar */}
            {activeTopic && (
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border-warm)] bg-[var(--bg-surface)] px-4 py-2.5 text-xs">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="font-mono-code shrink-0 rounded bg-[var(--bg-linen)] px-2 py-0.5 font-bold text-[var(--text-primary)]">
                    {activeTopic.code}
                  </span>
                  <span className="truncate font-bold text-[var(--text-primary)]">
                    {activeTopic.title}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 font-semibold text-[var(--accent-teal)]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  <span>Otomatik Oynatılıyor</span>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
