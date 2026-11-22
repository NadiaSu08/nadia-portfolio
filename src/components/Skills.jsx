import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Sparkles, Layout, Terminal } from 'lucide-react';

export default function Skills({ data }) {
  const categories = [
    { title: "Programming", icon: <Code2 size={20} />, skills: data.programming || [] },
    { title: "Machine Learning & AI", icon: <BrainCircuit size={20} />, skills: data.machineLearning || [] },
    { title: "Explainable AI (XAI)", icon: <Sparkles size={20} />, skills: data.explainableAI || [] },
    { title: "Web & HCI", icon: <Layout size={20} />, skills: data.webHci || [] },
    { title: "Research Tools & Platforms", icon: <Terminal size={20} />, skills: data.researchTools || [] }
  ];

  return (
    <section id="skills" className="section container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-3" style={{ gap: 'clamp(1rem, 3vw, 1.75rem)', marginTop: 'clamp(1.75rem, 4vw, 3rem)' }}>
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="card flex flex-col"
              style={{ 
                height: '100%',
                padding: 'clamp(1.25rem, 3.5vw, 1.75rem)',
                ...(idx >= 3 ? { gridColumn: 'span 1' } : {})
              }}
            >
              <div className="flex items-center" style={{ gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div 
                  className="icon-badge" 
                  style={{ width: '40px', height: '40px', minWidth: '40px', minHeight: '40px' }}
                >
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap" style={{ gap: '0.5rem', marginTop: 'auto' }}>
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="tag-badge"
                    style={{ 
                      fontSize: '0.85rem',
                      padding: '0.35rem 0.75rem',
                      backgroundColor: 'rgba(79, 111, 165, 0.05)',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border-color)',
                      fontWeight: 500
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
