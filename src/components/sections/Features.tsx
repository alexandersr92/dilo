"use client";

import { motion } from 'framer-motion';
import { BrainCircuit, Wrench, Crosshair, DollarSign, Clock, TrendingUp, CheckCircle } from 'lucide-react';

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesProps {
  data: {
    title: string;
    items: FeatureItem[];
  };
}

const ICONS: Record<string, React.ElementType> = {
  BrainCircuit,
  Wrench,
  Crosshair,
  DollarSign,
  Clock,
  TrendingUp,
  CheckCircle
};

export default function Features({ data }: FeaturesProps) {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0, opacity: 0.1 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '2.5rem' }}>{data.title}</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {data.items.map((item, i) => {
            const IconComponent = ICONS[item.icon] || CheckCircle;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass"
                style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
              >
                <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'rgba(59, 130, 246, 0.15)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                  <IconComponent size={28} strokeWidth={1.5} />
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', fontWeight: 600 }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1.05rem' }}>{item.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
