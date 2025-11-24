import React from 'react';
import { resumeData } from '../data/resume';
import Section from './Section';

const Contact = () => {
    return (
        <Section id="contact" title="Get in Touch">
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        I am currently open to new opportunities and collaborations.
                        Whether you have a question, a project idea, or just want to say hi,
                        feel free to reach out!
                    </p>

                    <div className="space-y-6">
                        <a
                            href={resumeData.socials.email}
                            className="flex items-center space-x-4 text-slate-300 hover:text-primary transition-colors group"
                        >
                            <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-primary/10 transition-colors border border-slate-700 group-hover:border-primary/50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="text-lg">{resumeData.socials.email.replace('mailto:', '')}</span>
                        </a>

                        {resumeData.socials.phone && (
                            <div className="flex items-center space-x-4 text-slate-300">
                                <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <span className="text-lg">{resumeData.socials.phone}</span>
                            </div>
                        )}

                        <div className="flex gap-4 pt-4">
                            {resumeData.socials.linkedin && (
                                <a
                                    href={resumeData.socials.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-[#0077b5] transition-all"
                                >
                                    LinkedIn
                                </a>
                            )}
                            {resumeData.socials.github && (
                                <a
                                    href={resumeData.socials.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-[#333] transition-all"
                                >
                                    GitHub
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Simple Contact Form Visual */}
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="Name" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                        <input type="email" placeholder="Email" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                    </div>
                    <input type="text" placeholder="Subject" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                    <textarea rows="4" placeholder="Message" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"></textarea>
                    <button className="w-full bg-primary text-darker font-bold py-3 rounded-lg hover:bg-white transition-colors">
                        Send Message
                    </button>
                </form>
            </div>
        </Section>
    );
};

export default Contact;
