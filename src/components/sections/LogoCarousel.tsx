"use client";

import { motion } from 'framer-motion';

interface LogoCarouselProps {
  data: {
    title: string;
    subtitle: string;
    logos: string[];
  };
}

export default function LogoCarousel({ data }: LogoCarouselProps) {
  // Duplicating logos to create infinite scroll effect
  const duplicatedLogos = [...data.logos, ...data.logos];

  return (
    <section className="section" style={{ background: 'var(--bg-primary)', overflow: 'hidden', padding: '6rem 0' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{data.title}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{data.subtitle}</p>
        </motion.div>
      </div>

      <div style={{ position: 'relative', width: '100%', display: 'flex', overflow: 'hidden' }}>
        {/* Gradients for fading edges */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '150px', background: 'linear-gradient(to right, var(--bg-primary), transparent)', zIndex: 2 }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '150px', background: 'linear-gradient(to left, var(--bg-primary), transparent)', zIndex: 2 }} />
        
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          style={{ display: 'flex', gap: '4rem', paddingLeft: '2rem', paddingRight: '2rem' }}
        >
          {duplicatedLogos.map((logo, i) => (
            <div key={i} style={{ width: '200px', height: '100px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', filter: 'grayscale(100%) opacity(0.6)', transition: 'all 0.3s ease' }} 
                 className="logo-item">
              <img src={logo} alt={`Logo ${i}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .logo-item:hover {
          filter: grayscale(0%) opacity(1) !important;
        }
      `}</style>
    </section>
  );
}
