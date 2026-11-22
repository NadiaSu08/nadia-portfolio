import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GraduationCap, Users } from 'lucide-react';

export default function Achievements({ data }) {
  if (!data || data.length === 0) return null;

  const getIcon = (category) => {
    switch(category) {
      case 'Fellowship': return <Trophy size={24} />;
      case 'Scholarship': return <GraduationCap size={24} />;
      case 'Leadership': return <Users size={24} />;
      default: return <Trophy size={24} />;
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
        
        <div className="grid grid-cols-3" style={{ marginTop: 'clamp(1.75rem, 4vw, 3rem)' }}>
          {data.map((item, idx) => (
            <div key={idx} className="card flex flex-col" style={{ height: '100%' }}>
              <div className="flex items-start" style={{ gap: '1rem', marginBottom: '1.25rem' }}>
                <div className="icon-badge">
                  {getIcon(item.category)}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontSize: '1.18rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem', lineHeight: 1.35 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--accent-color)', fontWeight: 500 }}>
                    {item.organization}
                  </p>
                </div>
              </div>
              
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1, lineHeight: 1.6 }}>
                {item.description}
              </p>
              
              <div className="flex items-center justify-between" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: 'auto' }}>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{item.period}</span>
                {item.amount && (
                  <span className="tag-badge" style={{ fontWeight: 600, color: '#137333', backgroundColor: 'rgba(19, 115, 51, 0.08)', borderColor: 'rgba(19, 115, 51, 0.25)' }}>
                    Grant: {item.amount}
                  </span>
                )}
                {!item.amount && item.category && (
                  <span className="tag-badge">
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
