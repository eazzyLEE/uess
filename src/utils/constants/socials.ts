import {
  Facebook,
  Instagram,
  Music2,
  Twitter,
  type LucideIcon,
} from 'lucide-react';

type SocialLink = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/abenolng',
    icon: Facebook,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/abenolng/',
    icon: Instagram,
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@abenolng',
    icon: Music2,
  },
  {
    name: 'X',
    href: 'https://x.com/Abenolng',
    icon: Twitter,
  },
];
