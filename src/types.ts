export type NavView = 'home' | 'about' | 'platforms' | 'services' | 'industries' | 'insights' | 'contact';

export interface PlatformPractice {
  id: string;
  name: string;
  shortName: string;
  category: 'erp' | 'crm' | 'itsm' | 'integration' | 'ai' | 'data' | 'custom';
  tagline: string;
  heroDesc: string;
  fullDesc: string;
  modules: string[];
  subCapabilities: string[];
  businessOutcomes: string[];
  entryOffer: string;
  color: string;
  iconName: string;
  featuredInOrbit: boolean;
}

export interface CrossCuttingService {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  description: string;
  features: string[];
  outcomes: string[];
  entryOffer: string;
}

export interface CoreValue {
  number: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
}

export interface Differentiator {
  number: number;
  title: string;
  shortDesc: string;
  points: string[];
  icon: string;
}

export interface AssessmentOffer {
  id: string;
  title: string;
  platform: string;
  duration: string;
  targetRole: string;
  deliverables: string[];
  outcomes: string[];
  badge: string;
}

export interface PriorityMarket {
  rank: number;
  country: string;
  region: string;
  flag: string;
  platformFocus: string[];
  marketRole: string;
  description: string;
  keyIndustries: string[];
}

export interface ManagedServiceTier {
  name: 'Bronze' | 'Silver' | 'Gold' | 'Enterprise';
  tagline: string;
  slaResponse: string;
  coverageHours: string;
  idealFor: string;
  features: string[];
  color: string;
  recommended?: boolean;
}

export interface IndustryItem {
  id: string;
  name: string;
  icon: string;
  summary: string;
  platformsUsed: string[];
  keyChallengesSolved: string[];
  priorityMarkets: string[];
}

export interface InsightArticle {
  id: string;
  title: string;
  category: 'Platform Architecture' | 'Enterprise AI' | 'Integration & Data' | 'Executive Strategy';
  readTime: string;
  date: string;
  author: string;
  excerpt: string;
  content: string[];
  tags: string[];
}
