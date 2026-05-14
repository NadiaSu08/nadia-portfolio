import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Lightbulb, CodeSquare } from 'lucide-react';

export default function Projects({ data }) {
  
  const ProjectCard = ({ project, index }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="card flex flex-col"
    >
      <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem' }}>
        <div style={{ background: 'rgba(79, 111, 165, 0.1)', padding: '0.6rem', borderRadius: '8px', color: 'var(--accent-color)' }}>
          <FolderGit2 size={24} />
        </div>
        
        {project.link !== '#' && !project.link.includes('github') && (
           <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} aria-label={`External link for ${project.title}`}>
             <ExternalLink size={20} />
           </a>
        )}
        {project.link.includes('github') && (
           <span style={{ fontSize: '0.85rem', padding: '0.3rem 0.75rem', borderRadius: '20px', border: '1px solid var(--accent-color)', color: 'var(--accent-color)', fontWeight: 600 }}>GitHub Repo</span>
        )}
      </div>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.3 }}>
        {project.title}
      </h3>
      <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
        {project.description}
      </p>
    </motion.div>
  );

  return (
    <section id="projects" className="section container">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Selected Projects</h2>
        
        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Lightbulb size={24} color="var(--accent-color)" /> Research-Driven Implementations
          </h3>
          <div className="grid grid-cols-3">
            {data.research.map((project, idx) => (
              <ProjectCard key={idx} project={project} index={idx} />
            ))}
          </div>
        </div>

        <div style={{ marginTop: '5rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <CodeSquare size={24} color="var(--accent-color)" /> UX & Architecture Engineering
          </h3>
          <div className="grid grid-cols-3">
            {data.engineering.map((project, idx) => (
              <ProjectCard key={idx} project={project} index={idx} />
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
}
