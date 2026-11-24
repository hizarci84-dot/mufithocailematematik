import { useEffect, useMemo, useState } from 'react';
import { CATALOG_TOPICS } from './data/catalog';
import { BRAND_CONFIG } from './data/products';
import type { GradeLevel, TopicModule } from './types/studio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LibraryExplorer } from './components/LibraryExplorer';
import { ProductsShowcase } from './components/ProductsShowcase';
import { UsageGuideModal, UsageGuideSection } from './components/UsageGuideSection';
import { AboutFooter } from './components/AboutFooter';
import { StudioPlayerModal, type PlayerTarget } from './components/StudioPlayerModal';
import {
  buildShowcaseTabs,
  getHeroShowcasePool,
  pickRandomShowcaseTopic,
  readLastShowcaseId,
  saveLastShowcaseId,
} from './utils/showcase';
import {
  trackFilterChange,
  trackShowcaseAction,
  trackTopicOpen,
} from './utils/analytics';

const FAV_STORAGE_KEY = 'mufithoca_favorites';

function getInitialTargetFromUrl(): PlayerTarget | null {
  try {
    const params = new URLSearchParams(window.location.search);
    const topicId = params.get('konu');
    const mod = params.get('mod');
    if (!topicId) return null;
    const found = CATALOG_TOPICS.find((t) => t.id === topicId);
    if (!found) return null;
    return {
      topic: found,
      mode: mod === 'lab' ? 'lab' : 'animation',
    };
  } catch {
    return null;
  }
}

