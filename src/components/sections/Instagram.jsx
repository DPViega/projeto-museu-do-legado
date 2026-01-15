import React from 'react';
import { Instagram } from 'lucide-react';
import { instagramData } from '../../data/mock';

const InstagramSection = () => {
    return (
        <section id="instagram" className="section-padding-large transition-colors duration-300" style={{ backgroundColor: 'var(--color-bg-instagram)' }}>
            <div className="container-custom">
                <div className="text-center mb-12 fade-in-up">
                    <h2 className="section-title text-dark dark:text-white">Siga-nos no Instagram</h2>
                    <p className="text-2xl font-semibold text-primary mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                        {instagramData.handle}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">{instagramData.followers} seguidores</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 fade-in-up">
                    {instagramData.posts.map((post) => (
                        <div
                            key={post.id}
                            className="image-overlay rounded-lg overflow-hidden shadow-lg cursor-pointer"
                            onClick={() => window.open('https://instagram.com', '_blank')}
                        >
                            <img
                                src={post.image}
                                alt={post.caption}
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                <div className="text-white text-center">
                                    <Instagram size={32} className="mx-auto mb-2" />
                                    <p className="text-sm">{post.likes} curtidas</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center fade-in-up">
                    <button
                        onClick={() => window.open('https://instagram.com', '_blank')}
                        className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white rounded-full font-semibold hover:scale-105 transition-transform text-lg"
                    >
                        <Instagram size={24} />
                        <span>Ver Mais no Instagram</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default InstagramSection;
