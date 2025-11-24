import React from 'react';
import { resumeData } from '../data/resume';
import Section from './Section';

const Projects = () => {
    return (
        <Section id="projects" title="Projects">
            <div className="grid gap-6 md:grid-cols-2">
                {resumeData.projects.map((project) => (
                    <div key={project.id} className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-primary transition-all duration-300 hover:-translate-y-1">
                        <div className="p-6 h-full flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-white"
                                    aria-label="View Project"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>

                            <p className="text-slate-400 mb-6 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs font-mono px-2 py-1 rounded bg-slate-900 text-primary border border-slate-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