export function App() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(FAV_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [selectedGrade, setSelectedGrade] = useState<'all' | GradeLevel>('all');
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [playerTarget, setPlayerTarget] = useState<PlayerTarget | null>(() =>
    getInitialTargetFromUrl()
  );
  const [isUsageModalOpen, setIsUsageModalOpen] = useState(false);

  const showcasePool = useMemo(() => getHeroShowcasePool(CATALOG_TOPICS), []);
  const [showcaseState, setShowcaseState] = useState<{
    topic: TopicModule | null;
    tabs: TopicModule[];
    nonce: number;
  }>(() => {
    const pool = getHeroShowcasePool(CATALOG_TOPICS);
    const picked = pickRandomShowcaseTopic(pool, readLastShowcaseId());
    if (picked) saveLastShowcaseId(picked.id);
    return {
      topic: picked,
      tabs: buildShowcaseTabs(pool, picked),
      nonce: 0,
    };
  });

  const handleOpenLiveShowcase = (
    scrollToTop = true,
    source: 'menu' | 'degistir' = 'menu'
  ) => {
    const nextTopic = pickRandomShowcaseTopic(showcasePool, showcaseState.topic?.id);
    if (nextTopic) {
      saveLastShowcaseId(nextTopic.id);
      trackShowcaseAction(source, nextTopic.code);
    }
    setShowcaseState((prev) => ({
      topic: nextTopic,
      tabs: buildShowcaseTabs(showcasePool, nextTopic),
      nonce: prev.nonce + 1,
    }));
    if (scrollToTop) {
      document.getElementById('ust')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectShowcaseTopic = (topic: TopicModule) => {
    saveLastShowcaseId(topic.id);
    trackShowcaseAction('sekme', topic.code);
    setShowcaseState((prev) => ({
      ...prev,
      topic,
      nonce: prev.nonce + 1,
    }));
  };

  useEffect(() => {
    document.title = `${BRAND_CONFIG.name} — ${BRAND_CONFIG.tagline}`;
    if (playerTarget?.topic) {
      trackTopicOpen(playerTarget.topic, playerTarget.mode, 'dogrudan_link');
    }
    // Sadece ilk açılışta ?konu=... bağlantısından gelen girişleri ölç
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync URL query params for easy link sharing
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      if (playerTarget?.topic) {
        url.searchParams.set('konu', playerTarget.topic.id);
        url.searchParams.set('mod', playerTarget.mode);
      } else {
        url.searchParams.delete('konu');
        url.searchParams.delete('mod');
      }
      window.history.replaceState({}, '', url.toString());
    } catch {
      // Ignore history errors
    }
  }, [playerTarget]);

  useEffect(() => {
    try {
      localStorage.setItem(FAV_STORAGE_KEY, JSON.stringify(favorites));
    } catch {
      // Ignore storage failures
    }
  }, [favorites]);

  const stats = useMemo(() => {
    let activeApps = 0;
    for (const topic of CATALOG_TOPICS) {
      for (const a of topic.animations) {
        if (!a.isDraft) activeApps++;
      }
      for (const l of topic.labs) {
        if (!l.isDraft) activeApps++;
      }
    }
    return {
      totalTopics: CATALOG_TOPICS.length,
      totalApps: activeApps,
    };
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const jumpToGrade = (grade: GradeLevel) => {
    trackFilterChange('sinif', String(grade));
    setOnlyFavorites(false);
    setSelectedGrade(grade);
    document.getElementById('kutuphane')?.scrollIntoView({ behavior: 'smooth' });
  };

  const jumpToFavorites = () => {
    setSelectedGrade('all');
    setOnlyFavorites(true);
    document.getElementById('kutuphane')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stepTopic = (dir: -1 | 1) => {
    if (!playerTarget?.topic) return;
    const pool =
      selectedGrade === 'all'
        ? CATALOG_TOPICS
        : CATALOG_TOPICS.filter((t) => t.grade === selectedGrade);
    if (pool.length === 0) return;

    const currentIdx = pool.findIndex((t) => t.id === playerTarget.topic!.id);
    if (currentIdx === -1) return;
    const nextIdx = (currentIdx + dir + pool.length) % pool.length;
    const nextTopic = pool[nextIdx];
    const nextMode: 'animation' | 'lab' =
      nextTopic.animations.some((a) => !a.isDraft)
        ? 'animation'
        : nextTopic.labs.some((l) => !l.isDraft)
          ? 'lab'
          : 'animation';

    trackTopicOpen(nextTopic, nextMode, 'modal_gecis');
    setPlayerTarget({ topic: nextTopic, mode: nextMode });
  };

  return (
    <div className="warm-studio-bg min-h-screen overflow-x-hidden text-[var(--text-primary)]">
      <Navbar
        topics={CATALOG_TOPICS}
        favoritesCount={favorites.length}
        onJumpToFavorites={jumpToFavorites}
        onSelectGrade={setSelectedGrade}
        onOpenTopic={(topic: TopicModule, mode: 'animation' | 'lab') =>
          setPlayerTarget({ topic, mode })
        }
        onOpenAppUrl={(title, url) =>
          setPlayerTarget({ customTitle: title, customUrl: url, mode: 'animation' })
        }
        onOpenUsageModal={() => setIsUsageModalOpen(true)}
        onOpenLiveShowcase={() => handleOpenLiveShowcase(true, 'menu')}
      />

      <main>
        <Hero
          topics={CATALOG_TOPICS}
          totalTopics={stats.totalTopics}
          totalApps={stats.totalApps}
          showcaseTopic={showcaseState.topic}
          showcaseTabs={showcaseState.tabs}
          showcaseNonce={showcaseState.nonce}
          onSelectShowcaseTopic={handleSelectShowcaseTopic}
          onShuffleShowcase={() => handleOpenLiveShowcase(false, 'degistir')}
          onSelectGrade={jumpToGrade}
          onOpenTopic={(topic: TopicModule, mode: 'animation' | 'lab') =>
            setPlayerTarget({ topic, mode })
          }
        />

        <LibraryExplorer
          topics={CATALOG_TOPICS}
          selectedGrade={selectedGrade}
          onChangeGrade={setSelectedGrade}
          favorites={favorites}
          onlyFavorites={onlyFavorites}
          onToggleOnlyFavorites={setOnlyFavorites}
          onToggleFavorite={toggleFavorite}
          onOpenTopic={(topic: TopicModule, mode: 'animation' | 'lab') =>
            setPlayerTarget({ topic, mode })
          }
        />

        <ProductsShowcase
          onOpenAppUrl={(title, url) =>
            setPlayerTarget({ customTitle: title, customUrl: url, mode: 'animation' })
          }
        />

        <UsageGuideSection />
      </main>

      <AboutFooter
        onSelectGrade={jumpToGrade}
        onOpenUsageModal={() => setIsUsageModalOpen(true)}
        onOpenLiveShowcase={() => handleOpenLiveShowcase(true, 'menu')}
      />

      <UsageGuideModal
        isOpen={isUsageModalOpen}
        onClose={() => setIsUsageModalOpen(false)}
      />

      <StudioPlayerModal
        target={playerTarget}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        onClose={() => setPlayerTarget(null)}
        onStepTopic={stepTopic}
      />
    </div>
  );
}

export default App;
