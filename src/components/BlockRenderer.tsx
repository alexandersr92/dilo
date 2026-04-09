import Hero from './sections/Hero';
import TextImage from './sections/TextImage';
import Features from './sections/Features';
import ListSection from './sections/ListSection';
import SplitLists from './sections/SplitLists';
import CtaSection from './sections/CtaSection';
import Stats from './sections/Stats';
import Quote from './sections/Quote';
import LogoCarousel from './sections/LogoCarousel';
import Testimonials from './sections/Testimonials';

export default function BlockRenderer({ block }: { block: any }) {
  switch (block.type) {
    case 'hero':
      return <Hero data={block} />;
    case 'text-image':
      return <TextImage data={block} />;
    case 'features':
      return <Features data={block} />;
    case 'list-section':
      return <ListSection data={block} />;
    case 'split-lists':
      return <SplitLists data={block} />;
    case 'cta-section':
      return <CtaSection data={block} />;
    case 'stats':
      return <Stats data={block} />;
    case 'quote':
      return <Quote data={block} />;
    case 'logo-carousel':
      return <LogoCarousel data={block} />;
    case 'testimonials':
      return <Testimonials data={block} />;
    default:
      console.warn('Unknown block type:', block.type);
      return null;
  }
}
