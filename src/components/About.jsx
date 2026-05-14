import React from 'react';
import { motion } from 'framer-motion';

export default function About({ data, interests }) {
  return (
    <section id="about" className="section container">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1" style={{ gap: '2rem', marginTop: '2rem' }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            {data.about}
          </p>
          
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)' }}>Core Expertise & Research Focus</h3>
            <div className="flex" style={{ flexWrap: 'wrap', gap: '0.75rem' }}>
              {interests.map((interest, idx) => (
                <span key={idx} style={{ 
                  padding: '0.5rem 1rem', 
                  backgroundColor: 'rgba(79, 111, 165, 0.1)', 
                  color: 'var(--accent-color)', 
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 500
                }}>
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div >
      </motion.div>
    </section>
  );
}
