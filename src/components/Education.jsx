import React from 'react';
import { resumeData } from '../data/resume';
import Section from './Section';

const Education = () => {
    return (
        <Section id="education" title="Education">
            <div className="grid gap-8">
                {resumeData.education.map((edu) => (
                    <div key={edu.id} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-primary/50 transition-colors">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                                <p className="text-lg text-primary">{edu.institution}</p>
                            </div>
                            <div className="text-right mt-2 md:mt-0">
                                <span className="block text-slate-400 font-mono text-sm">{edu.period}</span>
                                {edu.gpa && <span className="block text-slate-500 text-sm mt-1">GPA: {edu.gpa}</span>}
                            </div>
                        </div>

                        {/* If there were thesis details here, we could add them, but they are in a separate section now */}
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Education;
