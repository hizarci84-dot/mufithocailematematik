import { useEffect, useRef, useState } from 'react';
import {
  X,
  Maximize2,
  Minimize2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Play,
  FlaskConical,
  Star,
  Clock,
  Share2,
  Download,
  Check,
  Link2,
  MessageCircle,
} from 'lucide-react';
import type { AppVariant, TopicModule } from '../types/studio';
import { activateAnimationAutoPlay, fitModalIframeOnMobile } from '../utils/iframePreview';
import {
  copyTextToClipboard,
  downloadStandaloneHtml,
  getDirectHtmlUrl,
  getTopicShareUrl,
  getWhatsAppShareUrl,
} from '../utils/shareAndDownload';

export interface PlayerTarget {
  topic?: TopicModule;
  customTitle?: string;
  customUrl?: string;
  mode: 'animation' | 'lab';
}

interface StudioPlayerModalProps {
  target: PlayerTarget | null;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onClose: () => void;
  onStepTopic?: (dir: -1 | 1) => void;
}

export function StudioPlayerModal({
  target,
  favorites,
  onToggleFavorite,
  onClose,
  onStepTopic,
}: StudioPlayerModalProps) {
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const [activeMode, setActiveMode] = useState<'animation' | 'lab'>('animation');
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [shareOpen, setShareOpen] = useState(false);
  const [copiedKind, setCopiedKind] = useState<'topic' | 'html' | null>(null);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    if (!target) return;
    setActiveMode(target.mode);
    setSelectedVariantIdx(0);
    setIsLoading(true);
    setShareOpen(false);
  }, [target]);

  useEffect(() => {
    if (!target) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [target]);

  useEffect(() => {
    if (!target) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !document.fullscreenElement) {
        onClose();
      } else if (e.key === 'ArrowLeft' && onStepTopic && target.topic) {
        onStepTopic(-1);
      } else if (e.key === 'ArrowRight' && onStepTopic && target.topic) {
        onStepTopic(1);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [target, onClose, onStepTopic]);

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  if (!target) return null;

  const topic = target.topic;
  const variants: AppVariant[] = topic
    ? activeMode === 'animation'
      ? topic.animations
      : topic.labs
    : [];

  const activeVariant = variants[selectedVariantIdx] || variants[0];
  const rawUrl = target.customUrl
    ? target.customUrl.startsWith('http') || target.customUrl.startsWith('/')
      ? target.customUrl
      : `${import.meta.env.BASE_URL}${target.customUrl}`
    : activeVariant
      ? `${import.meta.env.BASE_URL}${activeVariant.url}`
      : '';

  const isDraft = Boolean(activeVariant?.isDraft);
  const title = topic ? topic.title : target.customTitle || 'Uygulama';
  const isFav = topic ? favorites.includes(topic.id) : false;

  const readyAnimations = topic ? topic.animations.filter((a) => !a.isDraft) : [];
  const readyLabs = topic ? topic.labs.filter((l) => !l.isDraft) : [];

  const toggleFullscreen = async () => {
    if (!modalContainerRef.current) return;
    try {
      if (!document.fullscreenElement) {
        await modalContainerRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // Fullscreen restricted
    }
  };

  const handleCopy = async (kind: 'topic' | 'html') => {
    const text =
      kind === 'topic' && topic
        ? getTopicShareUrl(topic.id, activeMode)
        : activeVariant
          ? getDirectHtmlUrl(activeVariant.url)
          : window.location.href;
    const ok = await copyTextToClipboard(text);
    if (ok) {
      setCopiedKind(kind);
      window.setTimeout(() => setCopiedKind(null), 1800);
    }
  };

  const handleDownload = async () => {
    if (!activeVariant || isDraft || downloading) return;
    setDownloading(true);
    try {
      await downloadStandaloneHtml(activeVariant.url, activeVariant.file);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#191a1e]/70 p-2 backdrop-blur-sm sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalContainerRef}
        className={`flex h-full max-h-[94vh] w-full max-w-7xl flex-col overflow-hidden border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-2xl ${
          isFullscreen ? 'max-h-screen rounded-none' : 'rounded-3xl'
        }`}
      >
        {/* Top Toolbar */}
        <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-warm)] bg-[var(--bg-canvas)] px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              {topic && (
                <span className="font-mono-code rounded-md bg-[var(--bg-linen)] px-2 py-0.5 text-[11px] font-bold text-[var(--text-primary)]">
                  {topic.code}
                </span>
              )}
              <h2 className="truncate text-base font-extrabold text-[var(--text-primary)] sm:text-lg">
                {title}
              </h2>
            </div>
            {topic && <p className="truncate text-xs text-[var(--text-secondary)]">{topic.kazanim}</p>}
          </div>

          {/* Mode Switcher */}
          {topic && (
            <div className="flex flex-wrap items-center gap-1 rounded-xl border border-[var(--border-warm)] bg-[var(--bg-linen)] p-1">
              {topic.animations.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setActiveMode('animation');
                    setSelectedVariantIdx(0);
                    setIsLoading(true);
                  }}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                    activeMode === 'animation'
                      ? 'bg-[var(--bg-ink)] text-[#FFFDF8] shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  <span>
                    Animasyon{readyAnimations.length > 1 ? ` (${readyAnimations.length})` : ''}
                  </span>
                </button>
              )}

              {topic.labs.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setActiveMode('lab');
                    setSelectedVariantIdx(0);
                    setIsLoading(true);
                  }}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                    activeMode === 'lab'
                      ? 'bg-[var(--accent-teal)] text-white shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <FlaskConical className="h-3.5 w-3.5" />
                  <span>Etkinlik / Lab</span>
                </button>
              )}
            </div>
          )}

          {/* Controls */}
          <div className="flex items-center gap-1.5">
            {topic && onStepTopic && (
              <>
                <button
                  type="button"
                  onClick={() => onStepTopic(-1)}
                  title="Önceki konu (Sol Ok)"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-warm)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onStepTopic(1)}
                  title="Sonraki konu (Sağ Ok)"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-warm)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </>
            )}

            {/* Share Popover Trigger */}
            {topic && (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShareOpen((v) => !v)}
                  title="Paylaş"
                  className="inline-flex h-9 items-center gap-1.5 rounded-xl border border-[var(--border-warm)] bg-[var(--bg-surface)] px-3 text-xs font-bold text-[var(--text-primary)] transition hover:border-[var(--text-primary)]"
                >
                  <Share2 className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Paylaş</span>
                </button>

                {shareOpen && (
                  <div className="absolute top-11 right-0 z-30 w-60 rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-2 shadow-xl">
                    <button
                      type="button"
                      onClick={() => handleCopy('topic')}
                      className="flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-left text-xs font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-linen)]"
                    >
                      {copiedKind === 'topic' ? (
                        <Check className="h-3.5 w-3.5 text-[var(--accent-teal)]" />
                      ) : (
                        <Link2 className="h-3.5 w-3.5 text-[var(--accent-cobalt)]" />
                      )}
                      <span>
                        {copiedKind === 'topic' ? 'Konu Linki Kopyalandı!' : 'Konu Linkini Kopyala'}
                      </span>
                    </button>
                    {activeVariant && !isDraft && (
                      <button
                        type="button"
                        onClick={() => handleCopy('html')}
                        className="flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-left text-xs font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-linen)]"
                      >
                        {copiedKind === 'html' ? (
                          <Check className="h-3.5 w-3.5 text-[var(--accent-teal)]" />
                        ) : (
                          <Link2 className="h-3.5 w-3.5 text-[var(--accent-terracotta)]" />
                        )}
                        <span>
                          {copiedKind === 'html' ? 'HTML Linki Kopyalandı!' : 'Doğrudan HTML Linki'}
                        </span>
                      </button>
                    )}
                    <a
                      href={getWhatsAppShareUrl(topic.title, getTopicShareUrl(topic.id, activeMode))}
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-left text-xs font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-linen)]"
                    >
                      <MessageCircle className="h-3.5 w-3.5 text-emerald-700" />
                      <span>WhatsApp ile Paylaş</span>
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Standalone HTML Download */}
            {!isDraft && activeVariant && (
              <button
                type="button"
                onClick={handleDownload}
                disabled={downloading}
                title="Çevrimdışı tek dosya HTML olarak indir"
                className="inline-flex h-9 items-center gap-1.5 rounded-xl border border-[var(--border-warm)] bg-[var(--bg-surface)] px-3 text-xs font-bold text-[var(--text-primary)] transition hover:border-[var(--accent-terracotta)] hover:text-[var(--accent-terracotta)] disabled:opacity-50"
              >
                <Download className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">HTML İndir</span>
              </button>
            )}

            {topic && (
              <button
                type="button"
                onClick={() => onToggleFavorite(topic.id)}
                title="Favorilere ekle/çıkar"
                className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border transition ${
                  isFav
                    ? 'border-amber-500 bg-amber-400/20 text-amber-700'
                    : 'border-[var(--border-warm)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-amber-600'
                }`}
              >
                <Star className={`h-4 w-4 ${isFav ? 'fill-current' : ''}`} />
              </button>
            )}

            {!isDraft && rawUrl && (
              <a
                href={rawUrl}
                target="_blank"
                rel="noreferrer"
                title="Yeni sekmede aç"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-warm)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}

            <button
              type="button"
              onClick={toggleFullscreen}
              title={isFullscreen ? 'Tam ekrandan çık' : 'Akıllı Tahta Tam Ekran'}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-warm)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"
            >
              {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </button>

            <button
              type="button"
              onClick={onClose}
              title="Kapat (ESC)"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent-terracotta)] text-white transition hover:opacity-90"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>

        {/* Multi-variant Sub-tabs */}
        {variants.length > 1 && (
          <div className="flex flex-wrap items-center gap-2 border-b border-[var(--border-warm)] bg-[var(--bg-linen)]/60 px-4 py-2 sm:px-6">
            <span className="text-[11px] font-bold tracking-wider text-[var(--text-muted)] uppercase">
              Bölümler:
            </span>
            {variants.map((v, idx) => (
              <button
                key={v.file}
                type="button"
                onClick={() => {
                  setSelectedVariantIdx(idx);
                  setIsLoading(true);
                }}
                className={`rounded-lg px-3 py-1 text-xs font-bold transition ${
                  idx === selectedVariantIdx
                    ? 'bg-[var(--bg-ink)] text-[#FFFDF8]'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        )}

        {/* Stage Area */}
        <div className="relative flex-1 bg-[#0F131B]">
          {isDraft ? (
            <div className="flex h-full flex-col items-center justify-center bg-[var(--bg-canvas)] p-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-600/30 bg-amber-500/15 text-amber-700">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-2xl font-extrabold text-[var(--text-primary)]">
                Bu Bölüm Hazırlanıyor
              </h3>
              <p className="mt-2 max-w-md text-sm text-[var(--text-secondary)]">
                {topic?.code} konusu için bu modül henüz taslak aşamasındadır. Tamamlandığında
                otomatik olarak burada yer alacaktır.
              </p>
              {activeMode === 'animation' && readyLabs.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setActiveMode('lab');
                    setSelectedVariantIdx(0);
                    setIsLoading(true);
                  }}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[var(--accent-teal)] px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-95"
                >
                  <FlaskConical className="h-4 w-4" />
                  <span>Hazır Olan Etkinlik / Laboratuvara Geç</span>
                </button>
              )}
              {activeMode === 'lab' && readyAnimations.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setActiveMode('animation');
                    setSelectedVariantIdx(0);
                    setIsLoading(true);
                  }}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[var(--bg-ink)] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[var(--accent-cobalt)]"
                >
                  <Play className="h-4 w-4 fill-current" />
                  <span>Hazır Olan Animasyona Geç</span>
                </button>
              )}
            </div>
          ) : (
            <>
              {isLoading && (
                <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0F131B]/90">
                  <div className="h-9 w-9 animate-spin rounded-full border-3 border-white/20 border-t-white" />
                  <span className="mt-3 text-xs font-bold tracking-wider text-slate-300 uppercase">
                    Uygulama Açılıyor...
                  </span>
                </div>
              )}
              <iframe
                key={rawUrl}
                src={rawUrl}
                title={title}
                onLoad={(e) => {
                  setIsLoading(false);
                  if (!target.customUrl?.startsWith('http')) {
                    if (activeMode === 'animation') {
                      activateAnimationAutoPlay(e.currentTarget, {
                        hideControls: true,
                        autoLoop: true,
                      });
                    }
                    if (window.innerWidth < 768) {
                      fitModalIframeOnMobile(e.currentTarget);
                    }
                  }
                }}
                className="h-full w-full border-0"
                allow="fullscreen"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
