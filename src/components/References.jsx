import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Mail, Phone, Building2 } from 'lucide-react';

export default function References({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <section id="references" className="section container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Academic References</h2>
        
        <div style={{ maxWidth: '750px', margin: '3rem auto 0 auto' }}>
          {data.map((ref, idx) => (
            <div key={idx} className="card" style={{ padding: '2.5rem', borderLeft: '4px solid var(--accent-color)' }}>
              <div className="flex items-center" style={{ gap: '1.25rem', marginBottom: '1.25rem' }}>
                <div style={{ backgroundColor: 'rgba(79, 111, 165, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--accent-color)' }}>
                  <UserCheck size={30} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                    {ref.name}
                  </h3>
                  <p style={{ fontSize: '1.05rem', color: 'var(--accent-color)', fontWeight: 600 }}>
                    {ref.title}, {ref.department}
                  </p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    {ref.institution}
                  </p>
                </div>
              </div>

              {ref.additional && (
                <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontStyle: 'italic', paddingLeft: '0.5rem', borderLeft: '2px solid var(--border-color)' }}>
                  {ref.additional}
                </div>
              )}

              <div className="flex items-center" style={{ gap: '1.5rem', flexWrap: 'wrap', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
                {ref.email && (
                  <a href={`mailto:${ref.email}`} className="nav-link flex items-center" style={{ gap: '0.5rem', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                    <Mail size={16} color="var(--accent-color)" />
                    <span>{ref.email}</span>
                  </a>
                )}
                {ref.phone && (
                  <a href={`tel:${ref.phone}`} className="nav-link flex items-center" style={{ gap: '0.5rem', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
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
