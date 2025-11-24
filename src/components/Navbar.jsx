import React, { useState, useEffect } from 'react';
import { resumeData } from '../data/resume';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'education', label: 'Education' },
        { id: 'skills', label: 'Skills' },
        { id: 'publications', label: 'Publications' },
        { id: 'research', label: 'Research' },
        { id: 'achievements', label: 'Achievements' },
        { id: 'projects', label: 'Projects' },
        { id: 'volunteer', label: 'Volunteer' },
        { id: 'training', label: 'Training' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-white tracking-tighter group">
                    <span className="text-primary group-hover:text-white transition-colors">&lt;</span>
                    {resumeData.name.split(' ')[0]}
                    <span className="text-primary group-hover:text-white transition-colors">/&gt;</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.slice(0, 6).map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="text-sm font-medium text-slate-300 hover:text-primary transition-colors relative group"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                    <a
                        href="#"
                        className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-darker transition-all duration-300 font-medium text-sm flex items-center gap-2"
                        onClick={(e) => { e.preventDefault(); alert("CV Download Placeholder"); }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download CV
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-dark/95 backdrop-blur-xl z-40 transform transition-transform duration-300 md:hidden flex flex-col items-center justify-center space-y-8 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="text-2xl font-bold text-white hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        {item.label}
                    </a>
                ))}
                <a
                    href="#"
                    className="px-8 py-3 rounded-full bg-primary text-darker font-bold text-lg"
                    onClick={(e) => { e.preventDefault(); alert("CV Download Placeholder"); setIsOpen(false); }}
                >
                    Download CV
                </a>
                <button
                    className="absolute top-6 right-6 text-white"
                    onClick={() => setIsOpen(false)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
