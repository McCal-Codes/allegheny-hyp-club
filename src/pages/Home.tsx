import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/sections/HeroSection';
import SplitSection from '@/components/sections/SplitSection';
import StatsRow from '@/components/sections/StatsRow';
import TestimonialGrid from '@/components/sections/TestimonialGrid';
import CTASection from '@/components/sections/CTASection';
import { contentService } from '@/services/cms/contentService';

const { homeHero, homeSplits, homeStats, homeCTA, testimonials } = contentService.getHomePage();

export default function Home() {
  return (
    <PageLayout
      title="Home"
      description="The Allegheny HYP Club — Pittsburgh's premier private club for young professionals. Fine dining, exclusive events, cigar lounge, and reciprocal club access."
    >
      <HeroSection hero={homeHero} fullHeight />
      <StatsRow stats={homeStats} />
      {homeSplits.map((block, i) => (
        <SplitSection key={i} block={block} />
      ))}
      <TestimonialGrid items={testimonials} />
      <CTASection block={homeCTA} />
    </PageLayout>
  );
}
