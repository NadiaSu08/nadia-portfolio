import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Bookmark, BrainCircuit } from 'lucide-react';

export default function Publications({ data, interests }) {
  
  const PubCard = ({ pub, index }) => (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="card" 
      style={{ marginBottom: '1.5rem', display: 'flex', gap: '1.5rem', position: 'relative', overflow: 'hidden', padding: '1.75rem 2rem' }}
    >
      {pub.highlight && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: 'var(--accent-color)' }} />
      )}
      
      <div style={{ width: '100%' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.6rem', lineHeight: 1.4 }}>
          {pub.title}
        </h3>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '0.85rem', lineHeight: 1.6 }}>
          {pub.authors}
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          <span style={{ fontSize: '0.95rem', color: 'var(--accent-color)', fontStyle: 'italic', fontWeight: 600 }}>
            {pub.venue}
          </span>
          {(pub.volume || pub.pages) && (
             <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                {pub.volume ? `${pub.volume}` : ''} {pub.pages ? `, ${pub.pages}` : ''}
             </span>
          )}
          <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>({pub.year})</span>
        </div>
        
        <div className="flex items-center" style={{ gap: '0.75rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.8rem', padding: '0.35rem 0.85rem', borderRadius: '4px', backgroundColor: pub.status === 'Published' ? 'rgba(19, 115, 51, 0.08)' : 'rgba(176, 96, 0, 0.08)', color: pub.status === 'Published' ? '#137333' : '#b06000', fontWeight: 600, border: `1px solid ${pub.status === 'Published' ? 'rgba(19, 115, 51, 0.2)' : 'rgba(176, 96, 0, 0.2)'}` }}>
            {pub.status}
          </span>
          {pub.tags.map(tag => (
             <span key={tag} style={{ fontSize: '0.8rem', padding: '0.35rem 0.85rem', borderRadius: '4px', backgroundColor: 'var(--bg-color)', color: 'var(--text-secondary)', border: '1px solid var(--border-color)', fontWeight: 500 }}>
               {tag}
             </span>
          ))}
          {pub.highlight && (
             <span style={{ fontSize: '0.8rem', padding: '0.35rem 0.85rem', borderRadius: '4px', backgroundColor: 'rgba(79, 111, 165, 0.08)', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600, border: '1px solid rgba(79, 111, 165, 0.25)' }}>
               <Bookmark size={14} /> Selected Work
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
        <h2 className="section-title">Journal Publications</h2>
        
        {interests && interests.length > 0 && (
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BrainCircuit size={22} color="var(--accent-color)" /> Research & Academic Focus
            </h3>
            <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
              {interests.map((interest, idx) => (
                <span key={idx} style={{ padding: '0.6rem 1.25rem', backgroundColor: 'var(--glass-bg)', border: '1px solid var(--border-color)', borderRadius: '30px', fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)', boxShadow: 'var(--shadow-sm)' }}>
                  {interest}
                </span>
              ))}
            </div>
          </div>
        )}

        <div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '2rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <BookOpen size={24} color="var(--accent-color)" /> Refereed Journal Articles
          </h3>
          <div className="flex flex-col gap-2">
            {data.journals.map((pub, idx) => <PubCard key={idx} pub={pub} index={idx} />)}
          </div>
        </div>
        
        <div style={{ marginTop: '4rem' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '2rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <FileText size={24} color="var(--accent-color)" /> Conference Proceedings
          </h3>
          <div className="flex flex-col gap-2">
            {data.conferences.map((pub, idx) => <PubCard key={idx} pub={pub} index={idx} />)}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
