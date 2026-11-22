import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Github, Linkedin, Mail, BookOpen, BrainCircuit, ShieldCheck, GraduationCap, Library, UserCircle } from 'lucide-react';

export default function Hero({ data }) {
  
  const FloatingMetric = ({ icon, label, value, delay, top, left, right, bottom }) => (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay }}
      style={{ 
        position: 'absolute',
        top, left, right, bottom,
        background: 'rgba(255, 255, 255, 0.85)', 
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(229, 231, 235, 0.6)',
        borderRadius: '16px',
        padding: '1rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.85rem',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
        zIndex: 5,
        pointerEvents: 'none'
      }}
      className="mobile-hidden"
    >
      <div className="icon-badge" style={{ width: '42px', height: '42px', minWidth: '42px', minHeight: '42px' }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.1 }}>{value}</div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500, marginTop: '2px' }}>{label}</div>
      </div>
    </motion.div>
  );

  return (
    <section id="hero" className="section container" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      
      {/* Background Animated Gradient Blobs */}
      <motion.div 
        animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: '10%', left: '10%', width: '35vw', height: '35vw', maxWidth: '350px', maxHeight: '350px', background: 'radial-gradient(circle, rgba(79, 111, 165, 0.07) 0%, transparent 60%)', zIndex: -1, borderRadius: '50%' }} 
        aria-hidden="true"
      />
      <motion.div 
        animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: '10%', right: '10%', width: '40vw', height: '40vw', maxWidth: '400px', maxHeight: '400px', background: 'radial-gradient(circle, rgba(165, 161, 190, 0.08) 0%, transparent 65%)', zIndex: -1, borderRadius: '50%' }} 
        aria-hidden="true"
      />

      {/* Floating Metrics (Desktop only) */}
      <FloatingMetric delay={0.2} top="15%" left="5%" icon={<BookOpen size={20} />} value="6+" label="Publications" />
      <FloatingMetric delay={0.4} top="25%" right="5%" icon={<BrainCircuit size={20} />} value="XAI & HCI" label="Research Focus" />
      <FloatingMetric delay={0.6} bottom="20%" left="8%" icon={<ShieldCheck size={20} />} value="NST Fellow" label="National Grant Awarded" />

      {/* Center Content */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: 'center', maxWidth: '850px', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
      >
        <div style={{ display: 'inline-block', padding: '0.4rem 1.15rem', background: 'rgba(79, 111, 165, 0.08)', color: 'var(--accent-color)', borderRadius: '20px', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', fontWeight: 600, marginBottom: 'clamp(1.5rem, 3vw, 2.25rem)', letterSpacing: '0.04em' }}>
          RESEARCH-DRIVEN UX ENGINEER
        </div>
        
        <h1 style={{ fontSize: 'clamp(2.3rem, 7vw, 4.25rem)', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', lineHeight: 1.15, letterSpacing: '-0.025em', wordBreak: 'break-word' }}>
          {data.name}
        </h1>
        
        <h2 style={{ fontSize: 'clamp(1.1rem, 3.2vw, 1.65rem)', fontWeight: 400, color: 'var(--text-secondary)', marginBottom: 'clamp(1.25rem, 2.5vw, 1.75rem)', lineHeight: 1.35 }}>
          {data.title}
        </h2>
        
        <p style={{ fontSize: 'clamp(0.95rem, 2.2vw, 1.15rem)', color: 'var(--text-secondary)', maxWidth: '650px', marginBottom: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.65 }}>
          {data.mission} Bridging <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>UX engineering excellence</strong> with <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>academic depth.</strong>
        </p>
        
        <div className="hero-buttons flex justify-center" style={{ gap: '1rem', flexWrap: 'wrap', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <a href={`${import.meta.env.BASE_URL}assets/Nadia_Sultana_CV.pdf`} download="Nadia_Sultana_CV.pdf" className="btn btn-primary" aria-label="Download CV">
            <Download size={18} /> Download CV
          </a>
          <a href="#publications" className="btn btn-outline" style={{ background: 'var(--bg-color)' }} aria-label="View Academic Publications">
            <FileText size={18} /> Research Work
          </a>
        </div>
        
        <div className="flex justify-center" style={{ gap: 'clamp(0.85rem, 3.5vw, 1.75rem)', flexWrap: 'wrap', color: 'var(--text-secondary)' }}>
          <a href={data.github} target="_blank" rel="noopener noreferrer" className="nav-link" aria-label="GitHub Profile" title="GitHub" style={{ padding: '0.35rem' }}><Github size={22} /></a>
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="nav-link" aria-label="LinkedIn Profile" title="LinkedIn" style={{ padding: '0.35rem' }}><Linkedin size={22} /></a>
          <a href={`mailto:${data.email}`} className="nav-link" aria-label="Email" title="Email" style={{ padding: '0.35rem' }}><Mail size={22} /></a>
          <a href="https://scholar.google.com/citations?hl=en&user=T76v8o4AAAAJ" target="_blank" rel="noopener noreferrer" className="nav-link" aria-label="Google Scholar" title="Google Scholar" style={{ padding: '0.35rem' }}><GraduationCap size={22} /></a>
          <a href="https://www.researchgate.net/profile/Nadia-Sultana-14?ev=hdr_xprf" target="_blank" rel="noopener noreferrer" className="nav-link" aria-label="ResearchGate" title="ResearchGate" style={{ padding: '0.35rem' }}><Library size={22} /></a>
          <a href="https://orcid.org/0009-0003-3054-9432" target="_blank" rel="noopener noreferrer" className="nav-link" aria-label="ORCID" title="ORCID" style={{ padding: '0.35rem' }}><UserCircle size={22} /></a>
        </div>
      </motion.div>
    </section>
  );
}
