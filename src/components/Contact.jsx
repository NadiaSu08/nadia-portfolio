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
        <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: 'var(--text-secondary)', marginTop: '1rem', marginBottom: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.65 }}>
          I am currently open to industry roles in UX Engineering and AI Research, as well as exploring PhD opportunities in Explainable AI and Human-Computer Interaction. 
          Please feel free to reach out for professional collaborations, research inquiries, or academic opportunities.
        </p>

        <div className="flex flex-wrap justify-center" style={{ gap: '0.75rem', width: '100%' }}>
          {links.map((link, idx) => (
            <a 
              key={idx} 
              href={link.url} 
              target={link.label !== 'Email' ? '_blank' : undefined} 
              rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
              className="contact-pill"
            >
              <span style={{ color: 'var(--accent-color)' }}>{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
