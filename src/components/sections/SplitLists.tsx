"use client";

import { motion } from 'framer-motion';
import { CheckCircle2, Star } from 'lucide-react';

interface ListData {
  title: string;
  items: string[];
}

interface SplitListsProps {
  data: {
    title: string;
    list1: ListData;
    list2: ListData;
  };
}

export default function SplitLists({ data }: SplitListsProps) {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '2.5rem' }}>{data.title}</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          
          {/* List 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass"
            style={{ padding: '3rem' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <CheckCircle2 color="var(--accent)" />
              {data.list1.title}
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {data.list1.items.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', marginTop: '0.6rem', flexShrink: 0 }} />
                  <span style={{ lineHeight: 1.6 }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* List 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass"
            style={{ padding: '3rem', border: '1px solid rgba(59, 130, 246, 0.3)', background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(59, 130, 246, 0.05) 100%)' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Star color="var(--accent)" />
              {data.list2.title}
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {data.list2.items.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', marginTop: '0.6rem', flexShrink: 0 }} />
                  <span style={{ lineHeight: 1.6 }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
