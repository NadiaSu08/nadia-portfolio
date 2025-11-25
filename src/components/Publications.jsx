import React from 'react';
import { resumeData } from '../data/resume';
import Section from './Section';

const Publications = () => {
    if (!resumeData.publications || resumeData.publications.length === 0) return null;

    return (
        <Section id="publications" title="Publications">
            <div className="space-y-6">
                {resumeData.publications.map((pub, idx) => (
                    <div key={idx} className="bg-slate-800/30 p-6 rounded-lg border-l-4 border-primary">
                        <h3 className="text-lg font-bold text-white mb-2">{pub.title}</h3>
                        <p className="text-slate-400 mb-2 italic">{pub.authors}</p>
                        <p className="text-slate-300 text-sm mb-2">
                            <span className="font-semibold text-primary">{pub.journal}</span>
                        </p>
                        <p className="text-slate-500 text-xs font-mono">{pub.details}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Publications;
