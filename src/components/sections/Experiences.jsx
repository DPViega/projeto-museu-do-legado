import React from 'react';
import { Eye, Ear, Hand } from 'lucide-react';
import { experiencesData } from '../../data/mock';

const ExperienceIcon = ({ type }) => {
    const icons = {
        'Visual': Eye,
        'Auditiva': Ear,
        'Tátil': Hand
    };
    const Icon = icons[type] || Eye;
    return <Icon size={48} />;
};

const Experiences = ({ onExperienceClick }) => {
    return (
        <section id="experiencias" className="section-padding-large bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="container-custom">
                <div className="text-center mb-16 fade-in-up">
                    <h2 className="section-title text-dark dark:text-white">{experiencesData.title}</h2>
                    <p className="body-text max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
                        {experiencesData.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {experiencesData.experiences.map((experience, index) => (
                        <div
                            key={experience.id}
                            className="relative rounded-2xl overflow-hidden shadow-xl card-hover cursor-pointer fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => onExperienceClick(experience)}
                        >
                            <div className="image-overlay" style={{ height: '400px' }}>
                                <img
                                    src={experience.image}
                                    alt={experience.title}
                                    className="w-full h-full object-cover"
                                />
                                <div
                                    className="absolute inset-0 z-10"
                                    style={{ backgroundColor: `${experience.color}99` }}
                                />
                            </div>
                            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-6">
                                <ExperienceIcon type={experience.title} />
                                <h3 className="text-3xl font-bold mt-4" style={{ fontFamily: 'var(--font-display)' }}>
                                    {experience.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { ExperienceIcon }; // Export for modal if needed, or keep local if only used here and in modal (which might need it too)
export default Experiences;
