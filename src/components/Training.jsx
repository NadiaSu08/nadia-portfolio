import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

export default function Training({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <section id="training" className="section container">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Training & Certifications</h2>
        
        <div className="grid grid-cols-3" style={{ marginTop: '3rem' }}>
          {data.map((item, idx) => (
            <div key={idx} className="card flex flex-col" style={{ height: '100%' }}>
              <div className="flex items-start" style={{ gap: '1rem', marginBottom: '1.25rem' }}>
                <div className="icon-badge">
                  <BadgeCheck size={24} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem', lineHeight: 1.35 }}>
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap items-center" style={{ gap: '0.4rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <span style={{ fontWeight: 500 }}>{item.organization}</span>
                    <span>•</span>
                    <span style={{ color: 'var(--accent-color)', fontWeight: 500 }}>{item.period}</span>
                  </div>
                </div>
              </div>
              
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1, lineHeight: 1.6 }}>
                {item.description}
              </p>
              
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap items-center" style={{ gap: '0.45rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: 'auto' }}>
                  {item.tags.map(tag => (
                    <span key={tag} className="tag-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
