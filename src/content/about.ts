import type { HeroBlock, CTABlock } from "../lib/types";

export const aboutHero: HeroBlock = {
  title: "Our History",
  description:
    "Over a century of tradition, community, and distinction in the heart of Pittsburgh.",
};

export const aboutStory = {
  eyebrow: "Founded 1908",
  heading: "Built by Pittsburgh's Best, For Pittsburgh's Best",
  paragraphs: [
    "The Allegheny HYP Club was founded in 1908 by a coalition of Harvard, Yale, and Princeton alumni residing in Pittsburgh — men who believed that the city's brightest minds deserved a place to gather, debate, dine, and build lasting relationships.",
    "Over more than a century, the club has evolved to welcome Pittsburgh's young professionals across industries, backgrounds, and institutions, united by a shared commitment to excellence, civic pride, and personal achievement.",
    "Today, the Allegheny HYP Club remains one of Pittsburgh's most distinguished private clubs — a place where careers are forged, friendships are deepened, and the traditions of gracious hospitality are upheld with pride.",
  ],
};

export const aboutValues = [
  {
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in dining, service, and member experience.",
  },
  {
    title: "Community",
    description:
      "We believe in the power of meaningful connection among Pittsburgh's most driven professionals.",
  },
  {
    title: "Tradition",
    description:
      "We honor over a century of history while remaining open to the next generation of members.",
  },
  {
    title: "Reciprocity",
    description:
      "We extend our hospitality globally through partnerships with over 150 clubs worldwide.",
  },
];

export const aboutCTA: CTABlock = {
  title: "Become Part of the Story",
  description:
    "Join the generations of Pittsburgh professionals who have called the Allegheny HYP Club home.",
  cta: { label: "Explore Membership", href: "/membership" },
};
