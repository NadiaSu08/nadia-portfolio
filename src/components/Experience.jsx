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
              <div style={{ position: 'absolute', left: 'calc(-clamp(1.5rem, 4vw, 2.5rem) - 1.15rem)', top: '0', background: 'var(--accent-color)', color: 'white', padding: '0.5rem', borderRadius: '50%', border: '4px solid var(--bg-color)' }}>
                <Briefcase size={20} />
              </div>
              
              <div className="card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{exp.role}</h3>
                <div style={{ fontSize: '1.1rem', color: 'var(--accent-color)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {exp.company} — {exp.location}
                </div>
                <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: 500 }}>
                  {exp.period}
                </div>
                
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {exp.responsibilities.map((res, i) => (
                    <li key={i} style={{ lineHeight: 1.6 }}>{res}</li>
                  ))}
                </ul>
                
                {exp.keyProjects && (
                  <div style={{ fontSize: '0.95rem', backgroundColor: 'var(--glass-bg)', border: '1px solid var(--border-color)', padding: '1.25rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-color)' }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>Selected Multidisciplinary Projects:</span> 
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
