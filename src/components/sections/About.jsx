import React from 'react';
import { Clock, Eye } from 'lucide-react';
import { aboutData } from '../../data/mock';

const About = () => {
    return (
        <section id="sobre" className="section-padding-large bg-light dark:bg-slate-800 transition-colors duration-300">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="slide-in-left">
                        <div className="image-overlay rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={aboutData.image}
                                alt="Museu do Legado"
                                className="w-full h-full object-cover"
                                style={{ minHeight: '500px' }}
                            />
                        </div>
                    </div>

                    <div className="slide-in-right">
                        <h2 className="section-title text-dark dark:text-white">{aboutData.title}</h2>
                        {aboutData.description.map((paragraph, index) => (
                            <p key={index} className="body-text mb-4 dark:text-gray-300">
                                {paragraph}
                            </p>
                        ))}

                        {/* Stats Cards */}
                        <div className="grid grid-cols-3 gap-4 mt-8">
                            {aboutData.stats.map((stat, index) => (
                                <div key={index} className="text-center p-4 bg-white dark:bg-slate-700 rounded-lg shadow-md card-hover transition-colors">
                                    <div className="text-primary dark:text-blue-400 mb-2">
                                        {stat.icon === 'history' && <Clock size={32} className="mx-auto" />}
                                        {stat.icon === 'target' && <Eye size={32} className="mx-auto" />}
                                        {stat.icon === 'eye' && <Eye size={32} className="mx-auto" />}
                                    </div>
                                    <h4 className="font-bold text-sm text-dark dark:text-white mb-1" style={{ fontFamily: 'var(--font-body)' }}>
                                        {stat.title}
                                    </h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-300">{stat.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Counter Stats */}
                        <div className="flex justify-around mt-8 p-6 bg-white dark:bg-slate-700 rounded-xl shadow-lg transition-colors">
                            {aboutData.counters.map((counter, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-4xl font-bold text-primary dark:text-blue-400" style={{ fontFamily: 'var(--font-display)' }}>
                                        {counter.number}{counter.suffix}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{counter.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
