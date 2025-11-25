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
                        {resumeData.title || "UX Engineer & Researcher"}
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
                </div>

                {/* Creative Hero Visual - Terminal Booting Interface */}
                <div className="relative hidden md:block h-[600px] w-full">
                    <div className="relative w-full h-full flex items-center justify-center">

                        {/* Main Terminal Window */}
                        <div className="relative z-20 w-full max-w-md bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-lg shadow-2xl overflow-hidden font-mono text-sm">
                            {/* Terminal Header */}
                            <div className="bg-slate-800/50 px-4 py-2 border-b border-slate-700 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="ml-2 text-slate-400 text-xs">nadia@hci-lab</div>
                            </div>

                            {/* Terminal Content */}
                            <div className="p-6 space-y-4 text-slate-300">
                                <div className="flex items-center gap-2">
                                    <span className="text-primary">➜</span>
                                    <span className="text-white">booting interface...</span>
                                </div>

                                <div className="space-y-2 pl-4 border-l border-slate-700/50">
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-400">[ OK ]</span>
                                        <span>Loaded: Human-Centered Design Systems</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-400">[ OK ]</span>
                                        <span>Activated: Neural Network Research</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-400">[ OK ]</span>
                                        <span>Running: UX Engineering Mode</span>
                                    </div>
                                </div>

                                <div className="pt-4 space-y-2">
                                    <div className="grid grid-cols-[80px_1fr] gap-2">
                                        <span className="text-slate-500">User:</span>
                                        <span className="text-white font-bold">Nadia Sultana</span>
                                    </div>
                                    <div className="grid grid-cols-[80px_1fr] gap-2">
                                        <span className="text-slate-500">Role:</span>
                                        <span className="text-primary">UX Engineer × AI/ML Researcher</span>
                                    </div>
                                    <div className="grid grid-cols-[80px_1fr] gap-2">
                                        <span className="text-slate-500">Focus:</span>
                                        <span>Designing experiences for intelligent systems</span>
                                    </div>
                                </div>

                                <div className="pt-2 animate-pulse">
                                    <span className="text-primary">{'>'}{'>'}</span> <span className="w-2 h-4 bg-primary inline-block align-middle"></span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Element 1: TensorFlow Code (Behind/Right) */}
                        <div className="absolute -right-4 top-20 w-64 bg-slate-900/80 backdrop-blur border border-slate-700/50 rounded-lg p-4 shadow-xl transform rotate-6 opacity-60 hover:opacity-100 transition-opacity z-10">
                            <div className="font-mono text-[10px] space-y-1 text-slate-400">
                                <div className="text-purple-400">import <span className="text-white">tensorflow</span> as <span className="text-white">tf</span></div>
                                <div className="text-blue-400">model <span className="text-white">=</span> tf.keras.Sequential([</div>
                                <div className="pl-2 text-green-400">tf.keras.layers.Dense(128),</div>
                                <div className="pl-2 text-green-400">tf.keras.layers.Dropout(0.2),</div>
                                <div className="text-white">])</div>
                            </div>
                        </div>

                        {/* Floating Element 2: Wireframe (Behind/Left) */}
                        <div className="absolute -left-4 bottom-20 w-64 bg-slate-800/80 backdrop-blur border border-slate-600/50 rounded-lg p-3 shadow-xl transform -rotate-6 opacity-60 hover:opacity-100 transition-opacity z-10">
                            <div className="flex gap-2 mb-2">
                                <div className="w-1/4 h-16 bg-slate-700/50 rounded"></div>
                                <div className="w-3/4 space-y-2">
                                    <div className="h-4 bg-slate-700/50 rounded w-full"></div>
                                    <div className="h-8 bg-slate-700/30 rounded w-full border border-dashed border-slate-600"></div>
                                </div>
                            </div>
                        </div>

                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-primary/5 blur-3xl -z-10 rounded-full"></div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
