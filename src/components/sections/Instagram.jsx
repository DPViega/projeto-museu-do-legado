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
                </div>

                <div className="flex justify-center mb-8 fade-in-up">
                    <iframe
                        src="https://snapwidget.com/embed/1116158"
                        className="snapwidget-widget"
                        allowTransparency="true"
                        frameBorder="0"
                        scrolling="no"
                        style={{ border: 'none', overflow: 'hidden', width: '100%', maxWidth: '765px', height: '510px' }}
                        title="Posts from Instagram"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default InstagramSection;
