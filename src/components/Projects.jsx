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
      style={{ height: '100%' }}
    >
      <div className="flex justify-between items-center" style={{ marginBottom: '1.25rem' }}>
        <div className="icon-badge" style={{ width: '42px', height: '42px', minWidth: '42px', minHeight: '42px' }}>
          <FolderGit2 size={22} />
        </div>
        
        {project.link && project.link !== '#' && (
           <a 
             href={project.link} 
             target="_blank" 
             rel="noopener noreferrer" 
             className="tag-badge"
             style={{ 
               fontWeight: 600, 
               color: 'var(--accent-color)',
               textDecoration: 'none',
               transition: 'all 0.2s ease',
               cursor: 'pointer'
             }} 
             aria-label={`View repository for ${project.title}`}
           >
             <span>{project.link.includes('github') ? 'GitHub' : 'Project Link'}</span>
             <ExternalLink size={13} />
           </a>
        )}
      </div>
      <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.35 }}>
        {project.title}
      </h3>
      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1 }}>
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
