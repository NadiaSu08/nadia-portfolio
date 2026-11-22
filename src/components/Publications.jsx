import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Bookmark, BrainCircuit } from 'lucide-react';

export default function Publications({ data, interests }) {
  
  const PubCard = ({ pub, index }) => (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="card" 
      style={{ 
        marginBottom: '1.25rem', 
        display: 'flex', 
        gap: '1.25rem', 
        position: 'relative', 
        overflow: 'hidden', 
        padding: 'clamp(1.25rem, 3.5vw, 2rem)' 
      }}
    >
      {pub.highlight && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: 'var(--accent-color)' }} />
      )}
      
      <div style={{ width: '100%' }}>
        <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: 1.4 }}>
          {pub.title}
        </h3>
        <p style={{ fontSize: 'clamp(0.92rem, 2vw, 1rem)', color: 'var(--text-secondary)', marginBottom: '0.75rem', lineHeight: 1.6 }}>
          {pub.authors}
        </p>
        
        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1.15rem' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--accent-color)', fontStyle: 'italic', fontWeight: 600 }}>
            {pub.venue}
          </span>
          {(pub.volume || pub.pages) && (
             <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                {pub.volume ? `${pub.volume}` : ''} {pub.pages ? `, ${pub.pages}` : ''}
             </span>
          )}
          <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>({pub.year})</span>
        </div>
        
        <div className="flex flex-wrap items-center" style={{ gap: '0.5rem' }}>
          <span className={`status-badge ${pub.status === 'Published' ? 'published' : 'review'}`}>
            {pub.status}
          </span>
          {pub.tags.map(tag => (
             <span key={tag} className="tag-badge" style={{ backgroundColor: 'var(--section-bg, rgba(79, 111, 165, 0.05))', color: 'var(--text-secondary)' }}>
               {tag}
             </span>
          ))}
          {pub.highlight && (
             <span className="tag-badge" style={{ fontWeight: 600, color: 'var(--accent-color)', borderColor: 'rgba(79, 111, 165, 0.3)' }}>
               <Bookmark size={13} /> Selected Work
             </span>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="publications" className="section container">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Research Publications</h2>
        
        {interests && interests.length > 0 && (
          <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BrainCircuit size={20} color="var(--accent-color)" /> Research & Academic Focus
            </h3>
            <div className="flex flex-wrap" style={{ gap: '0.5rem' }}>
              {interests.map((interest, idx) => (
                <span 
                  key={idx} 
                  style={{ 
                    padding: 'clamp(0.45rem, 1.5vw, 0.6rem) clamp(0.85rem, 2.5vw, 1.25rem)', 
                    backgroundColor: 'var(--glass-bg)', 
                    border: '1px solid var(--border-color)', 
                    borderRadius: '30px', 
                    fontSize: 'clamp(0.82rem, 1.8vw, 0.92rem)', 
                    fontWeight: 500, 
                    color: 'var(--text-primary)', 
                    boxShadow: 'var(--shadow-sm)' 
                  }}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        )}

        <div>
          <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.35rem)', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <BookOpen size={22} color="var(--accent-color)" /> Refereed Journal Articles
          </h3>
          <div className="flex flex-col gap-2">
            {data.journals.map((pub, idx) => <PubCard key={idx} pub={pub} index={idx} />)}
          </div>
        </div>
        
        <div style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.35rem)', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <FileText size={22} color="var(--accent-color)" /> Conference Proceedings
          </h3>
          <div className="flex flex-col gap-2">
            {data.conferences.map((pub, idx) => <PubCard key={idx} pub={pub} index={idx} />)}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
