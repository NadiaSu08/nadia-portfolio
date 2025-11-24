import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Research from './components/Research';
import Volunteer from './components/Volunteer';
import Achievements from './components/Achievements';
import Training from './components/Training';
import Contact from './components/Contact';

function App() {
    return (
        <div className="bg-darker min-h-screen text-slate-200 selection:bg-primary selection:text-darker font-sans">
            <Navbar />

            <main className="relative z-0">
                <Hero />

                <div className="max-w-6xl mx-auto px-6 space-y-24 pb-24">
                    <Experience />
                    <Education />
                    <Skills />
                    <Publications />
                    <Research />
                    <Achievements />
                    <Projects />
                    <Volunteer />
                    <Training />
                    <Contact />
                </div>

                <footer className="py-12 text-center border-t border-slate-800 bg-dark">
                    <div className="text-slate-500 text-sm">
                        <p className="mb-2">Designed & Built by {import.meta.env.VITE_APP_NAME || 'Nadia Sultana'}</p>
                        <p>© {new Date().getFullYear()} All rights reserved.</p>
                    </div>
                </footer>
            </main>
        </div>
    );
}

export default App;
