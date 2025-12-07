import React from 'react';
import { resumeData } from '../data/resume';
import Section from './Section';

const Contact = () => {
    return (
        <Section id="contact" title="Get in Touch">
            <div className="max-w-4xl mx-auto text-left">
                <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-2xl">
                    I am currently open to new opportunities and collaborations.
                    Whether you have a question, a project idea, or just want to say hi,
                    feel free to reach out!
                </p>

                <div className="flex flex-col gap-6">
                    {/* Email Card - Full Width */}
                    <a
                        href={resumeData.socials.email}
                        className="flex items-center justify-center md:justify-start space-x-4 text-slate-300 hover:text-primary transition-colors group bg-slate-800/50 px-6 py-6 rounded-2xl border border-slate-700 hover:border-primary/50 w-full"
                    >
                        <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-primary/10 transition-colors border border-slate-700 group-hover:border-primary/50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <span className="text-base md:text-lg font-medium break-all">{resumeData.socials.email.replace('mailto:', '')}</span>
                    </a>

                    {/* Social Links - Responsive Grid: 3 cols top, 2 cols bottom */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {resumeData.socials.linkedin && (
                            <a
                                href={resumeData.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-4 bg-slate-800/50 text-white rounded-2xl border border-slate-700 hover:border-[#0077b5] hover:text-[#0077b5] transition-all flex items-center justify-center gap-3"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                <span className="text-sm font-medium">LinkedIn</span>
                            </a>
                        )}
                        {resumeData.socials.github && (
                            <a
                                href={resumeData.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-4 bg-slate-800/50 text-white rounded-2xl border border-slate-700 hover:border-white transition-all flex items-center justify-center gap-3"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                <span className="text-sm font-medium">GitHub</span>
                            </a>
                        )}
                        {resumeData.socials.googleScholar && (
                            <a
                                href={resumeData.socials.googleScholar}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-4 bg-slate-800/50 text-white rounded-2xl border border-slate-700 hover:border-blue-400 hover:text-blue-400 transition-all flex items-center justify-center gap-3"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" /></svg>
                                <span className="text-sm font-medium">Scholar</span>
                            </a>
                        )}
                        {resumeData.socials.researchGate && (
                            <a
                                href={resumeData.socials.researchGate}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-4 bg-slate-800/50 text-white rounded-2xl border border-slate-700 hover:border-[#00D0B5] hover:text-[#00D0B5] transition-all flex items-center justify-center gap-3"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82a10.9 10.9 0 0 0-.043-1.207 6.61 6.61 0 0 0-.177-.929c-.236-.735-.606-1.26-1.175-1.65-.57-.39-1.305-.604-2.105-.604zm-9.77 0c-.147 0-.291.014-.434.043-.14.028-.277.073-.411.134-.27.12-.525.292-.764.51-.24.22-.45.48-.63.773-.18.293-.317.619-.41.975a4.326 4.326 0 0 0-.097.76 6.354 6.354 0 0 0-.014.415c0 .14.005.28.014.415.01.27.035.527.097.76.093.356.23.682.41.975.18.293.39.554.63.773.24.218.495.39.764.51.134.061.27.106.411.134.143.029.287.043.434.043.146 0 .29-.014.433-.043.142-.028.278-.073.412-.134.269-.12.524-.292.764-.51.239-.22.45-.48.63-.773.18-.293.316-.619.41-.975a4.326 4.326 0 0 0 .096-.76c.01-.135.015-.275.015-.415s-.005-.28-.015-.415a4.326 4.326 0 0 0-.096-.76c-.094-.356-.23-.682-.41-.975a3.652 3.652 0 0 0-.63-.773 3.652 3.652 0 0 0-.764-.51 2.417 2.417 0 0 0-.412-.134 2.417 2.417 0 0 0-.433-.043zm9.77 4.873c.313 0 .6.063.867.19.265.126.49.31.67.554.18.244.317.54.41.888.093.348.14.748.14 1.2v.82c0 .452-.047.852-.14 1.2a2.476 2.476 0 0 1-.41.888c-.18.244-.405.428-.67.554a1.766 1.766 0 0 1-.867.19c-.313 0-.6-.063-.867-.19a1.978 1.978 0 0 1-.67-.554 2.476 2.476 0 0 1-.41-.888c-.093-.348-.14-.748-.14-1.2v-.82c0-.452.047-.852.14-1.2.093-.348.23-.644.41-.888.18-.244.405-.428.67-.554.267-.127.554-.19.867-.19zm-9.77 0c.313 0 .6.063.867.19.265.126.49.31.67.554.18.244.317.54.41.888.093.348.14.748.14 1.2v.82c0 .452-.047.852-.14 1.2a2.476 2.476 0 0 1-.41.888c-.18.244-.405.428-.67.554a1.766 1.766 0 0 1-.867.19c-.313 0-.6-.063-.867-.19a1.978 1.978 0 0 1-.67-.554 2.476 2.476 0 0 1-.41-.888c-.093-.348-.14-.748-.14-1.2v-.82c0-.452.047-.852.14-1.2.093-.348.23-.644.41-.888.18-.244.405-.428.67-.554.267-.127.554-.19.867-.19z" /></svg>
                                <span className="text-sm font-medium">ResearchGate</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
