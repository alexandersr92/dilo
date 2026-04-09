"use client";

import { motion } from 'framer-motion';

interface TextImageProps {
  data: {
    title: string;
    content: string;
    image: string;
    imagePosition?: 'left' | 'right';
  };
}

export default function TextImage({ data }: TextImageProps) {
  const isRight = data.imagePosition === 'right';

  return (
    <section className="section">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4rem', alignItems: 'center' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          style={{ order: isRight ? 1 : 2 }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{data.title}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            {data.content.split('\n\n').map((paragraph, i) => (
              <p key={i} style={{ lineHeight: 1.7 }}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ order: isRight ? 2 : 1 }}
        >
          <img src={data.image} alt={data.title} className="glass" style={{ width: '100%', height: 'auto', padding: '0.25rem' }} />
        </motion.div>

      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .container {
            grid-template-columns: 1fr !important;
          }
          .container > div {
            order: unset !important;
          }
        }
      `}</style>
    </section>
  );
}
