import React from 'react';
import { Clock, Ticket, MapPin, Info } from 'lucide-react';
import { practicalInfoData } from '../../data/mock';

const PracticalInfo = () => {
    return (
        <section id="informacoes" className="section-padding-large bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="container-custom">
                <div className="text-center mb-12 fade-in-up">
                    <h2 className="section-title text-dark dark:text-white">{practicalInfoData.title}</h2>
                </div>

                <div className="grid md:grid-cols-4 gap-6 mb-12">
                    {practicalInfoData.info.map((item, index) => (
                        <div key={index} className="bg-light dark:bg-slate-800 rounded-xl p-6 text-center card-hover fade-in-up transition-colors" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="text-primary dark:text-blue-400 mb-4 flex justify-center">
                                {item.icon === 'clock' && <Clock size={40} />}
                                {item.icon === 'ticket' && <Ticket size={40} />}
                                {item.icon === 'map-pin' && <MapPin size={40} />}
                                {item.icon === 'info' && <Info size={40} />}
                            </div>
                            <h3 className="text-xl font-bold text-dark dark:text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                                {item.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line text-sm">{item.content}</p>
                        </div>
                    ))}
                </div>

                {/* Map */}
                <div className="fade-in-up">
                    <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ height: '400px' }}>
                        <iframe
                            src={practicalInfoData.mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="Localização do Museu"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PracticalInfo;
