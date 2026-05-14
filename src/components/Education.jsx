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
            <div key={idx} className="card">
              <GraduationCap size={32} color="var(--accent-color)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {edu.degree}
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 500 }}>
                {edu.institution}
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                {edu.period}
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                <strong>CGPA:</strong> {edu.gpa}
              </p>
              {edu.honors && (
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem', fontStyle: 'italic' }}>
                  Honors: {edu.honors}
                </p>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
