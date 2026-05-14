import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, GraduationCap, Library, UserCircle } from 'lucide-react';

export default function Contact({ personal }) {
  const links = [
    { label: 'Email', value: personal.email, url: `mailto:${personal.email}`, icon: <Mail size={18} /> },
    { label: 'LinkedIn', value: 'sultana-nadia', url: personal.linkedin, icon: <Linkedin size={18} /> },
    { label: 'GitHub', value: 'NadiaSu08', url: personal.github, icon: <Github size={18} /> },
    { label: 'Google Scholar', value: 'Nadia Sultana', url: 'https://scholar.google.com/citations?hl=en&user=T76v8o4AAAAJ', icon: <GraduationCap size={18} /> },
    { label: 'ResearchGate', value: 'Nadia-Sultana-14', url: 'https://www.researchgate.net/profile/Nadia-Sultana-14?ev=hdr_xprf', icon: <Library size={18} /> },
    { label: 'ORCID', value: '0009-0003-3054-9432', url: 'https://orcid.org/0009-0003-3054-9432', icon: <UserCircle size={18} /> }
  ];

  return (
    <section id="contact" className="section container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}
      >
        <h2 className="section-title">Get In Touch</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginTop: '1.5rem', marginBottom: '3rem', lineHeight: 1.6 }}>
          I am currently open to industry roles in UX Engineering and AI Research, as well as exploring PhD opportunities in Explainable AI and Human-Computer Interaction. 
          Please feel free to reach out for professional collaborations, research inquiries, or academic opportunities.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
          {links.map((link, idx) => (
            <a 
              key={idx} 
              href={link.url} 
              target={link.label !== 'Email' ? '_blank' : undefined} 
              rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
              className="contact-pill"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.6rem', 
                padding: '0.6rem 1.25rem', 
                backgroundColor: 'rgba(79, 111, 165, 0.05)', 
                border: '1px solid rgba(79, 111, 165, 0.2)', 
                borderRadius: '30px',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: 500,
                transition: 'all 0.2s ease'
              }}
            >
              <span style={{ color: 'var(--accent-color)' }}>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
