import React, { useState, useMemo } from 'react';
import { collectionsData } from '../../data/mock';

const Collections = ({ onArtworkClick }) => {
    const [filterCategory, setFilterCategory] = useState('Todos');

    const filteredArtworks = useMemo(() => {
        return filterCategory === 'Todos'
            ? collectionsData.artworks
            : collectionsData.artworks.filter(art => art.category === filterCategory);
    }, [filterCategory]);

    return (
        <section id="colecoes" className="section-padding-large bg-light dark:bg-slate-800 transition-colors duration-300">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                    <div className="md:col-span-2 slide-in-left">
                        <h2 className="section-title text-dark dark:text-white">{collectionsData.title}</h2>
                        <p className="body-text mb-6 dark:text-gray-300">{collectionsData.description}</p>

                        <div className="flex flex-wrap gap-3 mb-6">
                            {collectionsData.filters.map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setFilterCategory(filter)}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${filterCategory === filter
                                        ? 'bg-primary text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-slate-700 dark:text-gray-200 dark:hover:bg-slate-600'
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>


                    </div>

                    <div className="md:col-span-3 slide-in-right">
                        <div className="masonry-grid">
                            {filteredArtworks.map((artwork) => (
                                <div
                                    key={artwork.id}
                                    className="masonry-item cursor-pointer"
                                    onClick={() => onArtworkClick(artwork)}
                                >
                                    <div className="image-overlay rounded-lg overflow-hidden shadow-lg">
                                        <img
                                            src={artwork.image}
                                            alt={artwork.title}
                                            className="w-full h-auto"
                                        />
                                        <div className="absolute inset-0 z-10 flex items-end p-4 opacity-0 hover:opacity-100 transition-opacity">
                                            <div className="text-white">
                                                <h4 className="font-bold text-lg">{artwork.title}</h4>
                                                <p className="text-sm">{artwork.artist}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collections;
