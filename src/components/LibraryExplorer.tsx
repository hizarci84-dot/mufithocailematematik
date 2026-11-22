import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Search,
  X,
  LayoutGrid,
  List,
  Star,
  Play,
  FlaskConical,
  Clock,
  Eye,
  EyeOff,
  Download,
  Share2,
} from 'lucide-react';
import type { GradeLevel, TopicModule } from '../types/studio';
import { normalizeTurkish } from '../utils/turkishSearch';
import { TopicCard } from './TopicCard';
import {
  copyTextToClipboard,
  downloadStandaloneHtml,
  getTopicShareUrl,
} from '../utils/shareAndDownload';

interface LibraryExplorerProps {
  topics: TopicModule[];
  selectedGrade: 'all' | GradeLevel;
  onChangeGrade: (grade: 'all' | GradeLevel) => void;
  favorites: string[];
  onlyFavorites: boolean;
  onToggleOnlyFavorites: (val: boolean) => void;
  onToggleFavorite: (id: string) => void;
  onOpenTopic: (topic: TopicModule, mode: 'animation' | 'lab') => void;
}

const GRADES: { value: 'all' | GradeLevel; label: string }[] = [
  { value: 'all', label: 'Tümü' },
  { value: 5, label: '5. Sınıf' },
  { value: 6, label: '6. Sınıf' },
  { value: 7, label: '7. Sınıf' },
  { value: 8, label: '8. Sınıf' },
  { value: 9, label: '9. Sınıf' },
  { value: 10, label: '10. Sınıf' },
  { value: 11, label: '11. Sınıf' },
];

