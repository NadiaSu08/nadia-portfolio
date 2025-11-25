import React from 'react';
import { resumeData } from '../data/resume';
import Section from './Section';

const Training = () => {
    if (!resumeData.training || resumeData.training.length === 0) return null;

    return (
        <Section id="training" title="Training & Certifications">
            <div className="grid gap-4 md:grid-cols-2">
                {resumeData.training.map((item, idx) => (
                    <div key={idx} className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex items-center">
                        <div className="bg-primary/10 p-2 rounded-full mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <span className="text-slate-300 text-sm font-medium">{item}</span>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Training;
