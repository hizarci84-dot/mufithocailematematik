import { useState } from 'react';
import {
  Check,
  ExternalLink,
  PlusCircle,
  Clock,
  ArrowUpRight,
  Maximize2,
  Share2,
} from 'lucide-react';
import { STUDIO_PRODUCTS } from '../data/products';
import type { ProductCategory, StudioProduct } from '../types/studio';
import { copyTextToClipboard } from '../utils/shareAndDownload';

interface ProductsShowcaseProps {
  onOpenAppUrl: (title: string, url: string) => void;
}

const CATEGORIES: ('Tümü' | ProductCategory)[] = [
  'Tümü',
  'Uygulama',
  'Araç',
  'Eğitim Paketi',
  'Dijital Ürün',
];

export function ProductsShowcase({ onOpenAppUrl }: ProductsShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<'Tümü' | ProductCategory>('Tümü');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const availableCategories = CATEGORIES.filter(
    (cat) => cat === 'Tümü' || STUDIO_PRODUCTS.some((p) => p.category === cat)
  );

  const visibleProducts = STUDIO_PRODUCTS.filter(
    (p) => selectedCategory === 'Tümü' || p.category === selectedCategory
  );

  const handleAction = (product: StudioProduct) => {
    if (!product.href) return;
    if (product.openInPlayer) {
      onOpenAppUrl(product.title, product.href);
      return;
    }
    if (product.href.startsWith('#')) {
      document.querySelector(product.href)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    window.open(product.href, '_blank', 'noopener,noreferrer');
  };

  const handleCopyProductLink = async (product: StudioProduct) => {
    if (!product.href) return;
    const url = product.href.startsWith('#')
      ? `${window.location.origin}${window.location.pathname}${product.href}`
      : product.href;
    const ok = await copyTextToClipboard(url);
    if (ok) {
      setCopiedId(product.id);
      window.setTimeout(() => setCopiedId(null), 1800);
    }
  };

  return (
    <section
      id="urunler"
      className="border-t border-[var(--border-warm)] bg-[var(--bg-linen)]/45 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold tracking-widest text-[var(--accent-cobalt)] uppercase">
              Genişletilebilir Stüdyo Vitrini
            </p>
            <h2 className="mt-1.5 text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Uygulamalar &amp; Ürünler
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-[var(--text-secondary)] sm:text-base">
              Geliştirdiğimiz bağımsız matematik portalları, web uygulamaları ve dijital eğitim
              ürünleri tek bir vitrinde toplanır.
            </p>
          </div>

          {availableCategories.length > 2 && (
            <div className="flex flex-wrap gap-1.5">
              {availableCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-xl px-3.5 py-2 text-xs font-bold transition ${
                    selectedCategory === cat
                      ? 'bg-[var(--bg-ink)] text-[#FFFDF8]'
                      : 'border border-[var(--border-warm)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        <div
          className={`mt-8 grid gap-6 md:grid-cols-2 ${
            visibleProducts.length === 4 ? '' : 'lg:grid-cols-3'
          }`}
        >
          {visibleProducts.map((product) => {
            const isComingSoon = product.status === 'coming-soon';
            const isExternal = product.href?.startsWith('http');

            return (
              <article
                key={product.id}
                className="warm-card-shadow flex flex-col rounded-2xl border border-[var(--border-warm)] bg-[var(--bg-surface)] p-6 transition hover:-translate-y-1 hover:border-[var(--border-strong)]"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md bg-[var(--bg-linen)] px-2.5 py-1 text-[11px] font-bold tracking-wide text-[var(--text-secondary)] uppercase">
                    {product.category}
                  </span>

                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold ${
                      product.status === 'active'
                        ? 'bg-emerald-700/12 text-emerald-800'
                        : product.status === 'beta'
                          ? 'bg-blue-700/12 text-blue-800'
                          : 'bg-amber-700/12 text-amber-800'
                    }`}
                  >
                    {product.status !== 'active' && <Clock className="h-3 w-3" />}
                    {product.badge}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-[var(--text-primary)]">
                  {product.title}
                </h3>
                <p className="mt-1 text-xs font-bold text-[var(--accent-terracotta)]">
                  {product.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {product.description}
                </p>

                <ul className="mt-5 flex-1 space-y-2 border-t border-[var(--border-warm)] pt-4">
                  {product.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs font-medium text-[var(--text-secondary)]"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent-teal)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-2">
                  {isComingSoon || !product.href ? (
                    <div className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[var(--border-strong)] bg-[var(--bg-canvas)] px-4 py-2.5 text-xs font-bold text-[var(--text-secondary)]">
                      <PlusCircle className="h-4 w-4" />
                      <span>{product.actionLabel}</span>
                    </div>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => handleAction(product)}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[var(--bg-ink)] px-4 py-2.5 text-xs font-bold text-[#FFFDF8] transition hover:bg-[var(--accent-cobalt)]"
                      >
                        <span>{product.actionLabel}</span>
                        {isExternal ? (
                          <ExternalLink className="h-3.5 w-3.5" />
                        ) : (
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        )}
                      </button>

                      {product.allowModalPreview && product.href && (
                        <button
                          type="button"
                          onClick={() => onOpenAppUrl(product.title, product.href!)}
                          title="Site içi pencerede önizle"
                          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--bg-canvas)] text-[var(--text-primary)] transition hover:border-[var(--accent-cobalt)] hover:text-[var(--accent-cobalt)]"
                        >
                          <Maximize2 className="h-4 w-4" />
                        </button>
                      )}

                      {isExternal && (
                        <button
                          type="button"
                          onClick={() => handleCopyProductLink(product)}
                          title={copiedId === product.id ? 'Bağlantı kopyalandı!' : 'Bağlantıyı kopyala'}
                          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--bg-canvas)] text-[var(--text-primary)] transition hover:border-[var(--accent-teal)] hover:text-[var(--accent-teal)]"
                        >
                          {copiedId === product.id ? (
                            <Check className="h-4 w-4 text-[var(--accent-teal)]" />
                          ) : (
                            <Share2 className="h-4 w-4" />
                          )}
                        </button>
                      )}
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
