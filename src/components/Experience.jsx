import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience({ data }) {
  return (
    <section id="experience" className="section container">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="timeline-container">
          {data.map((exp, idx) => (
            <div key={idx} style={{ marginBottom: 'clamp(2rem, 4vw, 3.5rem)', position: 'relative' }}>
              {/* Floating icon for desktop timeline */}
              <div className="timeline-dot mobile-hidden">
                <Briefcase size={18} />
              </div>
              
              <div className="card" style={{ padding: 'clamp(1.25rem, 3.5vw, 2.25rem)' }}>
                {/* Header with icon for mobile, inline for desktop */}
                <div className="flex items-start" style={{ gap: '1rem', marginBottom: '0.75rem' }}>
                  <div className="icon-badge desktop-hidden">
                    <Briefcase size={22} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem', lineHeight: 1.3 }}>
                      {exp.role}
                    </h3>
                    <div style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', color: 'var(--accent-color)', fontWeight: 600 }}>
                      {exp.company} — {exp.location}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem', fontWeight: 500 }}>
                      {exp.period}
                    </div>
                  </div>
                </div>
                
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', color: 'var(--text-secondary)', margin: '1.25rem 0', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {exp.responsibilities.map((res, i) => (
                    <li key={i} style={{ lineHeight: 1.65 }}>{res}</li>
                  ))}
                </ul>
                
                {exp.keyProjects && (
                  <div style={{ fontSize: '0.9rem', backgroundColor: 'rgba(79, 111, 165, 0.04)', border: '1px solid var(--border-color)', padding: '1rem 1.25rem', borderRadius: '12px', borderLeft: '4px solid var(--accent-color)' }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '0.35rem' }}>Key Government Digital Initiatives:</span> 
                    <span style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{exp.keyProjects}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
