import React from 'react';
import { resumeData } from '../data/resume';
import Section from './Section';

const Research = () => {
    return (
        <Section id="research" title="Research">

            {/* Research Interests */}
            <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-6">Research Interests</h3>
                <div className="flex flex-wrap gap-3">
                    {resumeData.researchInterests.map((interest, idx) => (
                        <span
                            key={idx}
                            className="px-4 py-2 bg-slate-800 text-primary rounded-lg border border-slate-700 text-sm font-medium"
                        >
                            {interest}
                        </span>
                    ))}
                </div>
            </div>

            {/* Academic Thesis */}
            {resumeData.academicThesis && (
                <div>
                    <h3 className="text-xl font-bold text-white mb-6">Academic Thesis</h3>
                    <div className="space-y-8">
                        {resumeData.academicThesis.map((thesis, idx) => (
                            <div key={idx} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                                <h4 className="text-lg font-bold text-white mb-2">{thesis.title}</h4>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs font-bold px-2 py-1 bg-primary/10 text-primary rounded uppercase tracking-wider">
                                        {thesis.type}
                                    </span>
                                </div>
                                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                                    {thesis.description}
                                </p>
                                <p className="text-slate-500 text-sm">
                                    <span className="text-slate-400">Supervisor:</span> {thesis.supervisor}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </Section>
    );
};

export default Research;
