import type { HeroBlock, CTABlock } from "../lib/types";

export const privateEventsHero: HeroBlock = {
  title: "Private Events & Corporate Entertaining",
  description:
    "Elevate your next corporate dinner, board meeting, product launch, or celebration with the prestige of Pittsburgh's most distinguished private club.",
  cta: { label: "Request a Proposal", href: "/contact" },
};

export const privateEventsTypes = [
  {
    title: "Corporate Dinners",
    description:
      "Impress clients, reward your team, or host board meetings in a setting that commands respect.",
  },
  {
    title: "Milestone Celebrations",
    description:
      "Anniversaries, retirements, award nights — let us handle every detail of your most important occasions.",
  },
  {
    title: "Holiday Parties",
    description:
      "Make your company holiday celebration genuinely memorable with our full-service event packages.",
  },
  {
    title: "Cocktail Receptions",
    description:
      "Stylish and flexible cocktail events for networking, launches, or pre-dinner gatherings.",
  },
  {
    title: "Board & Executive Meetings",
    description:
      "Private meeting rooms equipped for professional use, paired with dining service before, during, or after.",
  },
  {
    title: "Galas & Fundraisers",
    description:
      "An elevated venue for nonprofit galas and charity events that need more than a ballroom.",
  },
];

export const privateEventsCTA: CTABlock = {
  title: "Make Your Next Event Unforgettable",
  description:
    "Our events team will work with you from concept to cleanup. Contact us to discuss your needs.",
  cta: { label: "Get in Touch", href: "/contact" },
  secondaryCta: { label: "View Wedding Options", href: "/weddings" },
};
