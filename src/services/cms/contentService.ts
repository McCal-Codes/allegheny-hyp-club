import { localContentAdapter } from './adapters/localContentAdapter';

// All pages pull content through here.
// To swap in a CMS later: create a new adapter with the same shape,
// import it here instead of localContentAdapter, done.
export const contentService = {
  getHomePage: () => localContentAdapter.getHomePage(),
  getAboutPage: () => localContentAdapter.getAboutPage(),
  getMembershipPage: () => localContentAdapter.getMembershipPage(),
  getWeddingsPage: () => localContentAdapter.getWeddingsPage(),
  getPrivateEventsPage: () => localContentAdapter.getPrivateEventsPage(),
  getCigarLoungePage: () => localContentAdapter.getCigarLoungePage(),
  getEventsPage: () => localContentAdapter.getEventsPage(),
  getNavigation: () => localContentAdapter.getNavigation(),
};
