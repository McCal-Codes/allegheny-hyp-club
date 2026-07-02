import type { HeroBlock, SplitBlock, CTABlock } from "../lib/types";

export const homeHero: HeroBlock = {
  title: "Pittsburgh's Premier Private Club",
  subtitle: "The Allegheny HYP Club",
  description:
    "A distinguished gathering place for Pittsburgh's young professionals — offering fine dining, exclusive events, a celebrated cigar lounge, and reciprocal access to clubs worldwide.",
  cta: { label: "Explore Membership", href: "/membership" },
  secondaryCta: { label: "Plan Your Event", href: "/private-events" },
};

export const homeSplits: SplitBlock[] = [
  {
    eyebrow: "A Historic Pittsburgh Institution",
    title: "More Than a Club. A Community.",
    description:
      "Founded to unite Pittsburgh's driven young professionals, the Allegheny HYP Club has long been the city's most distinguished private gathering place. From business dinners to black-tie galas, we offer the setting and service that every occasion deserves.",
    cta: { label: "Our Story", href: "/about" },
    image: "/images/club-dining.jpg",
    imageAlt: "Elegant club dining room",
  },
  {
    eyebrow: "Exclusive Privileges",
    title: "Membership That Opens Doors — Here and Beyond",
    description:
      "Allegheny HYP Club membership grants you access to a world-class private experience in Pittsburgh, plus reciprocal privileges at over 150 clubs across the country and around the globe.",
    cta: { label: "View Membership Benefits", href: "/membership" },
    image: "/images/membership-lounge.jpg",
    imageAlt: "Private members lounge",
    reversed: true,
  },
];

export const homeStats = [
  { value: "150+", label: "Reciprocal Clubs Worldwide" },
  { value: "Est. 1908", label: "Over a Century of Tradition" },
  { value: "Downtown Pittsburgh", label: "Prime Location" },
];

export const homeCTA: CTABlock = {
  title: "Ready to Join Pittsburgh's Finest Private Club?",
  description:
    "Connect with our membership team to learn about availability, dues, and what it means to be part of the Allegheny HYP Club.",
  cta: { label: "Inquire About Membership", href: "/membership" },
  secondaryCta: { label: "Contact Us", href: "/contact" },
};
