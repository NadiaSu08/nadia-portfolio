import React, { useState } from 'react';
import { Menu, X, GraduationCap, Library, UserCircle } from 'lucide-react';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Training from './components/Training';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Leadership from './components/Leadership';
import Contact from './components/Contact';

// Using JSON directly
import cvData from './data/cvData.json';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const data = cvData;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const NavLinks = ({ onClick }) => (
    <>
      <li><a href="#publications" onClick={onClick} className="nav-link">Research</a></li>
      <li><a href="#experience" onClick={onClick} className="nav-link">Experience</a></li>
      <li><a href="#projects" onClick={onClick} className="nav-link">Projects</a></li>
      <li><a href="#achievements" onClick={onClick} className="nav-link">Awards</a></li>
      <li><a href="#contact" onClick={onClick} className="nav-link">Contact</a></li>
    </>
  );

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to Navigation</a>
      
      <header style={{ position: 'sticky', top: 0, zIndex: 100 }}>
        <nav aria-label="Main Navigation" style={{ padding: '1.25rem 0', background: 'rgba(250, 250, 248, 0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container flex justify-between items-center" style={{ position: 'relative' }}>
            <div style={{ fontWeight: 700, fontSize: '1.35rem', color: 'var(--accent-color)', letterSpacing: '0.02em' }}>
              N. Sultana
            </div>
            
            {/* Desktop Menu */}
            <ul className="flex items-center mobile-hidden" style={{ gap: '3rem' }}>
              <NavLinks />
            </ul>

            {/* Mobile Nav Toggle */}
            <button 
              className="desktop-hidden" 
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-label="Toggle Navigation Menu"
              style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            
            {/* Mobile Menu Dropdown */}
            {menuOpen && (
              <div className="mobile-menu desktop-hidden">
                <ul className="flex flex-col items-center gap-5">
                  <NavLinks onClick={() => setMenuOpen(false)} />
                </ul>
              </div>
            )}
          </div>
        </nav>
      </header>

      <main id="main-content">
        <Hero data={data.personal} />
        <Philosophy />
        <Publications data={data.publications} interests={data.researchInterests} />
        <Education data={data.education} />
        <Experience data={data.experience} />
        <Projects data={data.projects} />
        <Training data={data.training} />
        <Achievements data={data.achievements} />
        <Skills data={data.skills} />
        <Leadership data={data.leadership} />
        <Contact personal={data.personal} />
      </main>
      
      <footer role="contentinfo" style={{ padding: '4rem 0 2rem 0', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <div style={{ maxWidth: '400px', margin: '0 auto', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
          <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Nadia Sultana</p>
          <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Built with curiosity, research, and human-centered AI.</p>
          <a href={`${import.meta.env.BASE_URL}assets/Nadia_Sultana_CV.pdf`} download="Nadia_Sultana_CV.pdf" style={{ fontSize: '0.9rem', color: 'var(--accent-color)', fontWeight: 600, textDecoration: 'none', display: 'inline-block', borderBottom: '1px solid var(--accent-color)' }} aria-label="Download Curriculum Vitae (PDF Document)">
            Download Resume
          </a>
          <div className="flex justify-center" style={{ gap: '1.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
             <a href="https://scholar.google.com/citations?hl=en&user=T76v8o4AAAAJ" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar" className="nav-link" title="Google Scholar" style={{color: 'inherit', transition: 'color 0.2s ease'}}><GraduationCap size={20} /></a>
             <a href="https://www.researchgate.net/profile/Nadia-Sultana-14?ev=hdr_xprf" target="_blank" rel="noopener noreferrer" aria-label="ResearchGate" className="nav-link" title="ResearchGate" style={{color: 'inherit', transition: 'color 0.2s ease'}}><Library size={20} /></a>
             <a href="https://orcid.org/0009-0003-3054-9432" target="_blank" rel="noopener noreferrer" aria-label="ORCID" className="nav-link" title="ORCID" style={{color: 'inherit', transition: 'color 0.2s ease'}}><UserCircle size={20} /></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
