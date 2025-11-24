import React from 'react';
import { resumeData } from '../data/resume';

const Hero = () => {
    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Minimal Background */}
            <div className="absolute inset-0 bg-darker">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-sm mb-4">
                        Hello, I am
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-none">
                        {resumeData.name.split(' ')[0]} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">
                            {resumeData.name.split(' ')[1]}
                        </span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-slate-400 font-light">
                        {resumeData.title}
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-lg border-l-2 border-primary pl-6">
                        {resumeData.summary}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-primary text-darker font-bold rounded hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 border border-slate-700 text-white font-medium rounded hover:border-primary hover:text-primary transition-all duration-300"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="flex gap-6 pt-8">
                        {Object.entries(resumeData.socials).map(([key, value]) => (
                            <a
                                key={key}
                                href={value}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-500 hover:text-primary transition-colors"
                                aria-label={key}
                            >
                                <span className="capitalize font-mono text-xs border-b border-transparent hover:border-primary">{key}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Minimal Hero Visual - UX Wireframe & Medical AI */}
                <div className="relative hidden md:block h-[500px] w-full">
                    <div className="relative w-full h-full flex items-center justify-center">

                        {/* 1. Medical AI: Clean Rotating DNA/Neural Helix */}
                        <div className="absolute right-10 top-10 w-64 h-64 opacity-80 animate-[spin_40s_linear_infinite]">
                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                <defs>
                                    <linearGradient id="gradHelix" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#ccff00" stopOpacity="0.1" />
                                        <stop offset="50%" stopColor="#ccff00" stopOpacity="0.8" />
                                        <stop offset="100%" stopColor="#ccff00" stopOpacity="0.1" />
                                    </linearGradient>
                                </defs>
                                <path d="M60,20 Q140,60 60,100 T60,180" fill="none" stroke="url(#gradHelix)" strokeWidth="2" />
                                <path d="M140,20 Q60,60 140,100 T140,180" fill="none" stroke="url(#gradHelix)" strokeWidth="2" />

                                {/* Nodes */}
                                <circle cx="60" cy="20" r="2" fill="#ccff00" /> <circle cx="140" cy="20" r="2" fill="#ccff00" />
                                <line x1="60" y1="20" x2="140" y2="20" stroke="#ccff00" strokeWidth="1" opacity="0.2" />

                                <circle cx="100" cy="60" r="2" fill="#ccff00" />
                                <circle cx="60" cy="100" r="2" fill="#ccff00" /> <circle cx="140" cy="100" r="2" fill="#ccff00" />
                                <line x1="60" y1="100" x2="140" y2="100" stroke="#ccff00" strokeWidth="1" opacity="0.2" />

                                <circle cx="100" cy="140" r="2" fill="#ccff00" />
                                <circle cx="60" cy="180" r="2" fill="#ccff00" /> <circle cx="140" cy="180" r="2" fill="#ccff00" />
                                <line x1="60" y1="180" x2="140" y2="180" stroke="#ccff00" strokeWidth="1" opacity="0.2" />
                            </svg>
                        </div>

                        {/* 2. UX Wireframe: Clean Floating Interface */}
                        <div className="absolute left-0 bottom-20 w-64 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                            <div className="flex justify-between items-center mb-4">
                                <div className="w-16 h-2 bg-slate-700 rounded"></div>
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
                                </div>
                            </div>
                            {/* Wireframe Elements */}
                            <div className="grid grid-cols-2 gap-2 mb-3">
                                <div className="h-16 border border-dashed border-slate-600 rounded bg-slate-800/50 flex items-center justify-center">
                                    <div className="w-6 h-6 rounded-full border border-slate-600"></div>
                                </div>
                                <div className="h-16 border border-dashed border-slate-600 rounded bg-slate-800/50 flex items-center justify-center">
                                    <div className="w-6 h-6 rounded-full border border-slate-600"></div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 bg-slate-700 rounded w-3/4"></div>
                                <div className="h-2 bg-slate-700 rounded w-1/2"></div>
                            </div>
                            {/* Active Element Highlight */}
                            <div className="absolute -right-2 top-10 w-4 h-4 bg-primary rounded-full animate-ping opacity-75"></div>
                            <div className="absolute -right-2 top-10 w-4 h-4 bg-primary rounded-full"></div>
                        </div>

                        {/* Connecting Line */}
                        <svg className="absolute inset-0 pointer-events-none w-full h-full">
                            <path d="M100,350 Q200,250 350,100" fill="none" stroke="#ccff00" strokeWidth="1" strokeDasharray="4 4" className="opacity-10" />
                        </svg>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
