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
        <h2 className="section-title">Leadership & Academic Service</h2>
        
        <div className="grid grid-cols-3" style={{ gap: '2rem', marginTop: '3rem' }}>
          {data.map((item, idx) => (
            <div key={idx} className="card flex flex-col" style={{ height: '100%' }}>
              <Users size={28} color="var(--accent-color)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {item.role}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--accent-color)', marginBottom: '0.5rem', fontWeight: 500 }}>
                {item.organization}
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                {item.period}
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', flex: 1 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
