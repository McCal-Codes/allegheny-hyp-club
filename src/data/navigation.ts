export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navigation: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Membership",
    href: "/membership",
    children: [
      { label: "Overview", href: "/membership" },
      { label: "Reciprocity", href: "/membership/reciprocity" },
    ],
  },
  {
    label: "Events & Venues",
    href: "/private-events",
    children: [
      { label: "Private Events", href: "/private-events" },
      { label: "Weddings", href: "/weddings" },
      { label: "Upcoming Events", href: "/events" },
    ],
  },
  { label: "Cigar Lounge", href: "/cigar-lounge" },
  { label: "Contact", href: "/contact" },
];
