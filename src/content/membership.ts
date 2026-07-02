import { UtensilsCrossed, Globe, Users, CalendarDays, Landmark, Award } from "lucide-react";
import type { HeroBlock, FAQItem, CTABlock } from "../lib/types";

export const membershipHero: HeroBlock = {
  title: "Become a Member",
  description:
    "Join a distinguished community of Pittsburgh professionals and unlock a world of exclusive privileges.",
  cta: { label: "Inquire About Membership", href: "/contact" },
};

export const membershipBenefits = [
  {
    icon: UtensilsCrossed,
    title: "Fine Dining",
    description:
      "Enjoy exclusive access to our award-winning dining rooms, private bar, and member-only dining events.",
  },
  {
    icon: Globe,
    title: "Reciprocal Club Access",
    description:
      "Your membership grants privileges at over 150 partner clubs across the United States and internationally.",
  },
  {
    icon: Users,
    title: "Professional Network",
    description:
      "Connect with Pittsburgh's most accomplished young professionals across every major industry.",
  },
  {
    icon: CalendarDays,
    title: "Exclusive Events",
    description:
      "Invitations to members-only dinners, speakers, cultural events, and seasonal celebrations throughout the year.",
  },
  {
    icon: Landmark,
    title: "Venue Privileges",
    description:
      "Priority access and member pricing for private event spaces, meeting rooms, and the cigar lounge.",
  },
  {
    icon: Award,
    title: "Legacy Membership",
    description:
      "A membership that carries weight — over 115 years of history backing every introduction you make.",
  },
];

export const membershipTypes = [
  {
    name: "Resident Member",
    description:
      "Full access for Pittsburgh-area professionals. Enjoy all club facilities, events, and reciprocal club privileges.",
  },
  {
    name: "Non-Resident Member",
    description:
      "For professionals based outside the greater Pittsburgh area. Ideal for those who visit the city regularly.",
  },
  {
    name: "Young Professional",
    description:
      "A tailored membership for professionals under 35 — with all core privileges at a scaled dues structure.",
  },
  {
    name: "Corporate Member",
    description:
      "Extend the club experience to your team. Corporate packages available for qualifying organizations.",
  },
];

export const membershipFAQ: FAQItem[] = [
  {
    question: "How do I apply for membership?",
    answer:
      "Membership is by referral and application. You'll need to be sponsored by a current member and complete an application reviewed by the membership committee. Contact us to begin the process.",
  },
  {
    question: "What are the annual dues?",
    answer:
      "Dues vary by membership type and are available upon inquiry. We are happy to discuss the full cost structure during your introductory conversation.",
  },
  {
    question: "What reciprocal clubs are included?",
    answer:
      "We maintain reciprocal agreements with over 150 clubs nationwide and internationally. A full directory of partner clubs is provided to members upon joining.",
  },
  {
    question: "Is there a waiting list?",
    answer:
      "Membership availability varies. We encourage interested professionals to reach out early to learn about current openings.",
  },
  {
    question: "Can I bring guests?",
    answer:
      "Yes. Members may bring guests to most dining areas and events, subject to club policies. Some member-only events are restricted to current members.",
  },
];

export const membershipCTA: CTABlock = {
  title: "Ready to Take the Next Step?",
  description:
    "Contact our membership team to discuss availability, sponsorship, and what to expect from the application process.",
  cta: { label: "Contact the Membership Team", href: "/contact" },
};
