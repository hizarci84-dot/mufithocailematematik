import { useEffect, useRef, useState } from 'react';
import {
  Play,
  FlaskConical,
  Star,
  Share2,
  Download,
  Check,
  Clock,
  MessageCircle,
  Link2,
} from 'lucide-react';
import type { TopicModule } from '../types/studio';
import { MathThumbArtwork } from './MathThumbArtwork';
import { activateIframeHoverPreview } from '../utils/iframePreview';
import {
  trackHtmlDownload,
  trackShareAction,
  trackTopicOpen,
} from '../utils/analytics';
import {
  copyTextToClipboard,
  downloadStandaloneHtml,
  getDirectHtmlUrl,
  getTopicShareUrl,
  getWhatsAppShareUrl,
} from '../utils/shareAndDownload';

interface TopicCardProps {
  topic: TopicModule;
  isFavorite: boolean;
  showDrafts: boolean;
  onToggleFavorite: (id: string) => void;
  onOpen: (topic: TopicModule, mode: 'animation' | 'lab') => void;
}

const VIRTUAL_W = 1040;
const VIRTUAL_H = 650;

export function TopicCard({
  topic,
  isFavorite,
  showDrafts,
  onToggleFavorite,
  onOpen,
}: TopicCardProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const hoverTimerRef = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [previewActive, setPreviewActive] = useState(false);
  const [thumbFailed, setThumbFailed] = useState(false);
  const [scale, setScale] = useState(0.35);
  const [shareOpen, setShareOpen] = useState(false);
  const [copiedType, setCopiedType] = useState<'topic' | 'html' | null>(null);
  const [downloading, setDownloading] = useState(false);

  const readyAnims = topic.animations.filter((a) => !a.isDraft);
  const readyLabs = topic.labs.filter((l) => !l.isDraft);
  const primaryAnim = readyAnims[0] || readyLabs[0];
  const defaultMode: 'animation' | 'lab' = readyAnims.length > 0 ? 'animation' : 'lab';

  const animIsDraftOnly = topic.animations.length > 0 && readyAnims.length === 0;
  const labIsDraftOnly = topic.labs.length > 0 && readyLabs.length === 0;

  // Compute exact scale factor so the 960x600 live app fits the 16:10 card stage edge-to-edge
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const updateScale = () => {
      const w = el.clientWidth;
      if (w > 0) setScale(w / VIRTUAL_W);
    };
    updateScale();
    const ro = new ResizeObserver(updateScale);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current);
    };
  }, []);

  const handleStageEnter = () => {
    if (!primaryAnim) return;
    setIsHovered(true);
    hoverTimerRef.current = window.setTimeout(() => {
      setPreviewActive(true);
    }, 140);
  };

  const handleStageLeave = () => {
    setIsHovered(false);
    if (hoverTimerRef.current) {
      window.clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    setPreviewActive(false);
  };

  const openFromCard = (mode: 'animation' | 'lab') => {
    trackTopicOpen(topic, mode, 'kart');
    onOpen(topic, mode);
  };

  const handleCopy = async (kind: 'topic' | 'html') => {
    const text =
      kind === 'topic'
        ? getTopicShareUrl(topic.id, defaultMode)
        : primaryAnim
          ? getDirectHtmlUrl(primaryAnim.url)
          : getTopicShareUrl(topic.id, defaultMode);

    const ok = await copyTextToClipboard(text);
    if (ok) {
      trackShareAction(topic.code, kind === 'topic' ? 'konu_linki' : 'html_linki', 'kart');
      setCopiedType(kind);
      window.setTimeout(() => setCopiedType(null), 1800);
    }
  };

  const handleDownload = async () => {
    if (!primaryAnim || downloading) return;
    trackHtmlDownload(topic.code, primaryAnim.file, 'kart');
    setDownloading(true);
    try {
      await downloadStandaloneHtml(primaryAnim.url, primaryAnim.file);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <article
      className="warm-card-shadow hover:warm-card-shadow-hover group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border-warm)] bg-[var(--bg-surface)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)]"
      onMouseLeave={() => {
        handleStageLeave();
        setShareOpen(false);
      }}
    >
      {/* 16:10 Interactive Hover-to-Play Stage */}
      <div
        ref={stageRef}
        onMouseEnter={handleStageEnter}
        onMouseLeave={handleStageLeave}
        onClick={() => openFromCard(defaultMode)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openFromCard(defaultMode);
          }
        }}
        aria-label={`${topic.title} önizlemesini aç`}
        className="relative aspect-[16/10] w-full cursor-pointer overflow-hidden border-b border-[var(--border-warm)] bg-[#181C24] focus:outline-none focus:ring-2 focus:ring-[var(--accent-cobalt)]"
      >
        {/* Real Captured Mid-Animation Frame (Resting Preview) */}
        <div
          className={`h-full w-full transition-opacity duration-300 ${
            previewActive ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {!thumbFailed ? (
            <img
              src={`${import.meta.env.BASE_URL}thumbs/${topic.id}.jpg`}
              alt={`${topic.code} ${topic.title} anlık görüntüsü`}
              loading="lazy"
              onError={() => setThumbFailed(true)}
              className="h-full w-full object-cover object-center"
            />
          ) : (
            <MathThumbArtwork topic={topic} />
          )}
        </div>

        {/* Live Scaled HTML Animation on Hover */}
        {previewActive && primaryAnim && (
          <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#0F172A]">
            <iframe
              src={`${import.meta.env.BASE_URL}${primaryAnim.url}`}
              title={`${topic.title} canlı önizleme`}
              tabIndex={-1}
              onLoad={(e) => activateIframeHoverPreview(e.currentTarget)}
              style={{
                width: `${VIRTUAL_W}px`,
                height: `${VIRTUAL_H}px`,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
              }}
              className="border-0"
            />
          </div>
        )}

        {/* Bottom Corner Controls (Leaves top animation title 100% unobstructed) */}
        <div className="pointer-events-none absolute right-2.5 bottom-2.5 left-2.5 flex items-center justify-between gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide backdrop-blur-md transition ${
              previewActive
                ? 'bg-[var(--accent-terracotta)] text-white shadow-sm'
                : 'bg-black/55 text-white/90'
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                previewActive ? 'animate-pulse bg-white' : 'bg-white/75'
              }`}
            />
            {previewActive ? (
              'CANLI OYNATILIYOR'
            ) : isHovered ? (
              'YÜKLENİYOR...'
            ) : (
              <>
                <span className="sm:hidden">AÇMAK İÇİN DOKUN</span>
                <span className="hidden sm:inline">OYNATMAK İÇİN ÜZERİNE GEL</span>
              </>
            )}
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(topic.id);
            }}
            aria-label={isFavorite ? 'Favorilerden çıkar' : 'Favorilere ekle'}
            title={isFavorite ? 'Favorilerden çıkar' : 'Favorilere ekle'}
            className={`pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-full border backdrop-blur-md transition ${
              isFavorite
                ? 'border-amber-300 bg-amber-400 text-[#191A1E]'
                : 'border-white/20 bg-black/55 text-white/85 hover:bg-black/75 hover:text-white'
            }`}
          >
            <Star className={`h-3.5 w-3.5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono-code rounded-md bg-[var(--bg-linen)] px-2 py-0.5 text-[11px] font-bold text-[var(--text-primary)]">
              {topic.code}
            </span>
            <span className="rounded-md bg-[var(--bg-canvas)] px-2 py-0.5 text-[10px] font-bold text-[var(--text-secondary)]">
              {topic.grade}. Sınıf
            </span>
            <span className="truncate text-[11px] font-bold tracking-wide text-[var(--text-muted)] uppercase">
              {topic.theme}
            </span>
          </div>
          {primaryAnim && (
            <span
              title={`Eşleşen dosya: ${primaryAnim.file}`}
              className="font-mono-code hidden truncate text-[10px] font-medium text-[var(--text-muted)] xl:inline"
            >
              {primaryAnim.file.replace('.html', '')}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => openFromCard(defaultMode)}
          className="mt-2.5 flex-1 text-left focus:outline-none"
        >
          <h3 className="text-lg font-extrabold leading-snug text-[var(--text-primary)] transition group-hover:text-[var(--accent-cobalt)]">
            {topic.title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
            {topic.description}
          </p>
        </button>

        {/* Action Bar: Play, Lab, Share, Download */}
        <div className="relative mt-4 flex flex-wrap items-center gap-2 border-t border-[var(--border-warm)] pt-3.5">
          {readyAnims.length > 0 ? (
            <button
              type="button"
              onClick={() => openFromCard('animation')}
              className="inline-flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl bg-[var(--bg-ink)] px-2.5 py-2 text-xs font-bold text-[#FFFDF8] transition hover:bg-[var(--accent-cobalt)] sm:px-3"
            >
              <Play className="h-3.5 w-3.5 shrink-0 fill-current" />
              <span>{readyAnims.length > 1 ? `${readyAnims.length} Animasyon` : 'Animasyon'}</span>
            </button>
          ) : (
            animIsDraftOnly &&
            showDrafts && (
              <button
                type="button"
                onClick={() => openFromCard('animation')}
                className="inline-flex flex-1 items-center justify-center gap-1 whitespace-nowrap rounded-xl border border-dashed border-[var(--border-strong)] px-2.5 py-2 text-[11px] font-bold text-[var(--accent-amber)]"
              >
                <Clock className="h-3.5 w-3.5 shrink-0" />
                <span>Yakında</span>
              </button>
            )
          )}

          {readyLabs.length > 0 ? (
            <button
              type="button"
              onClick={() => openFromCard('lab')}
              className="inline-flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl border border-[var(--border-strong)] bg-[var(--bg-linen)]/80 px-2.5 py-2 text-xs font-bold text-[var(--text-primary)] transition hover:border-[var(--accent-teal)] hover:bg-[var(--accent-teal)] hover:text-white sm:px-3"
            >
              <FlaskConical className="h-3.5 w-3.5 shrink-0" />
              <span>Etkinlik</span>
            </button>
          ) : (
            labIsDraftOnly &&
            showDrafts && (
              <button
                type="button"
                onClick={() => openFromCard('lab')}
                className="inline-flex flex-1 items-center justify-center gap-1 rounded-xl border border-dashed border-[var(--border-strong)] px-2.5 py-2 text-[11px] font-bold text-[var(--accent-amber)]"
              >
                <Clock className="h-3.5 w-3.5" />
                <span>Yakında</span>
              </button>
            )
          )}

          {/* Share Menu Trigger */}
          <button
            type="button"
            onClick={() => setShareOpen((v) => !v)}
            title="Paylaş (Bağlantı veya WhatsApp)"
            aria-label="Paylaş"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--border-warm)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"
          >
            <Share2 className="h-4 w-4" />
          </button>

          {/* Direct Offline HTML Download */}
          {primaryAnim && (
            <button
              type="button"
              onClick={handleDownload}
              disabled={downloading}
              title="Tek dosya (çevrimdışı) HTML indir"
              aria-label="HTML indir"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--border-warm)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition hover:border-[var(--accent-terracotta)] hover:text-[var(--accent-terracotta)] disabled:opacity-50"
            >
              <Download className="h-4 w-4" />
            </button>
          )}

          {/* Share Popover */}
          {shareOpen && (
            <div className="absolute right-0 bottom-12 z-20 w-60 rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-2 shadow-xl">
              <div className="px-2.5 py-1 text-[10px] font-bold tracking-wider text-[var(--text-muted)] uppercase">
                Paylaş &amp; Dağıt
              </div>
              <button
                type="button"
                onClick={() => handleCopy('topic')}
                className="flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-left text-xs font-semibold text-[var(--text-primary)] transition hover:bg-[var(--bg-linen)]"
              >
                {copiedType === 'topic' ? (
                  <Check className="h-3.5 w-3.5 text-[var(--accent-teal)]" />
                ) : (
                  <Link2 className="h-3.5 w-3.5 text-[var(--accent-cobalt)]" />
                )}
                <span>{copiedType === 'topic' ? 'Konu Linki Kopyalandı!' : 'Konu Linkini Kopyala'}</span>
              </button>

              {primaryAnim && (
                <button
                  type="button"
                  onClick={() => handleCopy('html')}
                  className="flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-left text-xs font-semibold text-[var(--text-primary)] transition hover:bg-[var(--bg-linen)]"
                >
                  {copiedType === 'html' ? (
                    <Check className="h-3.5 w-3.5 text-[var(--accent-teal)]" />
                  ) : (
                    <Link2 className="h-3.5 w-3.5 text-[var(--accent-terracotta)]" />
                  )}
                  <span>
                    {copiedType === 'html' ? 'HTML Linki Kopyalandı!' : 'Doğrudan HTML Linki'}
                  </span>
                </button>
              )}

              <a
                href={getWhatsAppShareUrl(topic.title, getTopicShareUrl(topic.id, defaultMode))}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackShareAction(topic.code, 'whatsapp', 'kart')}
                className="flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-left text-xs font-semibold text-[var(--text-primary)] transition hover:bg-[var(--bg-linen)]"
              >
                <MessageCircle className="h-3.5 w-3.5 text-emerald-700" />
                <span>WhatsApp ile Gönder</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
