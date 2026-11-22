import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, GraduationCap, Building2 } from 'lucide-react';

export default function References({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <section id="references" className="section container">
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Academic Reference</h2>
        <p style={{ textAlign: 'center', fontSize: 'clamp(0.92rem, 2vw, 1.05rem)', color: 'var(--text-secondary)', maxWidth: '600px', margin: '-1.5rem auto clamp(2rem, 4vw, 3rem) auto', lineHeight: 1.6 }}>
          Faculty mentorship and academic research thesis supervision.
        </p>

        <div style={{ maxWidth: '680px', margin: '0 auto', width: '100%' }}>
          {data.map((ref, idx) => (
            <div 
              key={idx} 
              className="card" 
              style={{ 
                padding: 'clamp(1.25rem, 3.5vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {/* Profile Header */}
              <div className="flex items-start" style={{ gap: '1rem' }}>
                <div 
                  className="icon-badge" 
                  style={{ 
                    width: '50px', 
                    height: '50px', 
                    minWidth: '50px', 
                    minHeight: '50px',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    backgroundColor: 'rgba(79, 111, 165, 0.12)',
                    color: 'var(--accent-color)'
                  }}
                >
                  <GraduationCap size={26} />
                </div>
                
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="flex flex-wrap items-center" style={{ gap: '0.45rem', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.3rem)', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                      {ref.name}
                    </h3>
                    <span className="tag-badge" style={{ fontSize: '0.72rem' }}>
                      Research Supervisor
                    </span>
                  </div>
                  
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                    {ref.title}, {ref.department}
                  </p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    {ref.institution}
                  </p>
                </div>
              </div>

              {/* Distinguished Affiliation Note */}
              {ref.additional && (
                <div 
                  style={{ 
                    fontSize: '0.88rem', 
                    color: 'var(--text-secondary)', 
                    padding: '0.65rem 0.85rem', 
                    backgroundColor: 'rgba(79, 111, 165, 0.04)', 
                    borderRadius: '8px',
                    borderLeft: '3px solid var(--accent-color)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    lineHeight: 1.5
                  }}
                >
                  <Building2 size={16} color="var(--accent-color)" style={{ flexShrink: 0 }} />
                  <span>{ref.additional}</span>
                </div>
              )}

              {/* Action Contact Buttons */}
              <div 
                className="flex flex-wrap items-center" 
                style={{ 
                  gap: '0.75rem', 
                  borderTop: '1px solid var(--border-color)', 
                  paddingTop: '1rem' 
                }}
              >
                {ref.email && (
                  <a 
                    href={`mailto:${ref.email}`} 
                    className="contact-pill"
                    style={{ flex: '1 1 200px', justifyContent: 'center' }}
                    title="Send Email to Referee"
                  >
                    <Mail size={16} color="var(--accent-color)" />
                    <span>{ref.email}</span>
                  </a>
                )}
                {ref.phone && (
                  <a 
                    href={`tel:${ref.phone}`} 
                    className="contact-pill"
                    style={{ flex: '1 1 180px', justifyContent: 'center' }}
                    title="Call Referee"
                  >
                    <Phone size={16} color="var(--accent-color)" />
                    <span>{ref.phone}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
