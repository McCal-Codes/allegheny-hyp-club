import { homeHero, homeSplits, homeStats, homeCTA } from '@/content/home';
import { aboutHero, aboutStory, aboutValues, aboutCTA } from '@/content/about';
import { membershipHero, membershipBenefits, membershipTypes, membershipFAQ, membershipCTA } from '@/content/membership';
import { weddingsHero, weddingsSplits, weddingsSpaces, weddingsCTA } from '@/content/weddings';
import { privateEventsHero, privateEventsTypes, privateEventsCTA } from '@/content/privateEvents';
import { cigarLoungeHero, cigarLoungeDescription, cigarLoungeFeatures, cigarLoungeCTA } from '@/content/cigarLounge';
import { upcomingEvents, eventsPageIntro } from '@/content/events';
import { testimonials } from '@/data/testimonials';
import { navigation } from '@/data/navigation';

export const localContentAdapter = {
  getHomePage: () => ({ homeHero, homeSplits, homeStats, homeCTA, testimonials }),
  getAboutPage: () => ({ aboutHero, aboutStory, aboutValues, aboutCTA }),
  getMembershipPage: () => ({ membershipHero, membershipBenefits, membershipTypes, membershipFAQ, membershipCTA }),
  getWeddingsPage: () => ({ weddingsHero, weddingsSplits, weddingsSpaces, weddingsCTA }),
  getPrivateEventsPage: () => ({ privateEventsHero, privateEventsTypes, privateEventsCTA }),
  getCigarLoungePage: () => ({ cigarLoungeHero, cigarLoungeDescription, cigarLoungeFeatures, cigarLoungeCTA }),
  getEventsPage: () => ({ upcomingEvents, eventsPageIntro }),
  getNavigation: () => navigation,
};
