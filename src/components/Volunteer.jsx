import React from 'react';
import { resumeData } from '../data/resume';
import Section from './Section';

const Volunteer = () => {
    return (
        <Section id="volunteer" title="Volunteer Activities">
            <div className="space-y-8">
                {resumeData.volunteer.map((vol, idx) => (
                    <div key={idx} className="relative pl-8 border-l border-slate-700">
                        <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-slate-600 ring-4 ring-slate-900"></span>

                        <h3 className="text-lg font-bold text-white">{vol.role}</h3>
                        <div className="text-primary text-sm mb-1">{vol.organization}</div>
                        <div className="text-slate-500 text-xs font-mono mb-3 uppercase tracking-wide">{vol.period}</div>
                        <p className="text-slate-400 text-sm">
                            {vol.details}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Volunteer;
