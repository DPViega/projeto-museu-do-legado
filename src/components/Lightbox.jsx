import React from 'react';
import { X } from 'lucide-react';

const Lightbox = ({ image, onClose }) => {
    if (!image) return null;

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <button
                onClick={onClose}
                className="absolute top-8 right-8 z-50 w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600 transition-colors"
            >
                <X size={24} />
            </button>

            <div className="lightbox-content w-full !max-w-lg relative" onClick={(e) => e.stopPropagation()}>
                <img
                    src={image.image}
                    alt={image.title}
                    className="w-full max-h-[50vh] object-cover rounded-t-xl"
                />
                <div className="bg-white dark:bg-slate-800 p-6 rounded-b-xl shadow-2xl transition-colors duration-300">
                    <h3 className="text-xl font-bold text-dark dark:text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                        {image.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-1 text-sm">{image.artist}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{image.year} • {image.category}</p>
                    <p className="text-gray-700 dark:text-gray-300 mt-4 text-sm leading-relaxed">{image.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Lightbox;
