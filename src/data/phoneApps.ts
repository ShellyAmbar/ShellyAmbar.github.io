export interface PhoneApp {
  key: string;
  name: string;
  icon: string;
  gradient: string;
  youtubeId: string;
}

export const phoneApps: PhoneApp[] = [
  {
    key: 'dualo',
    name: 'Dualo',
    icon: 'video',
    gradient: 'linear-gradient(135deg, #ec4899, #a855f7)',
    youtubeId: 'yxWEqcN2FHE',
  },
  {
    key: 'dateroulette',
    name: 'Roulette',
    icon: 'globe',
    gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    youtubeId: 'AwTQhu4BbgM',
  },
  {
    key: 'alladsblock',
    name: 'AllAdsBlock',
    icon: 'shield-check',
    gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    youtubeId: 'nib5tkt1txU',
  },
  {
    key: 'playdate',
    name: 'PlayDate',
    icon: 'gamepad-2',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    youtubeId: 'u61zUq8fqGk',
  },
  {
    key: 'hive',
    name: 'Hive',
    icon: 'map-pin',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    youtubeId: 'TnRcWefnP1w',
  },
  {
    key: 'news',
    name: 'NewsApp',
    icon: 'newspaper',
    gradient: 'linear-gradient(135deg, #6366f1, #4338ca)',
    youtubeId: 'uv0F6OxjlR4',
  },
];
