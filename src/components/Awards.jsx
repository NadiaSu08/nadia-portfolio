import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function Awards({ data }) {
  return (
    <section id="awards" className="section container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Awards & Fellowships</h2>
        
        <div style={{ marginTop: '3rem' }}>
          {data.map((award, idx) => (
            <div key={idx} className="card flex items-center" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div style={{ backgroundColor: 'rgba(79, 111, 165, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                <Award size={32} color="var(--accent-color)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {award.title}
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--accent-color)', fontWeight: 500, margin: '0.25rem 0' }}>
                  {award.organization} | {award.period}
                </p>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                  {award.description}
                </p>
                {award.amount && (
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem', fontWeight: 600 }}>
                    Grant Amount: {award.amount}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
