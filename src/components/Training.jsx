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
            <div key={idx} className="card flex flex-col">
              <div className="flex justify-between items-start" style={{ marginBottom: '1.25rem' }}>
                <div style={{ backgroundColor: 'rgba(79, 111, 165, 0.1)', padding: '0.75rem', borderRadius: '50%', color: 'var(--accent-color)' }}>
                  <BadgeCheck size={28} />
                </div>
                <div style={{ flex: 1, marginLeft: '1rem' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem', lineHeight: 1.4 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                    {item.organization}
                  </p>
                </div>
              </div>
              
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>
                {item.description}
              </p>
              
              <div className="flex items-center justify-between" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: 'auto' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.period}</span>
                <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                  {item.tags.map(tag => (
                     <span key={tag} style={{ fontSize: '0.8rem', padding: '0.25rem 0.6rem', borderRadius: '20px', backgroundColor: 'var(--section-bg)', color: 'var(--accent-color)', fontWeight: 600, border: '1px solid var(--border-color)' }}>
                       {tag}
                     </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
