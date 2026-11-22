import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Star,
  ArrowUpRight,
  ChevronDown,
  ExternalLink,
  Maximize2,
  Clock,
  ArrowDown,
  Play,
  Menu,
  X,
} from 'lucide-react';
import { BRAND_CONFIG, STUDIO_PRODUCTS } from '../data/products';
import type { GradeLevel, TopicModule } from '../types/studio';

interface NavbarProps {
  topics: TopicModule[];
  favoritesCount: number;
  onJumpToFavorites: () => void;
  onSelectGrade: (grade: 'all' | GradeLevel) => void;
  onOpenTopic: (topic: TopicModule, mode: 'animation' | 'lab') => void;
  onOpenAppUrl: (title: string, url: string) => void;
  onOpenUsageModal: () => void;
  onOpenLiveShowcase: () => void;
}

const GRADES: { grade: GradeLevel; group: 'Ortaokul' | 'Lise' }[] = [
  { grade: 5, group: 'Ortaokul' },
  { grade: 6, group: 'Ortaokul' },
  { grade: 7, group: 'Ortaokul' },
  { grade: 8, group: 'Ortaokul' },
  { grade: 9, group: 'Lise' },
  { grade: 10, group: 'Lise' },
  { grade: 11, group: 'Lise' },
];

export function Navbar({
  topics,
  favoritesCount,
  onJumpToFavorites,
  onSelectGrade,
  onOpenTopic,
  onOpenAppUrl,
  onOpenUsageModal,
  onOpenLiveShowcase,
}: NavbarProps) {
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`;
  const [openMenu, setOpenMenu] = useState<'anim' | 'products' | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoverGrade, setHoverGrade] = useState<GradeLevel>(5);
  const closeTimerRef = useRef<number | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      window.removeEventListener('keydown', onKeyDown);
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  const gradeStats = useMemo(() => {
    const map = new Map<GradeLevel, { count: number; themes: string[]; sampleTopics: TopicModule[] }>();
    for (const { grade } of GRADES) {
      const list = topics.filter((t) => t.grade === grade);
      const themes = [...new Set(list.map((t) => t.theme))];
      const ready = list.filter((t) => t.hasCompletedContent);
      map.set(grade, {
        count: list.length,
        themes,
        sampleTopics: ready.slice(0, 4),
      });
    }
    return map;
  }, [topics]);

  const activeGradeData = gradeStats.get(hoverGrade);

  const openDropdown = (which: 'anim' | 'products') => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenMenu(which);
  };

  const scheduleClose = () => {
    closeTimerRef.current = window.setTimeout(() => {
      setOpenMenu(null);
    }, 170);
  };

  const jumpToLibraryGrade = (grade: 'all' | GradeLevel) => {
    setOpenMenu(null);
    setMobileOpen(false);
    onSelectGrade(grade);
    document.getElementById('kutuphane')?.scrollIntoView({ behavior: 'smooth' });
  };

  const jumpToProductsSection = () => {
    setOpenMenu(null);
    setMobileOpen(false);
    document.getElementById('urunler')?.scrollIntoView({ behavior: 'smooth' });
  };

  const triggerLiveShowcase = () => {
    setOpenMenu(null);
    setMobileOpen(false);
    onOpenLiveShowcase();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-warm)] bg-[var(--bg-canvas)]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-2.5 sm:gap-4 sm:px-6 sm:py-3 lg:px-8">
        {/* Brand Stamp */}
        <a href="#ust" className="group flex min-w-0 items-center gap-2.5 focus:outline-none sm:gap-3">
          <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[var(--border-strong)] bg-[#14171d] shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
            <img
              src={logoSrc}
              alt="Müfit Hoca ile Matematik Logosu"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-sm font-extrabold tracking-tight text-[var(--text-primary)] sm:text-lg">
              {BRAND_CONFIG.name}
            </span>
            <span className="truncate text-[11px] font-semibold text-[var(--text-secondary)] sm:text-xs">
              {BRAND_CONFIG.tagline} • 5–11. Sınıf
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav ref={navRef} className="hidden items-center gap-1 md:flex" aria-label="Ana menü">
          <button
            type="button"
            onClick={triggerLiveShowcase}
            className="rounded-lg px-3.5 py-2 text-sm font-semibold text-[var(--text-secondary)] transition hover:bg-[var(--bg-linen)] hover:text-[var(--text-primary)]"
          >
            Canlı Vitrin
          </button>

          {/* Dropdown Menu Trigger: Animasyon & Etkinlikler */}
          <div
            className="relative"
            onMouseEnter={() => openDropdown('anim')}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() => setOpenMenu((v) => (v === 'anim' ? null : 'anim'))}
              aria-expanded={openMenu === 'anim'}
              aria-haspopup="true"
              className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold transition ${
                openMenu === 'anim'
                  ? 'bg-[var(--bg-linen)] text-[var(--text-primary)]'
                  : 'text-[var(--text-secondary)] hover:bg-[var(--bg-linen)] hover:text-[var(--text-primary)]'
              }`}
            >
              <span>Animasyon &amp; Etkinlikler</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  openMenu === 'anim' ? 'rotate-180 text-[var(--accent-terracotta)]' : ''
                }`}
              />
            </button>

            {openMenu === 'anim' && (
              <div className="warm-card-shadow-hover absolute top-full left-1/2 z-50 mt-2 w-[560px] -translate-x-1/2 rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-3.5">
                <div className="flex items-center justify-between border-b border-[var(--border-warm)] px-2 pb-2">
                  <span className="text-[11px] font-extrabold tracking-wider text-[var(--text-muted)] uppercase">
                    Sınıfa Göre Animasyon &amp; Etkinlikler
                  </span>
                  <button
                    type="button"
                    onClick={() => jumpToLibraryGrade('all')}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--accent-cobalt)] hover:underline"
                  >
                    <span>Tüm {topics.length} Modülü Gör</span>
                    <ArrowDown className="h-3 w-3" />
                  </button>
                </div>

                <div className="mt-2.5 grid grid-cols-12 gap-3">
                  {/* Left: Grade Selector */}
                  <div className="col-span-5 space-y-1 border-r border-[var(--border-warm)] pr-2.5">
                    {GRADES.map(({ grade, group }) => {
                      const count = gradeStats.get(grade)?.count || 0;
                      const active = hoverGrade === grade;
                      return (
                        <button
                          key={grade}
                          type="button"
                          onMouseEnter={() => setHoverGrade(grade)}
                          onFocus={() => setHoverGrade(grade)}
                          onClick={() => jumpToLibraryGrade(grade)}
                          className={`flex w-full items-center justify-between rounded-xl px-2.5 py-2 text-left text-xs font-bold transition ${
                            active
                              ? 'bg-[var(--bg-ink)] text-[#FFFDF8]'
                              : 'text-[var(--text-primary)] hover:bg-[var(--bg-linen)]'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span>{grade}. Sınıf</span>
                            <span
                              className={`text-[10px] font-semibold ${
                                active ? 'text-white/70' : 'text-[var(--text-muted)]'
                              }`}
                            >
                              {group}
                            </span>
                          </div>
                          <span
                            className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold ${
                              active
                                ? 'bg-white/20 text-white'
                                : 'bg-[var(--bg-linen)] text-[var(--text-secondary)]'
                            }`}
                          >
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Right: Themes & Quick Launch for Hovered Grade */}
                  <div className="col-span-7 flex flex-col justify-between pl-1">
                    <div>
                      <div className="text-[11px] font-extrabold tracking-wide text-[var(--accent-terracotta)] uppercase">
                        {hoverGrade}. Sınıf Öne Çıkan Konular
                      </div>
                      <div className="mt-2 space-y-1.5">
                        {activeGradeData?.sampleTopics.map((topic) => {
                          const mode: 'animation' | 'lab' = topic.animations.some((a) => !a.isDraft)
                            ? 'animation'
                            : 'lab';
                          return (
                            <button
                              key={topic.id}
                              type="button"
                              onClick={() => {
                                setOpenMenu(null);
                                onOpenTopic(topic, mode);
                              }}
                              className="group/topic flex w-full items-center justify-between gap-2 rounded-xl border border-[var(--border-warm)] bg-[var(--bg-canvas)]/60 px-2.5 py-2 text-left transition hover:border-[var(--border-strong)] hover:bg-[var(--bg-linen)]"
                            >
                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="font-mono-code text-[10px] font-bold text-[var(--text-muted)]">
                                    {topic.code}
                                  </span>
                                  <span className="truncate text-xs font-bold text-[var(--text-primary)] group-hover/topic:text-[var(--accent-cobalt)]">
                                    {topic.title}
                                  </span>
                                </div>
                              </div>
                              <Play className="h-3 w-3 shrink-0 fill-current text-[var(--accent-terracotta)]" />
                            </button>
                          );
                        })}
                      </div>

                      {activeGradeData && (
                        <div className="mt-2.5 flex flex-wrap gap-1">
                          {activeGradeData.themes.slice(0, 4).map((th) => (
                            <span
                              key={th}
                              className="rounded-md bg-[var(--bg-linen)]/75 px-2 py-0.5 text-[10px] font-semibold text-[var(--text-secondary)]"
                            >
                              {th}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => jumpToLibraryGrade(hoverGrade)}
                      className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-[var(--accent-cobalt)] px-3 py-2 text-xs font-bold text-white transition hover:opacity-95"
                    >
                      <span>{hoverGrade}. Sınıfın Tüm Modüllerini Aç</span>
                      <ArrowDown className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Dropdown Menu Trigger: Uygulamalar & Ürünler */}
          <div
            className="relative"
            onMouseEnter={() => openDropdown('products')}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() => setOpenMenu((v) => (v === 'products' ? null : 'products'))}
              aria-expanded={openMenu === 'products'}
              aria-haspopup="true"
              className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold transition ${
                openMenu === 'products'
                  ? 'bg-[var(--bg-linen)] text-[var(--text-primary)]'
                  : 'text-[var(--text-secondary)] hover:bg-[var(--bg-linen)] hover:text-[var(--text-primary)]'
              }`}
            >
              <span>Uygulamalar &amp; Ürünler</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  openMenu === 'products' ? 'rotate-180 text-[var(--accent-terracotta)]' : ''
                }`}
              />
            </button>

            {openMenu === 'products' && (
              <div className="warm-card-shadow-hover absolute top-full left-1/2 z-50 mt-2 w-[430px] -translate-x-1/2 rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-3">
                <div className="flex items-center justify-between border-b border-[var(--border-warm)] px-2.5 pb-2">
                  <span className="text-[11px] font-extrabold tracking-wider text-[var(--text-muted)] uppercase">
                    Uygulamalar &amp; Ürünler
                  </span>
                  <button
                    type="button"
                    onClick={jumpToProductsSection}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--accent-cobalt)] hover:underline"
                  >
                    <span>Aşağıdaki Vitrini Gör</span>
                    <ArrowDown className="h-3 w-3" />
                  </button>
                </div>

                <div className="mt-2 space-y-1.5">
                  {STUDIO_PRODUCTS.map((product) => {
                    const isComingSoon = product.status === 'coming-soon' || !product.href;
                    return (
                      <div
                        key={product.id}
                        className={`flex items-center justify-between gap-3 rounded-xl border p-2.5 transition ${
                          isComingSoon
                            ? 'border-dashed border-[var(--border-warm)] bg-[var(--bg-canvas)]/60 opacity-80'
                            : 'border-[var(--border-warm)] bg-[var(--bg-canvas)]/50 hover:border-[var(--border-strong)] hover:bg-[var(--bg-linen)]/70'
                        }`}
                      >
                        {isComingSoon ? (
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="truncate text-xs font-extrabold text-[var(--text-primary)]">
                                {product.title}
                              </span>
                              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-amber-700/12 px-2 py-0.5 text-[10px] font-bold text-amber-800">
                                <Clock className="h-2.5 w-2.5" />
                                {product.badge}
                              </span>
                            </div>
                            <p className="mt-0.5 truncate text-[11px] text-[var(--text-secondary)]">
                              {product.subtitle}
                            </p>
                          </div>
                        ) : (
                          <>
                            <a
                              href={product.href}
                              target="_blank"
                              rel="noreferrer"
                              onClick={() => setOpenMenu(null)}
                              className="group/item min-w-0 flex-1"
                            >
                              <div className="flex items-center gap-2">
                                <span
                                  className="h-2 w-2 shrink-0 rounded-full"
                                  style={{ backgroundColor: product.accentColor }}
                                />
                                <span className="truncate text-xs font-extrabold text-[var(--text-primary)] group-hover/item:text-[var(--accent-cobalt)]">
                                  {product.title}
                                </span>
                              </div>
                              <p className="mt-0.5 truncate pl-4 text-[11px] text-[var(--text-secondary)]">
                                {product.subtitle}
                              </p>
                            </a>

                            <div className="flex shrink-0 items-center gap-1">
                              {product.allowModalPreview && product.href && (
                                <button
                                  type="button"
                                  onClick={() => {
                                    setOpenMenu(null);
                                    onOpenAppUrl(product.title, product.href!);
                                  }}
                                  title="Site içi pencerede önizle"
                                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-warm)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition hover:border-[var(--accent-cobalt)] hover:text-[var(--accent-cobalt)]"
                                >
                                  <Maximize2 className="h-3.5 w-3.5" />
                                </button>
                              )}
                              <a
                                href={product.href}
                                target="_blank"
                                rel="noreferrer"
                                onClick={() => setOpenMenu(null)}
                                title="Yeni sekmede aç"
                                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--bg-ink)] text-[#FFFDF8] transition hover:bg-[var(--accent-cobalt)]"
                              >
                                <ExternalLink className="h-3.5 w-3.5" />
                              </a>
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => {
              setOpenMenu(null);
              setMobileOpen(false);
              onOpenUsageModal();
            }}
            className="rounded-lg px-3.5 py-2 text-sm font-semibold text-[var(--text-secondary)] transition hover:bg-[var(--bg-linen)] hover:text-[var(--text-primary)]"
          >
            Kullanım Amacı
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex shrink-0 items-center gap-2">
          {favoritesCount > 0 && (
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onJumpToFavorites();
              }}
              title="Favori konuları göster"
              className="inline-flex items-center gap-1 rounded-full border border-amber-600/30 bg-amber-500/10 px-2.5 py-1.5 text-xs font-bold text-amber-800 transition hover:bg-amber-500/20"
            >
              <Star className="h-3.5 w-3.5 fill-amber-600 text-amber-600" />
              <span>{favoritesCount}</span>
              <span className="hidden sm:inline">Favori</span>
            </button>
          )}

          {/* Desktop Instagram Pill */}
          <a
            href={BRAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3.5 py-2 text-xs font-bold text-[var(--text-primary)] shadow-xs transition hover:border-[var(--text-primary)] md:inline-flex"
          >
            <span>{BRAND_CONFIG.handle}</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-[var(--accent-terracotta)]" />
          </a>

          {/* Mobile Hamburger Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={mobileOpen}
            className="inline-flex h-10 items-center gap-1.5 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3 text-xs font-bold text-[var(--text-primary)] shadow-xs md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            <span>Menü</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="max-h-[82vh] overflow-y-auto border-t border-[var(--border-warm)] bg-[var(--bg-surface)] px-4 py-4 shadow-xl md:hidden">
          <div className="space-y-4">
            {/* Quick Grade Jump */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] font-extrabold tracking-wider text-[var(--text-muted)] uppercase">
                  Animasyon &amp; Etkinlikler
                </span>
                <button
                  type="button"
                  onClick={() => jumpToLibraryGrade('all')}
                  className="text-xs font-bold text-[var(--accent-cobalt)]"
                >
                  Tüm Arşiv ({topics.length})
                </button>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {GRADES.map(({ grade }) => (
                  <button
                    key={grade}
                    type="button"
                    onClick={() => jumpToLibraryGrade(grade)}
                    className="rounded-lg border border-[var(--border-warm)] bg-[var(--bg-canvas)] px-2 py-2 text-xs font-bold text-[var(--text-primary)] active:bg-[var(--bg-ink)] active:text-white"
                  >
                    {grade}. Sınıf
                  </button>
                ))}
              </div>
            </div>

            {/* Uygulamalar & Ürünler */}
            <div className="border-t border-[var(--border-warm)] pt-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] font-extrabold tracking-wider text-[var(--text-muted)] uppercase">
                  Uygulamalar &amp; Ürünler
                </span>
                <button
                  type="button"
                  onClick={jumpToProductsSection}
                  className="text-xs font-bold text-[var(--accent-cobalt)]"
                >
                  Vitrini Gör
                </button>
              </div>
              <div className="space-y-1.5">
                {STUDIO_PRODUCTS.map((product) =>
                  product.status === 'coming-soon' || !product.href ? (
                    <div
                      key={product.id}
                      className="flex items-center justify-between rounded-xl border border-dashed border-[var(--border-warm)] px-3 py-2 text-xs text-[var(--text-secondary)]"
                    >
                      <span className="truncate font-bold">{product.title}</span>
                      <span className="shrink-0 rounded-full bg-amber-700/12 px-2 py-0.5 text-[10px] font-bold text-amber-800">
                        {product.badge}
                      </span>
                    </div>
                  ) : (
                    <a
                      key={product.id}
                      href={product.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between gap-2 rounded-xl border border-[var(--border-warm)] bg-[var(--bg-canvas)] px-3 py-2.5 text-xs font-bold text-[var(--text-primary)]"
                    >
                      <span className="truncate">{product.title}</span>
                      <ExternalLink className="h-3.5 w-3.5 shrink-0 text-[var(--accent-cobalt)]" />
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Section Links & Instagram */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border-warm)] pt-3">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={triggerLiveShowcase}
                  className="rounded-lg border border-[var(--border-warm)] px-3 py-2 text-xs font-bold text-[var(--text-primary)]"
                >
                  Canlı Vitrin
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenUsageModal();
                  }}
                  className="rounded-lg border border-[var(--border-warm)] px-3 py-2 text-xs font-bold text-[var(--text-primary)]"
                >
                  Kullanım Amacı
                </button>
              </div>

              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-[var(--bg-ink)] px-3.5 py-2 text-xs font-bold text-[#FFFDF8]"
              >
                <span>{BRAND_CONFIG.handle}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
