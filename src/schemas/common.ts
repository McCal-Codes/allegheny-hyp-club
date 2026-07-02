export type CTA = {
  label: string;
  href: string;
};

export type HeroBlock = {
  title: string;
  subtitle?: string;
  description: string;
  cta?: CTA;
  secondaryCta?: CTA;
  image?: string;
};

export type SplitBlock = {
  eyebrow?: string;
  title: string;
  description: string;
  cta?: CTA;
  image: string;
  imageAlt: string;
  reversed?: boolean;
};

export type CTABlock = {
  title: string;
  description: string;
  cta: CTA;
  secondaryCta?: CTA;
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};
