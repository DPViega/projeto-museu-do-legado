import React from 'react';
import { X } from 'lucide-react';

const Lightbox = ({ image, onClose }) => {
    if (!image) return null;

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <button
                onClick={onClose}
                className="absolute top-8 right-8 z-50 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
            >
                <X size={24} />
            </button>

            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <img
                    src={image.image}
                    alt={image.title}
                    className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
                />
                <div className="bg-white p-6 rounded-b-lg">
                    <h3 className="text-2xl font-bold text-dark mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                        {image.title}
                    </h3>
                    <p className="text-gray-600 mb-1">{image.artist}</p>
                    <p className="text-sm text-gray-500">{image.year} • {image.category}</p>
                    <p className="text-gray-700 mt-4">{image.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Lightbox;
