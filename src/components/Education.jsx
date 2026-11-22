import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Education({ data }) {
  return (
    <section id="education" className="section container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Education</h2>
        
        <div className="grid grid-cols-2" style={{ gap: '2rem', marginTop: '3rem' }}>
          {data.map((edu, idx) => (
            <div key={idx} className="card flex flex-col" style={{ height: '100%' }}>
              <div className="flex items-start" style={{ gap: '1rem', marginBottom: '1.25rem' }}>
                <div className="icon-badge">
                  <GraduationCap size={24} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    {edu.degree}
                  </h3>
                  <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                    {edu.institution}
                  </p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--accent-color)', fontWeight: 500, marginTop: '0.2rem' }}>
                    {edu.period}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center" style={{ gap: '0.6rem', marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)' }}>
                <span className="tag-badge" style={{ fontWeight: 600, color: 'var(--text-primary)', backgroundColor: 'var(--section-bg)' }}>
                  CGPA: {edu.gpa}
                </span>
                {edu.honors && (
                  <span className="tag-badge" style={{ fontWeight: 600, color: 'var(--accent-color)' }}>
                    ★ {edu.honors}
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
