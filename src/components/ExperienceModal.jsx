import React from 'react';
import { X } from 'lucide-react';
import { ExperienceIcon } from './sections/Experiences';

const ExperienceModal = ({ experience, onClose }) => {
    if (!experience) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-30 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                    >
                        <X size={24} />
                    </button>

                    <div className="relative h-64 overflow-hidden rounded-t-xl">
                        <img
                            src={experience.image}
                            alt={experience.title}
                            className="w-full h-full object-cover"
                        />
                        <div
                            className="absolute inset-0"
                            style={{ backgroundColor: `${experience.color}99` }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-white">
                            <div className="text-center">
                                <ExperienceIcon type={experience.title} />
                                <h3 className="text-3xl font-bold mt-4" style={{ fontFamily: 'var(--font-display)' }}>
                                    Experiência {experience.title}
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <p className="body-text text-gray-700 leading-relaxed">
                            {experience.description}
                        </p>
                        <button
                            onClick={onClose}
                            className="btn-primary mt-6 w-full"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceModal;
