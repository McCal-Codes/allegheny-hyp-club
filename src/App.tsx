import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Membership = lazy(() => import("./pages/Membership"));
const Weddings = lazy(() => import("./pages/Weddings"));
const PrivateEvents = lazy(() => import("./pages/PrivateEvents"));
const Events = lazy(() => import("./pages/Events"));
const CigarLounge = lazy(() => import("./pages/CigarLounge"));
const Contact = lazy(() => import("./pages/Contact"));

function PageSkeleton() {
  return (
    <div className="min-h-screen bg-[var(--color-navy)] animate-pulse">
      <div className="h-20 bg-[var(--color-navy)]/50" />
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="h-8 bg-white/10 rounded w-1/3 mb-6" />
        <div className="h-16 bg-white/10 rounded w-2/3 mb-8" />
        <div className="h-4 bg-white/10 rounded w-full mb-4" />
        <div className="h-4 bg-white/10 rounded w-5/6" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<PageSkeleton />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/membership/reciprocity" element={<Membership />} />
            <Route path="/weddings" element={<Weddings />} />
            <Route path="/private-events" element={<PrivateEvents />} />
            <Route path="/events" element={<Events />} />
            <Route path="/cigar-lounge" element={<CigarLounge />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
