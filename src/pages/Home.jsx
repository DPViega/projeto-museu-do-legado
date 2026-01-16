import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experiences from '../components/sections/Experiences';
import Collections from '../components/sections/Collections';
import Events from '../components/sections/Events';
import InstagramSection from '../components/sections/Instagram';
import PracticalInfo from '../components/sections/PracticalInfo';
import ExperienceModal from '../components/ExperienceModal';
import Lightbox from '../components/Lightbox';
import '../styles/museulegado.css';

const Home = () => {
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [lightboxImage, setLightboxImage] = useState(null);
    const [headerScrolled, setHeaderScrolled] = useState(false);

    // Theme State
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'light';
        }
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    // Scroll animation observer
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-up, .fade-in, .slide-in-left, .slide-in-right').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Header scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setHeaderScrolled(prev => prev !== isScrolled ? isScrolled : prev);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-slate-900">
            <Header
                headerScrolled={headerScrolled}
                theme={theme}
                toggleTheme={toggleTheme}
            />

            <main>
                <Hero />
                <About />
                <Experiences onExperienceClick={setSelectedExperience} />
                <Collections onArtworkClick={setLightboxImage} />
                <Events />
                <InstagramSection />
                <PracticalInfo />
            </main>

            <Footer />

            <ExperienceModal
                experience={selectedExperience}
                onClose={() => setSelectedExperience(null)}
            />

            <Lightbox
                image={lightboxImage}
                onClose={() => setLightboxImage(null)}
            />
        </div>
    );
};

export default Home;
