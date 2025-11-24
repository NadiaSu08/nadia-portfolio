import React from 'react';
import { resumeData } from '../data/resume';
import Section from './Section';

const Achievements = () => {
    return (
        <Section id="achievements" title="Achievements">
            <div className="bg-slate-800/30 rounded-2xl p-8">
                <ul className="space-y-4">
                    {resumeData.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                            <span className="text-primary mr-3 mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <span className="text-slate-300">{achievement}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    );
};

export default Achievements;
