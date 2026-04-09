"use client";

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ListSectionProps {
  data: {
    title: string;
    items: string[];
  };
}

export default function ListSection({ data }: ListSectionProps) {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '2.5rem' }}>{data.title}</h2>
        </motion.div>

        <div className="glass" style={{ padding: '3rem' }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {data.items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}
              >
                <CheckCircle2 color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} size={24} />
                <span style={{ lineHeight: 1.6 }}>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