export function LibraryExplorer({
  topics,
  selectedGrade,
  onChangeGrade,
  favorites,
  onlyFavorites,
  onToggleOnlyFavorites,
  onToggleFavorite,
  onOpenTopic,
}: LibraryExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTheme, setSelectedTheme] = useState<string>('all');
  const [contentMode, setContentMode] = useState<'all' | 'both' | 'anim' | 'lab'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showDrafts, setShowDrafts] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const availableThemes = useMemo(() => {
    const set = new Set<string>();
    for (const t of topics) {
      if (selectedGrade === 'all' || t.grade === selectedGrade) {
        set.add(t.theme);
      }
    }
    return [...set];
  }, [topics, selectedGrade]);

  useEffect(() => {
    if (selectedTheme !== 'all' && !availableThemes.includes(selectedTheme)) {
      setSelectedTheme('all');
    }
  }, [availableThemes, selectedTheme]);

  const gradeCounts = useMemo(() => {
    const counts: Record<string, number> = { all: topics.length };
    for (const t of topics) {
      counts[t.grade] = (counts[t.grade] || 0) + 1;
    }
    return counts;
  }, [topics]);

  const filteredTopics = useMemo(() => {
    const q = normalizeTurkish(searchQuery);
    return topics.filter((topic) => {
      if (selectedGrade !== 'all' && topic.grade !== selectedGrade) return false;
      if (selectedTheme !== 'all' && topic.theme !== selectedTheme) return false;
      if (onlyFavorites && !favorites.includes(topic.id)) return false;

      const readyAnimCount = topic.animations.filter((a) => !a.isDraft).length;
      const readyLabCount = topic.labs.filter((l) => !l.isDraft).length;

      if (contentMode === 'both' && !(readyAnimCount > 0 && readyLabCount > 0)) return false;
      if (contentMode === 'anim' && readyAnimCount === 0) return false;
      if (contentMode === 'lab' && readyLabCount === 0) return false;

      if (!q) return true;

      const haystack = normalizeTurkish(
        `${topic.code} ${topic.title} ${topic.description} ${topic.theme} ${topic.kazanim} ${topic.tags.join(' ')} ${topic.grade}. sinif`
      );
      return haystack.includes(q);
    });
  }, [topics, selectedGrade, selectedTheme, onlyFavorites, favorites, contentMode, searchQuery]);

  const groupedByTheme = useMemo(() => {
    const map = new Map<string, TopicModule[]>();
    for (const t of filteredTopics) {
      const key = selectedGrade === 'all' ? `${t.grade}. Sınıf • ${t.theme}` : t.theme;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(t);
    }
    return [...map.entries()];
  }, [filteredTopics, selectedGrade]);

  return (
    <section id="kutuphane" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold tracking-widest text-[var(--accent-terracotta)] uppercase">
              Etkileşimli Müfredat Kütüphanesi
            </p>
            <h2 className="mt-1.5 text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Animasyon &amp; Etkinlik Arşivi
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-[var(--text-secondary)] sm:text-base">
              Kartların üzerine gelerek animasyonu anında oynatın; tıklayarak tam ekran açın, link
              paylaşın veya çevrimdışı HTML dosyasını indirin.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowDrafts((v) => !v)}
              title="10. sınıftaki henüz hazırlanmakta olan 9 taslak dosyayı göster/gizle"
              className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-bold transition ${
                showDrafts
                  ? 'border-amber-600/40 bg-amber-500/12 text-amber-800'
                  : 'border-[var(--border-warm)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {showDrafts ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
              <span>Taslaklar {showDrafts ? 'Açık' : 'Gizli'}</span>
            </button>

            <div className="inline-flex rounded-xl border border-[var(--border-warm)] bg-[var(--bg-surface)] p-1">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                aria-label="Kart görünümü"
                title="Kart Görünümü"
                className={`rounded-lg p-1.5 transition ${
                  viewMode === 'grid'
                    ? 'bg-[var(--bg-ink)] text-[#FFFDF8]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                aria-label="Liste görünümü"
                title="Müfredat Liste Görünümü"
                className={`rounded-lg p-1.5 transition ${
                  viewMode === 'list'
                    ? 'bg-[var(--bg-ink)] text-[#FFFDF8]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="warm-card-shadow mt-8 rounded-3xl border border-[var(--border-warm)] bg-[var(--bg-surface)] p-4 sm:p-5">
          {/* Grade Tabs */}
          <div className="flex flex-wrap gap-2">
            {GRADES.map(({ value, label }) => {
              const active = selectedGrade === value;
              return (
                <button
                  key={String(value)}
                  type="button"
                  onClick={() => onChangeGrade(value)}
                  className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition sm:text-sm ${
                    active
                      ? 'bg-[var(--bg-ink)] text-[#FFFDF8] shadow-sm'
                      : 'border border-[var(--border-warm)] bg-[var(--bg-linen)]/55 text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <span>{label}</span>
                  <span
                    className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold ${
                      active
                        ? 'bg-white/20 text-white'
                        : 'bg-[var(--bg-surface)] text-[var(--text-secondary)]'
                    }`}
                  >
                    {gradeCounts[String(value)] || 0}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search & Selectors */}
          <div className="mt-4 grid gap-3 lg:grid-cols-12">
            <div className="relative lg:col-span-6">
              <Search className="pointer-events-none absolute top-1/2 left-4 h-4.5 w-4.5 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Konu, kavram veya MAT.8.3.4 ara..."
                className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-canvas)]/70 py-2.5 pr-9 pl-11 text-sm font-medium text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-cobalt)] focus:bg-[var(--bg-surface)] focus:outline-none sm:pr-20"
              />
              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Aramayı temizle"
                  className="absolute top-1/2 right-3 -translate-y-1/2 rounded-lg bg-[var(--bg-linen)] p-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  <X className="h-4 w-4" />
                </button>
              ) : (
                <kbd className="font-mono-code pointer-events-none absolute top-1/2 right-3 hidden -translate-y-1/2 rounded-md border border-[var(--border-warm)] bg-[var(--bg-surface)] px-2 py-0.5 text-[10px] font-bold text-[var(--text-muted)] sm:inline-block">
                  Ctrl + K
                </kbd>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2 lg:col-span-6 lg:justify-end">
              <select
                aria-label="İçerik türü filtresi"
                value={contentMode}
                onChange={(e) => setContentMode(e.target.value as typeof contentMode)}
                className="rounded-xl border border-[var(--border-strong)] bg-[var(--bg-canvas)]/70 px-3.5 py-2.5 text-xs font-bold text-[var(--text-primary)] focus:border-[var(--accent-cobalt)] focus:outline-none"
              >
                <option value="all">Tüm İçerikler</option>
                <option value="both">Animasyon + Etkinlik Çiftleri</option>
                <option value="anim">Animasyonu Hazır Olanlar</option>
                <option value="lab">Etkinliği Hazır Olanlar</option>
              </select>

              <button
                type="button"
                onClick={() => onToggleOnlyFavorites(!onlyFavorites)}
                className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2.5 text-xs font-bold transition ${
                  onlyFavorites
                    ? 'border-amber-600/50 bg-amber-500/15 text-amber-800'
                    : 'border-[var(--border-strong)] bg-[var(--bg-canvas)]/70 text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Star className={`h-3.5 w-3.5 ${onlyFavorites ? 'fill-amber-600 text-amber-600' : ''}`} />
                <span>Favorilerim ({favorites.length})</span>
              </button>
            </div>
          </div>

          {/* Dynamic Theme Pills */}
          <div className="mt-4 flex flex-wrap items-center gap-1.5 border-t border-[var(--border-warm)] pt-3.5">
            <span className="mr-1 text-[11px] font-bold tracking-wider text-[var(--text-muted)] uppercase">
              Tema:
            </span>
            <button
              type="button"
              onClick={() => setSelectedTheme('all')}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                selectedTheme === 'all'
                  ? 'bg-[var(--accent-cobalt)] text-white'
                  : 'text-[var(--text-secondary)] hover:bg-[var(--bg-linen)] hover:text-[var(--text-primary)]'
              }`}
            >
              Tümü
            </button>
            {availableThemes.map((theme) => (
              <button
                key={theme}
                type="button"
                onClick={() => setSelectedTheme(theme)}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                  selectedTheme === theme
                    ? 'bg-[var(--accent-cobalt)] text-white'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--bg-linen)] hover:text-[var(--text-primary)]'
                }`}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>

        {/* Result Count */}
        <div className="mt-6 flex items-center justify-between text-xs font-semibold text-[var(--text-secondary)]">
          <span>
            Toplam <strong className="text-[var(--text-primary)]">{filteredTopics.length}</strong>{' '}
            konu modülü listeleniyor
          </span>
          {(searchQuery ||
            selectedGrade !== 'all' ||
            selectedTheme !== 'all' ||
            onlyFavorites ||
            contentMode !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                onChangeGrade('all');
                setSelectedTheme('all');
                setContentMode('all');
                onToggleOnlyFavorites(false);
              }}
              className="font-bold text-[var(--accent-terracotta)] hover:underline"
            >
              Filtreleri Sıfırla
            </button>
          )}
        </div>

        {/* Results */}
        {filteredTopics.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-dashed border-[var(--border-strong)] bg-[var(--bg-surface)] p-12 text-center">
            <h3 className="text-xl font-extrabold text-[var(--text-primary)]">
              Eşleşen konu bulunamadı
            </h3>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Farklı bir anahtar kelime deneyin veya sınıf/tema filtrelerini sıfırlayın.
            </p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTopics.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                isFavorite={favorites.includes(topic.id)}
                showDrafts={showDrafts}
                onToggleFavorite={onToggleFavorite}
                onOpen={onOpenTopic}
              />
            ))}
          </div>
        ) : (
          <div className="mt-6 space-y-6">
            {groupedByTheme.map(([groupLabel, groupTopics]) => (
              <div
                key={groupLabel}
                className="warm-card-shadow overflow-hidden rounded-2xl border border-[var(--border-warm)] bg-[var(--bg-surface)]"
              >
                <div className="flex items-center justify-between border-b border-[var(--border-warm)] bg-[var(--bg-linen)]/70 px-5 py-3">
                  <h3 className="text-sm font-extrabold text-[var(--text-primary)] sm:text-base">
                    {groupLabel}
                  </h3>
                  <span className="rounded-md bg-[var(--bg-surface)] px-2.5 py-0.5 text-xs font-bold text-[var(--text-secondary)]">
                    {groupTopics.length} konu
                  </span>
                </div>
                <div className="divide-y divide-[var(--border-warm)]">
                  {groupTopics.map((topic) => {
                    const readyAnims = topic.animations.filter((a) => !a.isDraft);
                    const readyLabs = topic.labs.filter((l) => !l.isDraft);
                    const primary = readyAnims[0] || readyLabs[0];
                    const isFav = favorites.includes(topic.id);

                    return (
                      <div
                        key={topic.id}
                        className="flex flex-col justify-between gap-4 px-5 py-4 transition hover:bg-[var(--bg-canvas)]/60 sm:flex-row sm:items-center"
                      >
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono-code rounded bg-[var(--bg-linen)] px-2 py-0.5 text-[11px] font-bold text-[var(--text-primary)]">
                              {topic.code}
                            </span>
                            <span className="text-base font-extrabold text-[var(--text-primary)]">
                              {topic.title}
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-[var(--text-secondary)]">
                            {topic.description}
                          </p>
                        </div>

                        <div className="flex shrink-0 flex-wrap items-center gap-2">
                          {readyAnims.length > 0 ? (
                            <button
                              type="button"
                              onClick={() => onOpenTopic(topic, 'animation')}
                              className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--bg-ink)] px-3 py-2 text-xs font-bold text-[#FFFDF8] transition hover:bg-[var(--accent-cobalt)]"
                            >
                              <Play className="h-3.5 w-3.5 fill-current" />
                              <span>Animasyon</span>
                            </button>
                          ) : (
                            showDrafts &&
                            topic.animations.length > 0 && (
                              <span className="inline-flex items-center gap-1 rounded-lg border border-dashed border-[var(--border-strong)] px-2.5 py-1.5 text-[11px] font-bold text-[var(--accent-amber)]">
                                <Clock className="h-3 w-3" /> Yakında
                              </span>
                            )
                          )}

                          {readyLabs.length > 0 && (
                            <button
                              type="button"
                              onClick={() => onOpenTopic(topic, 'lab')}
                              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-linen)] px-3 py-2 text-xs font-bold text-[var(--text-primary)] transition hover:bg-[var(--accent-teal)] hover:text-white"
                            >
                              <FlaskConical className="h-3.5 w-3.5" />
                              <span>Etkinlik</span>
                            </button>
                          )}

                          <button
                            type="button"
                            onClick={async () => {
                              const ok = await copyTextToClipboard(
                                getTopicShareUrl(topic.id, readyAnims.length > 0 ? 'animation' : 'lab')
                              );
                              if (ok) {
                                setCopiedId(topic.id);
                                window.setTimeout(() => setCopiedId(null), 1500);
                              }
                            }}
                            title="Paylaşım bağlantısını kopyala"
                            className="rounded-lg border border-[var(--border-warm)] px-2.5 py-2 text-xs font-bold text-[var(--text-secondary)] transition hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"
                          >
                            {copiedId === topic.id ? 'Kopyalandı' : <Share2 className="h-3.5 w-3.5" />}
                          </button>

                          {primary && (
                            <button
                              type="button"
                              onClick={() => downloadStandaloneHtml(primary.url, primary.file)}
                              title="Çevrimdışı HTML indir"
                              className="rounded-lg border border-[var(--border-warm)] p-2 text-[var(--text-secondary)] transition hover:border-[var(--accent-terracotta)] hover:text-[var(--accent-terracotta)]"
                            >
                              <Download className="h-3.5 w-3.5" />
                            </button>
                          )}

                          <button
                            type="button"
                            onClick={() => onToggleFavorite(topic.id)}
                            aria-label="Favori"
                            className={`rounded-lg border p-2 transition ${
                              isFav
                                ? 'border-amber-500 bg-amber-400/20 text-amber-700'
                                : 'border-[var(--border-warm)] text-[var(--text-secondary)] hover:text-amber-600'
                            }`}
                          >
                            <Star className={`h-3.5 w-3.5 ${isFav ? 'fill-current' : ''}`} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
