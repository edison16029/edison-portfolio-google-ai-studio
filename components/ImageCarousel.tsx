import React, { useState } from 'react';

interface CarouselImage {
    src: string;
    alt: string;
    caption?: string;
}

interface ImageCarouselProps {
    images: CarouselImage[];
    className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, className = "" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) return null;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <figure className={`my-8 relative group ${className}`}>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative bg-gray-50">

                {/* Main Image */}
                <div className="relative aspect-[4/3] w-full">
                    <img
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        className="w-full h-full object-contain transition-opacity duration-300"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                    />
                </div>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 focus:opacity-100"
                            aria-label="Previous image"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 focus:opacity-100"
                            aria-label="Next image"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}
            </div>

            {/* Caption */}
            {images[currentIndex].caption && (
                <figcaption className="mt-3 text-center text-sm text-gray-500 italic">
                    {images[currentIndex].caption}
                </figcaption>
            )}

            {/* Dots Indicator */}
            {images.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-indigo-600 w-4' : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </figure>
    );
};

export default ImageCarousel;
