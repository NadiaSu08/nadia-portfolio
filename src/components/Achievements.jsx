import React from 'react';
import { resumeData } from '../data/resume';
import Section from './Section';

const Achievements = () => {
    return (
        <Section id="achievements" title="Achievements">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resumeData.achievements.map((achievement, idx) => (
                    <div key={idx} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/50 hover:border-primary/30 transition-all duration-300 group">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </div>
                        <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors">
                            {achievement}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Achievements;
