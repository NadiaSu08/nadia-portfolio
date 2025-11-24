import React from 'react';
import { resumeData } from '../data/resume';
import Section from './Section';

const Skills = () => {
    return (
        <Section id="skills" title="Skills">
            <div className="grid gap-8 md:grid-cols-2">
                {Object.entries(resumeData.skills).map(([category, items]) => (
                    <div key={category}>
                        <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700 hover:border-primary/50 hover:text-primary transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
