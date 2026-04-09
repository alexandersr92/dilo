import type { Metadata } from "next";
import "./globals.css";
import siteData from "@/data/site-data.json";

export const metadata: Metadata = {
  title: siteData.brand.name + " | Project Manager",
  description: "Join the team. Manage client projects from onboarding to completion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        
        {/* Simple Header */}
        <header style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 100, padding: '1.5rem 0' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.05em' }}>
              {siteData.brand.name}.
            </div>
            <a href={`mailto:${siteData.sections.find(s => s.type === 'cta-section')?.email}`} className="btn btn-outline" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
              Apply Now
            </a>
          </div>
        </header>

        {children}

        {/* Dynamic Footer */}
        <footer style={{ borderTop: '1px solid var(--border-light)', padding: '2rem 0', marginTop: '4rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <p>{siteData.footer.text}</p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              {siteData.footer.links.map((link: any, i: number) => (
                <a key={i} href={link.url} style={{ transition: 'color 0.2s' }}>{link.text}</a>
              ))}
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
