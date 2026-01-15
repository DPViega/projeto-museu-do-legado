import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Moon, Sun } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollUtils';

const Header = ({ headerScrolled, theme, toggleTheme }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('inicio');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['inicio', 'sobre', 'experiencias', 'colecoes', 'eventos', 'instagram', 'contato'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (section) => {
        scrollToSection(section);
        setMobileMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 header-glass ${headerScrolled ? 'header-scrolled' : ''}`}>
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src="/logo.png"
                            alt="Museu dos Legados"
                            className="h-14 w-auto object-contain hover:opacity-90 transition-opacity"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {['inicio', 'sobre', 'experiencias', 'colecoes', 'eventos', 'contato'].map((section) => (
                            <button
                                key={section}
                                onClick={() => handleNavClick(section)}
                                className={`nav-link transition-colors ${activeSection === section ? 'text-primary' : 'text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary'
                                    }`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </button>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
                        >
                            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                        </button>

                        {/* Instagram Button */}
                        <button
                            onClick={() => window.open('https://www.instagram.com/museudolegado.rs', '_blank')}
                            className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white hover:scale-110 transition-transform instagram-pulse"
                        >
                            <Instagram size={24} />
                        </button>
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-gray-700 dark:text-gray-200 transition-colors"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 absolute top-20 left-0 right-0 shadow-lg fade-in-up">
                    <nav className="flex flex-col p-4 space-y-4">
                        {['inicio', 'sobre', 'experiencias', 'colecoes', 'eventos', 'contato'].map((section) => (
                            <button
                                key={section}
                                onClick={() => handleNavClick(section)}
                                className="nav-link text-left py-2 text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-colors"
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </button>
                        ))}

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-slate-800">
                            <button
                                onClick={() => window.open('https://www.instagram.com/museudolegado.rs', '_blank')}
                                className="flex items-center space-x-2 py-2 text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-colors"
                            >
                                <Instagram size={20} />
                                <span className="nav-link">Instagram</span>
                            </button>

                            <button
                                onClick={() => {
                                    toggleTheme();
                                    setMobileMenuOpen(false);
                                }}
                                className="flex items-center space-x-2 py-2 text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-colors"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                                <span className="nav-link">{theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}</span>
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
