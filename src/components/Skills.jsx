import React from 'react';
import { resumeData } from '../data/resume';
import Section from './Section';

const Skills = () => {
    return (
        <Section id="skills" title="Technical Skills">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {Object.entries(resumeData.skills).map(([category, items], index) => (
                    <div
                        key={category}
                        className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-1 group"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-8 bg-primary rounded-full group-hover:h-10 transition-all duration-300"></div>
                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{category}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {items.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 bg-slate-900/50 text-slate-300 rounded-lg text-sm font-medium border border-slate-700/50 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300 cursor-default"
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
