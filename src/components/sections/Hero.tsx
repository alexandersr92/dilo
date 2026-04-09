"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
  data: {
    title: string;
    subtitle: string;
    image: string;
    cta: { text: string; link: string };
  };
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '8rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: '4px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem', border: '1px solid rgba(59, 130, 246, 0.2)' }}
          >
            Open Position
          </motion.div>
          <h1 className="text-gradient" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>{data.title}</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '480px' }}>
            {data.subtitle}
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href={data.cta.link} className="btn btn-primary">
              {data.cta.text}
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative' }}
        >
          <div style={{ position: 'absolute', top: '-10%', left: '-10%', right: '-10%', bottom: '-10%', background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)', filter: 'blur(40px)', zIndex: -1, opacity: 0.5 }} />
          <img src={data.image} alt={data.title} className="glass" style={{ width: '100%', height: 'auto', objectFit: 'cover', transform: 'rotate(-2deg)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', padding: '0.5rem' }} />
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .container > div:first-child p {
            margin: 0 auto 2.5rem auto;
          }
          .container > div:first-child div {
            justify-content: center;
          }
          h1 {
            font-size: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
