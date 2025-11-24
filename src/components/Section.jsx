import React from 'react';

const Section = ({ id, title, children, className = "" }) => {
    return (
        <section id={id} className={`py-16 md:py-24 border-b border-slate-800/50 ${className}`}>
            <div className="max-w-7xl mx-auto px-6">
                {title && (
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center">
                        <span className="w-2 h-8 bg-primary mr-4 rounded-sm"></span>
                        {title}
                    </h2>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
