import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { contactData } from '../../data/mock';
import { scrollToSection } from '../../utils/scrollUtils';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-900 text-dark dark:text-white py-12 transition-colors duration-300 border-t border-gray-100 dark:border-gray-800">
            <div className="container-custom">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Column 1 */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                            Museu dos Legados
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                            Preservando histórias geracionais através de experiências culturais imersivas.
                        </p>
                        <div className="flex space-x-3">
                            <button
                                onClick={() => window.open('https://www.instagram.com/museudolegado.rs', '_blank')}
                                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                            >
                                <Instagram size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
                        <ul className="space-y-2 text-sm">
                            {['sobre', 'colecoes', 'eventos', 'contato'].map((link) => (
                                <li key={link}>
                                    <button
                                        onClick={() => scrollToSection(link)}
                                        className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors"
                                    >
                                        {link.charAt(0).toUpperCase() + link.slice(1)}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Informações</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li>Horários de Funcionamento</li>
                            <li>Preços de Ingressos</li>
                            <li>Como Chegar</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 dark:border-gray-800 pt-8 text-center text-sm text-gray-500 dark:text-gray-600">
                    <p>Copyright © 2026 Museu dos Legados | Desenvolvido por GC Cultural</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
