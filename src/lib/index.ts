export const ROUTE_PATHS = {
  HOME: '/',
  MEDILINK: '/medilink',
  CARLINK: '/carlink',
  EXLINK: '/exlink',
} as const;

export interface Platform {
  id: 'medilink' | 'carlink' | 'exlink';
  name: string;
  title: string;
  description: string;
  slogan: string;
  colorClass: string;
  bgClass: string;
  iconName: string;
  features: string[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  platformId: 'medilink' | 'carlink' | 'exlink' | 'common';
  isSecure?: boolean;
  targetAudience?: string[];
}

export interface Statistic {
  id: string;
  label: string;
  value: string;
  suffix: string;
  iconName: string;
  colorClass: string;
}

export function cn(...inputs: (string | undefined | null | boolean | Record<string, boolean>)[]) {
  return inputs.filter(Boolean).join(' ');
}

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('ko-KR').format(num);
};

export const getPlatformColor = (platformId: Platform['id']) => {
  switch (platformId) {
    case 'medilink':
      return 'var(--chart-1)';
    case 'carlink':
      return 'var(--chart-2)';
    case 'exlink':
      return 'var(--chart-3)';
    default:
      return 'var(--primary)';
  }
};