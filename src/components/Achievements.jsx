import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GraduationCap, Users } from 'lucide-react';

export default function Achievements({ data }) {
  if (!data || data.length === 0) return null;

  const getIcon = (category) => {
    switch(category) {
      case 'Fellowship': return <Trophy size={28} />;
      case 'Scholarship': return <GraduationCap size={28} />;
      case 'Leadership': return <Users size={28} />;
      default: return <Trophy size={28} />;
    }
  };

  return (
    <section id="achievements" className="section container">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Achievements & Recognition</h2>
        
        <div className="grid grid-cols-3" style={{ marginTop: '3rem' }}>
          {data.map((item, idx) => (
            <div key={idx} className="card flex flex-col" style={{ height: '100%' }}>
              <div className="flex justify-between items-start" style={{ marginBottom: '1.25rem' }}>
                <div style={{ backgroundColor: 'rgba(79, 111, 165, 0.08)', padding: '1rem', borderRadius: '50%', color: 'var(--accent-color)' }}>
                  {getIcon(item.category)}
                </div>
                <div style={{ flex: 1, marginLeft: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem', lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '1rem', color: 'var(--accent-color)', fontWeight: 500 }}>
                    {item.organization}
                  </p>
                </div>
              </div>
              
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1, lineHeight: 1.6 }}>
                {item.description}
              </p>
              
              <div className="flex items-center justify-between" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem', marginTop: 'auto' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{item.period}</span>
                {item.amount && (
                  <span style={{ fontSize: '0.9rem', padding: '0.3rem 0.8rem', borderRadius: '20px', backgroundColor: 'var(--bg-color)', color: 'var(--accent-color)', fontWeight: 600, border: '1px solid var(--border-color)' }}>
                    Grant: {item.amount}
                  </span>
                )}
                {!item.amount && (
                  <span style={{ fontSize: '0.85rem', padding: '0.3rem 0.8rem', borderRadius: '20px', backgroundColor: 'rgba(79, 111, 165, 0.05)', color: 'var(--text-secondary)', fontWeight: 500 }}>
                    {item.category}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
