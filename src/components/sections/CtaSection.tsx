"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

interface CtaSectionProps {
  data: {
    id: string;
    title: string;
    subtitle: string;
    instructions: string[];
    email: string;
  };
}

export default function CtaSection({ data }: CtaSectionProps) {
  return (
    <section id={data.id} className="section" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Decor */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)', filter: 'blur(100px)', zIndex: 0, opacity: 0.15 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px', textAlign: 'center' }}>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>{data.title}</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.6 }}>
            {data.subtitle}
          </p>

          <div className="glass" style={{ padding: '3rem', textAlign: 'left', marginBottom: '3rem', display: 'inline-block', width: '100%', maxWidth: '600px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Please prepare to send:</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {data.instructions.map((inst, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                  <ArrowRight size={16} color="var(--accent)" />
                  <span>{inst}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <a href={`mailto:${data.email}`} className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
              <Mail size={20} style={{ marginRight: '0.75rem' }} />
              Email Us Your Application
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
