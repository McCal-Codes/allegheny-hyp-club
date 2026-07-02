import type { HeroBlock, CTABlock } from "../lib/types";

export const cigarLoungeHero: HeroBlock = {
  title: "The Cigar Lounge",
  description:
    "Pittsburgh's finest private cigar experience — a handsome, unhurried space for members who appreciate the finer things.",
  cta: { label: "Inquire About Membership", href: "/membership" },
};

export const cigarLoungeDescription = {
  heading: "An Unhurried Retreat",
  paragraphs: [
    "The Allegheny HYP Club Cigar Lounge is among Pittsburgh's most distinguished private smoking rooms. Rich leather seating, dark woodwork, and an expertly curated selection of premium cigars and spirits set the tone for evenings of genuine conversation and relaxation.",
    "Whether you're unwinding after a long day, celebrating with colleagues, or simply taking your time with a fine cigar and a well-made cocktail, the lounge offers a rare kind of quiet in a busy city.",
  ],
};

export const cigarLoungeFeatures = [
  {
    title: "Curated Humidor",
    description:
      "An expertly maintained selection of domestic and imported cigars — from everyday favorites to rare premium sticks.",
  },
  {
    title: "Full Spirits Bar",
    description:
      "A comprehensive selection of whiskeys, bourbons, scotches, cognacs, and craft cocktails.",
  },
  {
    title: "Private Seating",
    description:
      "Comfortable, private seating arrangements for solo relaxation or small-group conversation.",
  },
  {
    title: "Member Events",
    description:
      "Exclusive cigar-pairing dinners, whiskey tastings, and lounge events throughout the year.",
  },
];

export const cigarLoungeCTA: CTABlock = {
  title: "Access Requires Membership",
  description:
    "The Cigar Lounge is a members-only amenity. Become a member to enjoy full access to Pittsburgh's finest private smoking room.",
  cta: { label: "Explore Membership", href: "/membership" },
  secondaryCta: { label: "Contact Us", href: "/contact" },
};
