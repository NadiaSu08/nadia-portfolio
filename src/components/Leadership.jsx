import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

export default function Leadership({ data }) {
  return (
    <section id="leadership" className="section container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Leadership & Community</h2>
        
        <div className="grid grid-cols-3" style={{ gap: 'clamp(1.25rem, 3vw, 2rem)', marginTop: 'clamp(1.75rem, 4vw, 3rem)' }}>
          {data.map((item, idx) => (
            <div key={idx} className="card flex flex-col" style={{ height: '100%' }}>
              <div className="flex items-start" style={{ gap: '1rem', marginBottom: '1.25rem' }}>
                <div className="icon-badge">
                  <Users size={24} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem', lineHeight: 1.35 }}>
                    {item.role}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--accent-color)', fontWeight: 500 }}>
                    {item.organization}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    {item.period}
                  </p>
                </div>
              </div>
              
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', flex: 1, lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
