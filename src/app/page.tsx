import BlockRenderer from '@/components/BlockRenderer';
import siteData from '@/data/site-data.json';

export default function Home() {
  return (
    <main>
      {siteData.sections.map((block: any, index: number) => (
        <BlockRenderer key={block.id || index} block={block} />
      ))}
    </main>
  );
}
