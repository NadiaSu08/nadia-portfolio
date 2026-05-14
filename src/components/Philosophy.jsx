import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, HeartHandshake, Microscope } from 'lucide-react';

export default function Philosophy() {
  const principles = [
    {
      title: "Explainable & Interpretable AI",
      desc: "Black-box models create mistrust. My work focuses on inherently explainable architectures that build user confidence, especially in critical healthcare applications.",
      icon: <Lightbulb size={26} />
    },
    {
      title: "UX & Human-Centered Design",
      desc: "Leveraging my UX engineering background to shape intelligent systems around accessibility, user capabilities, and the tangible needs of the people using them.",
      icon: <HeartHandshake size={26} />
    },
    {
      title: "Scalable Systems & Impact",
      desc: "Translating sophisticated machine learning paradigms into scalable, accessible engineering solutions that responsibly assist professionals in real-world environments.",
      icon: <Microscope size={26} />
    }
  ]

  return (
    <section id="philosophy" className="section container">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <h2 className="section-title">Engineering & Research Philosophy</h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
            Bridging the gap between <strong>complex machine learning methodologies</strong> and <strong>accessible human interaction</strong> to create responsible, interpretable solutions.
          </p>
        </div>

        <div style={{ gap: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {principles.map((p, idx) => (
             <motion.div 
               key={idx} 
               className="card flex flex-col" 
               whileHover={{ y: -6 }}
               style={{ borderTop: '4px solid var(--accent-color)', height: '100%' }}
             >
               <div style={{ backgroundColor: 'rgba(79, 111, 165, 0.1)', padding: '1.15rem', borderRadius: '50%', display: 'inline-flex', alignSelf: 'flex-start', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>
                 {p.icon}
               </div>
               <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '1rem' }}>{p.title}</h3>
               <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>{p.desc}</p>
             </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
