import React from 'react';
import { motion } from 'framer-motion';

export default function Skills({ data }) {
  
  const SkillCategory = ({ title, skills }) => (
    <div style={{ marginBottom: '2rem' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
        {title}
      </h3>
      <div className="flex" style={{ flexWrap: 'wrap', gap: '0.75rem' }}>
        {skills.map((skill, idx) => (
          <span key={idx} style={{ 
            padding: '0.4rem 0.8rem', 
            backgroundColor: 'var(--section-bg)', 
            color: 'var(--text-secondary)', 
            borderRadius: '4px',
            fontSize: '0.9rem',
            fontWeight: 500,
            border: '1px solid var(--border-color)'
          }}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="section container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-2" style={{ gap: '2rem', marginTop: '3rem' }}>
          <div>
            <SkillCategory title="Programming Languages" skills={data.programming} />
            <SkillCategory title="Frameworks & Libraries" skills={data.frameworks} />
          </div>
          <div>
            <SkillCategory title="Web & App Development" skills={data.web} />
            <SkillCategory title="Design & Prototyping" skills={data.design} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
