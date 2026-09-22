export interface ProjectAction {
  label: string;
  href: string;
  icon: string;
  variant: 'primary' | 'outline' | 'default';
}

export interface Project {
  title: string;
  description: string;
  youtubeId: string;
  thumbnailQuality: 'hqdefault' | 'maxresdefault';
  techTags: string[];
  actions: ProjectAction[];
}

export const projects: Project[] = [
  {
    title: '1. Dualo',
    description:
      'A mobile video chat dating application featuring real-time video matchmaking, customizable floating UI components, lounge features, and global distribution across major mobile app marketplaces.',
    youtubeId: 'yxWEqcN2FHE',
    thumbnailQuality: 'hqdefault',
    techTags: ['React Native', 'WebRTC', 'Video Chat', 'Android App'],
    actions: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.shellyapps.hive&hl=he',
        icon: 'play',
        variant: 'primary',
      },
      {
        label: 'Short',
        href: 'https://www.youtube.com/shorts/yxWEqcN2FHE',
        icon: 'youtube',
        variant: 'outline',
      },
    ],
  },
  {
    title: '2. DateRoulette',
    description:
      'An interactive web-based video speed-dating application that connects users globally through seamless real-time video streaming, fast pairing, and responsive browser controls.',
    youtubeId: 'AwTQhu4BbgM',
    thumbnailQuality: 'hqdefault',
    techTags: ['React.js', 'WebRTC', 'Node.js', 'Web App'],
    actions: [
      {
        label: 'Website',
        href: 'https://dateroulette.online/',
        icon: 'globe',
        variant: 'primary',
      },
      {
        label: 'Short',
        href: 'https://www.youtube.com/shorts/AwTQhu4BbgM',
        icon: 'youtube',
        variant: 'outline',
      },
    ],
  },
  {
    title: '3. AllAdsBlock',
    description:
      'A Chrome browser extension designed to block intrusive pop-up advertisements, video ads, and domain trackers with license key validation, domain filtering techniques, and clean web browsing optimization.',
    youtubeId: 'nib5tkt1txU',
    thumbnailQuality: 'hqdefault',
    techTags: ['Chrome Extension', 'JavaScript', 'Ad Blocking', 'Web Security'],
    actions: [
      {
        label: 'Site',
        href: 'https://shellyambar.github.io/alladsblock-site/',
        icon: 'globe',
        variant: 'primary',
      },
      {
        label: 'Short',
        href: 'https://www.youtube.com/shorts/nib5tkt1txU',
        icon: 'youtube',
        variant: 'outline',
      },
    ],
  },
  {
    title: '4. PlayDate',
    description:
      'A social mobile game application containing categorized prompt datasets localized across English, Hebrew, and Spanish, complete with integrated App Store & Play Store In-App Purchases.',
    youtubeId: 'u61zUq8fqGk',
    thumbnailQuality: 'hqdefault',
    techTags: ['React Native', 'Localization (i18n)', 'In-App Purchases', 'Mobile Gaming'],
    actions: [
      {
        label: 'Details',
        href: 'https://github.com/ShellyAmbar',
        icon: 'github',
        variant: 'primary',
      },
      {
        label: 'Short',
        href: 'https://www.youtube.com/shorts/u61zUq8fqGk',
        icon: 'youtube',
        variant: 'outline',
      },
    ],
  },
  {
    title: '5. Hive',
    description: 'A react native dating app based on user location and nearby places.',
    youtubeId: 'TnRcWefnP1w',
    thumbnailQuality: 'maxresdefault',
    techTags: ['React Native', 'Location Services', 'Dating App', 'Geolocation'],
    actions: [
      {
        label: 'Demo',
        href: 'https://www.youtube.com/watch?v=TnRcWefnP1w',
        icon: 'youtube',
        variant: 'outline',
      },
      {
        label: 'Code',
        href: 'https://github.com/ShellyAmbar',
        icon: 'github',
        variant: 'default',
      },
    ],
  },
  {
    title: '6. News App in React Native & Redux Saga',
    description:
      'A comprehensive news application built with React Native and Redux Saga for state management and API handling.',
    youtubeId: 'uv0F6OxjlR4',
    thumbnailQuality: 'maxresdefault',
    techTags: ['React Native', 'Redux Saga', 'News API', 'State Management'],
    actions: [
      {
        label: 'Repository',
        href: 'https://github.com/ShellyAmbar/NewsApp-ReactNative-Redux',
        icon: 'github',
        variant: 'primary',
      },
      {
        label: 'Demo',
        href: 'https://youtu.be/uv0F6OxjlR4',
        icon: 'youtube',
        variant: 'outline',
      },
    ],
  },
  {
    title: '7. HauntedParadise',
    description: 'A 3D game in Unity with C# featuring immersive gameplay and stunning graphics.',
    youtubeId: 'LSgTI-n7Dbc',
    thumbnailQuality: 'maxresdefault',
    techTags: ['Unity', 'C#', '3D Game', 'Mobile Gaming'],
    actions: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.ShellyApps.HauntedParadise',
        icon: 'play',
        variant: 'primary',
      },
      {
        label: 'Demo',
        href: 'https://www.youtube.com/watch?v=LSgTI-n7Dbc&t=7s',
        icon: 'youtube',
        variant: 'outline',
      },
    ],
  },
];
