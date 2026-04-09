"use client";

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialItem {
  name: string;
  role: string;
  text: string;
}

interface TestimonialsProps {
  data: {
    title: string;
    items: TestimonialItem[];
  };
}

export default function Testimonials({ data }: TestimonialsProps) {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={{ fontSize: '3rem' }}>{data.title}</h2>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div style={{ padding: '0 var(--spacing-container)', paddingBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto', paddingBottom: '2rem', scrollSnapType: 'x mandatory', msOverflowStyle: 'none', scrollbarWidth: 'none' }} className="hide-scroll">
          {data.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass"
              style={{ minWidth: '350px', maxWidth: '400px', padding: '2.5rem', flexShrink: 0, scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem', color: '#fbbf24' }}>
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={18} fill="currentColor" />)}
              </div>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem', flex: 1 }}>
                "{item.text}"
              </p>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{item.name}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--accent)' }}>{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
