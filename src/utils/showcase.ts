import type { TopicModule } from '../types/studio';

const LAST_SHOWCASE_KEY = 'mufithoca_last_showcase_id';

/**
 * Tek adımlı/otomatik oynatılmayan çoklu buton veya taslak şablonlar —
 * Canlı Vitrin yalnızca doğrudan hareketli akış sunan animasyonları döner.
 */
const SHOWCASE_EXCLUDED_IDS = new Set<string>([
  // Çoklu senaryo / seçim butonlu modüller
  'mat-7-1-1',
  'mat-8-5-3',
  'mat-8-6-2',
  'mat-8-6-3',
  'mat-8-7-1',
  'mat-8-7-2',
  'mat-9-1-1',
  'mat-9-1-3',
  'mat-10-2-1',
  'mat-10-2-6',
  'mat-10-4-2',
  'mat-10-7-2',
  // Taslak uyarı şablonları
  'mat-10-3-2',
  'mat-10-4-1',
  'mat-10-4-4',
  'mat-10-5-1',
  'mat-10-5-2',
  'mat-10-6-1',
  'mat-10-7-1',
]);

export function getHeroShowcasePool(topics: TopicModule[]): TopicModule[] {
  return topics.filter(
    (topic) =>
      !SHOWCASE_EXCLUDED_IDS.has(topic.id) &&
      topic.animations.some((anim) => !anim.isDraft)
  );
}

export function readLastShowcaseId(): string | null {
  try {
    return localStorage.getItem(LAST_SHOWCASE_KEY);
  } catch {
    return null;
  }
}

export function saveLastShowcaseId(topicId: string): void {
  try {
    localStorage.setItem(LAST_SHOWCASE_KEY, topicId);
  } catch {
    // Storage unavailable
  }
}

export function pickRandomShowcaseTopic(
  pool: TopicModule[],
  excludeId?: string | null
): TopicModule | null {
  if (pool.length === 0) return null;
  const candidates =
    excludeId && pool.length > 1 ? pool.filter((t) => t.id !== excludeId) : pool;
  const idx = Math.floor(Math.random() * candidates.length);
  return candidates[idx] || pool[0];
}

export function buildShowcaseTabs(
  pool: TopicModule[],
  activeTopic: TopicModule | null
): TopicModule[] {
  if (!activeTopic || pool.length === 0) return [];
  const tabs: TopicModule[] = [activeTopic];
  const usedIds = new Set<string>([activeTopic.id]);
  const usedGrades = new Set<number>([activeTopic.grade]);

  const shuffled = [...pool].sort(() => Math.random() - 0.5);

  // Önce farklı sınıf seviyelerinden 3 çeşit seç
  for (const item of shuffled) {
    if (tabs.length >= 4) break;
    if (!usedIds.has(item.id) && !usedGrades.has(item.grade)) {
      tabs.push(item);
      usedIds.add(item.id);
      usedGrades.add(item.grade);
    }
  }

  // Havuz küçükse kalan slotları tamamla
  for (const item of shuffled) {
    if (tabs.length >= 4) break;
    if (!usedIds.has(item.id)) {
      tabs.push(item);
      usedIds.add(item.id);
    }
  }

  return tabs;
}
