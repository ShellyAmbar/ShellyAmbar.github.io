import type { ComponentType, SVGProps } from 'react';
import { Gamepad2, Globe, MapPin, Newspaper, Play, ShieldCheck, Video } from 'lucide-react';
import { GithubIcon, YoutubeIcon } from './BrandIcons';

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const iconMap: Record<string, IconComponent> = {
  video: Video,
  globe: Globe,
  'shield-check': ShieldCheck,
  'gamepad-2': Gamepad2,
  'map-pin': MapPin,
  newspaper: Newspaper,
  play: Play,
  youtube: YoutubeIcon,
  github: GithubIcon,
};
