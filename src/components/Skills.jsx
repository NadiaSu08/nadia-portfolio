import React from 'react';
import { motion } from 'framer-motion';

export default function Skills({ data }) {
  const categories = [
    { title: "Programming", skills: data.programming || [] },
    { title: "Machine Learning & AI", skills: data.machineLearning || [] },
    { title: "Explainable AI (XAI)", skills: data.explainableAI || [] },
    { title: "Web & HCI", skills: data.webHci || [] },
    { title: "Research Tools & Platforms", skills: data.researchTools || [] }
  ];

  const SkillCategory = ({ title, skills }) => (
    <div style={{ marginBottom: '2.5rem' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
        {title}
      </h3>
      <div className="flex" style={{ flexWrap: 'wrap', gap: '0.75rem' }}>
        {skills.map((skill, idx) => (
          <span key={idx} style={{ 
            padding: '0.45rem 0.9rem', 
            backgroundColor: 'var(--section-bg, rgba(79, 111, 165, 0.05))', 
            color: 'var(--text-primary)', 
            borderRadius: '6px',
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
        
        <div className="grid grid-cols-2" style={{ gap: '2.5rem', marginTop: '3rem' }}>
          <div>
            <SkillCategory title={categories[0].title} skills={categories[0].skills} />
            <SkillCategory title={categories[1].title} skills={categories[1].skills} />
            <SkillCategory title={categories[2].title} skills={categories[2].skills} />
          </div>
          <div>
            <SkillCategory title={categories[3].title} skills={categories[3].skills} />
            <SkillCategory title={categories[4].title} skills={categories[4].skills} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
