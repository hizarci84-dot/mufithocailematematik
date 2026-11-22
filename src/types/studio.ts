export type GradeLevel = 5 | 6 | 7 | 8 | 9 | 10 | 11;

export interface AppVariant {
  label: string;
  file: string;
  url: string;
  title: string;
  isDraft: boolean;
}

export interface TopicModule {
  id: string;
  code: string;
  grade: GradeLevel;
  levelGroup: 'Ortaokul' | 'Lise';
  unit: number;
  theme: string;
  color: string;
  icon: string;
  title: string;
  description: string;
  kazanim: string;
  tags: string[];
  animations: AppVariant[];
  labs: AppVariant[];
  hasCompletedContent: boolean;
  hasDraftPart: boolean;
}

export type ProductStatus = 'active' | 'beta' | 'coming-soon';
export type ProductCategory = 'Uygulama' | 'Araç' | 'Eğitim Paketi' | 'Dijital Ürün';

export interface StudioProduct {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProductCategory;
  status: ProductStatus;
  badge: string;
  accentColor: string;
  highlights: string[];
  actionLabel: string;
  /** Internal route/anchor (e.g. '#kutuphane'), local app path ('apps/...'), or external URL */
  href?: string;
  /** Opens inside the interactive Cinema/Lab player modal when true */
  openInPlayer?: boolean;
  /** Allows optional secondary modal preview button for external embeddable apps */
  allowModalPreview?: boolean;
}
