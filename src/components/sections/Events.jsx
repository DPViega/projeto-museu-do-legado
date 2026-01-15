import React from 'react';
import { eventsData } from '../../data/mock';

const Events = () => {
    return (
        <section id="eventos" className="section-padding-large bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="container-custom">
                <div className="text-center mb-16 fade-in-up">
                    <h2 className="section-title text-dark dark:text-white">{eventsData.title}</h2>
                    <p className="body-text text-gray-600 dark:text-gray-300">{eventsData.subtitle}</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="timeline-line" />

                    {eventsData.events.map((event, index) => (
                        <div
                            key={event.id}
                            className={`relative mb-20 fade-in-up ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                                }`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                                <div className="flex-1">
                                    <div className="bg-white dark:bg-slate-700 rounded-xl shadow-lg overflow-hidden card-hover transition-colors">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-6">
                                            <div className="text-secondary dark:text-blue-300 text-sm font-semibold mb-2">
                                                {event.time} • {event.location}
                                            </div>
                                            <h3 className="text-xl font-bold text-dark dark:text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                                                {event.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{event.description}</p>
                                            <button className="text-primary dark:text-blue-400 font-semibold hover:underline text-sm">
                                                Saiba Mais →
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                                    <div className="timeline-dot">
                                        <div className="text-center">
                                            <div className="text-lg">{event.date}</div>
                                            <div className="text-xs">{event.month}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 fade-in-up">
                    <button className="btn-outlined">
                        Ver Agenda Completa
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Events;
