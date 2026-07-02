export type ClubEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  category: "dining" | "social" | "cigar" | "cultural" | "member";
  membersOnly: boolean;
  cta?: { label: string; href: string };
};

export const upcomingEvents: ClubEvent[] = [
  {
    id: "spring-gala-2025",
    title: "Spring Member Gala",
    date: "April 12, 2025",
    time: "7:00 PM",
    description:
      "Join us for an elegant evening celebrating the arrival of spring. Black tie, cocktails, and a five-course dinner.",
    category: "social",
    membersOnly: true,
    cta: { label: "RSVP", href: "/contact" },
  },
  {
    id: "cigar-whiskey-pairing",
    title: "Cigar & Whiskey Pairing Night",
    date: "April 25, 2025",
    time: "6:30 PM",
    description:
      "Our resident cigar expert and a guest distillery representative guide you through a curated pairing of premium cigars and small-batch whiskeys.",
    category: "cigar",
    membersOnly: true,
    cta: { label: "RSVP", href: "/contact" },
  },
  {
    id: "business-leader-dinner",
    title: "Pittsburgh Business Leaders Dinner",
    date: "May 8, 2025",
    time: "6:00 PM",
    description:
      "An intimate dinner gathering Pittsburgh's most influential executives for networking and conversation.",
    category: "dining",
    membersOnly: true,
    cta: { label: "RSVP", href: "/contact" },
  },
];

export const eventsPageIntro = {
  title: "Club Events",
  description:
    "From intimate dinners to seasonal galas, the Allegheny HYP Club calendar is filled with events worth attending. Members receive priority invitations and early access to all club programming.",
};
