import React from 'react';
import { resumeData } from '../data/resume';
import Section from './Section';

const Experience = () => {
    return (
        <Section id="experience" title="Experience">
            <div className="space-y-12">
                {resumeData.experience.map((exp) => (
                    <div key={exp.id} className="relative border-l-2 border-slate-800 pl-8 pb-2">
                        <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-darker"></span>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                            <span className="text-sm text-primary font-mono mt-1 sm:mt-0">{exp.period}</span>
                        </div>

                        <div className="mb-4">
                            <span className="text-lg text-slate-300 font-medium">{exp.company}</span>
                            {exp.location && <span className="text-slate-500 ml-2">• {exp.location}</span>}
                        </div>

                        <p className="text-slate-400 mb-4">{exp.description}</p>

                        {exp.highlights && (
                            <ul className="list-disc list-outside ml-4 space-y-2 text-slate-400">
                                {exp.highlights.map((highlight, idx) => (
                                    <li key={idx}>{highlight}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
