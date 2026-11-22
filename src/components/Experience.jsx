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
        
        <div style={{ marginTop: '4rem', position: 'relative', paddingLeft: 'clamp(1.5rem, 4vw, 2.5rem)', borderLeft: '3px solid rgba(79, 111, 165, 0.2)' }}>
          {data.map((exp, idx) => (
            <div key={idx} style={{ marginBottom: '4rem', position: 'relative' }}>
              <div style={{ position: 'absolute', left: 'calc(-clamp(1.5rem, 4vw, 2.5rem) - 22px)', top: '0', width: '42px', height: '42px', background: 'var(--accent-color)', color: 'white', borderRadius: '50%', border: '4px solid var(--bg-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Briefcase size={18} />
              </div>
              
              <div className="card" style={{ padding: 'clamp(1.5rem, 4vw, 2.25rem)' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{exp.role}</h3>
                <div style={{ fontSize: '1.05rem', color: 'var(--accent-color)', fontWeight: 600, marginBottom: '0.4rem' }}>
                  {exp.company} — {exp.location}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: 500 }}>
                  {exp.period}
                </div>
                
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', fontSize: '0.98rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {exp.responsibilities.map((res, i) => (
                    <li key={i} style={{ lineHeight: 1.65 }}>{res}</li>
                  ))}
                </ul>
                
                {exp.keyProjects && (
                  <div style={{ fontSize: '0.92rem', backgroundColor: 'rgba(79, 111, 165, 0.04)', border: '1px solid var(--border-color)', padding: '1.25rem', borderRadius: '12px', borderLeft: '4px solid var(--accent-color)' }}>
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
