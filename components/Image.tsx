import React from 'react';

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
    caption?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className = "", caption }) => {
    return (
        <figure className={`my-8 ${className}`}>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-auto max-h-[80vh] object-contain transition-transform duration-500 hover:scale-[1.02]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                />
            </div>
            {caption && (
                <figcaption className="mt-3 text-center text-sm text-gray-500 italic">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
};

export default Image;
