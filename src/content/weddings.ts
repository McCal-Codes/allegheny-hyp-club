import type { HeroBlock, SplitBlock, CTABlock } from "../lib/types";

export const weddingsHero: HeroBlock = {
  title: "Weddings at the Allegheny HYP Club",
  description:
    "An elegant Pittsburgh setting steeped in history — for a day you and your guests will never forget.",
  cta: { label: "Schedule a Tour", href: "/contact" },
};

export const weddingsSplits: SplitBlock[] = [
  {
    eyebrow: "Ceremony & Reception",
    title: "Your Perfect Pittsburgh Wedding",
    description:
      "From intimate ceremonies to grand receptions, the Allegheny HYP Club offers magnificent spaces dressed in over a century of elegance. Our event team handles every detail so you can focus on what matters most.",
    image: "/images/weddings-reception.jpg",
    imageAlt: "Elegant wedding reception setup in the ballroom",
  },
  {
    eyebrow: "Full-Service Catering",
    title: "Menus Crafted for Your Day",
    description:
      "Our culinary team works directly with you to design a menu that reflects your tastes. From rehearsal dinner to reception, every plate is prepared with the care and quality our members expect every day.",
    image: "/images/weddings-catering.jpg",
    imageAlt: "Wedding catering spread",
    reversed: true,
  },
];

export const weddingsSpaces = [
  {
    name: "The Grand Ballroom",
    capacity: "Up to 250 guests",
    description:
      "Our premier event space — soaring ceilings, elegant chandeliers, and a full-service stage for bands and ceremonies.",
    image: "/images/ballroom.jpg",
  },
  {
    name: "The Private Dining Room",
    capacity: "Up to 60 guests",
    description:
      "Ideal for rehearsal dinners, intimate receptions, and seated multi-course affairs.",
    image: "/images/private-dining.jpg",
  },
  {
    name: "The Members Lounge",
    capacity: "Up to 80 guests",
    description:
      "A sophisticated cocktail hour and reception space with rich woodwork and a full bar.",
    image: "/images/lounge.jpg",
  },
];

export const weddingsCTA: CTABlock = {
  title: "Start Planning Your Wedding",
  description:
    "Connect with our events team to check availability, tour the spaces, and begin designing your day.",
  cta: { label: "Inquire Now", href: "/contact" },
};
