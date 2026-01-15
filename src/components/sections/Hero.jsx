import React from 'react';
import { heroData } from '../../data/mock';
import { scrollToSection } from '../../utils/scrollUtils';

const Hero = () => {
    return (
        <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${heroData.backgroundImage})`,
                    backgroundAttachment: 'fixed'
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-purple-800/70 to-blue-900/80" />

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto fade-in-up">
                <h1 className="hero-title text-white mb-6">
                    {heroData.title}
                </h1>
                <p className="subtitle text-white/90 mb-12 max-w-3xl mx-auto">
                    {heroData.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onClick={() => scrollToSection('sobre')} className="btn-primary">
                        Explore o Museu
                    </button>
                    <button onClick={() => scrollToSection('contato')} className="btn-secondary">
                        Compre Ingressos
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-white rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
