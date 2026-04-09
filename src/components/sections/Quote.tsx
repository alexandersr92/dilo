"use client";

import { motion } from 'framer-motion';

interface QuoteProps {
  data: {
    text: string;
    author?: string;
  };
}

export default function Quote({ data }: QuoteProps) {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%)', zIndex: 0 }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ fontSize: '4rem', color: 'var(--accent)', opacity: 0.5, lineHeight: 0.5, marginBottom: '1rem', fontFamily: 'Georgia, serif' }}>
            "
          </div>
          <h3 style={{ fontSize: '2.5rem', fontWeight: 400, lineHeight: 1.4, marginBottom: '2rem', letterSpacing: '-0.02em' }}>
            {data.text}
          </h3>
          {data.author && (
            <div style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
              — {data.author}
            </div>
          )}
        </motion.div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          h3 {
            font-size: 1.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
