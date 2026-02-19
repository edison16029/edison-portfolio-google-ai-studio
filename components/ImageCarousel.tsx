import React, { useState } from 'react';

interface CarouselImage {
    src: string;
    alt: string;
    caption?: string;
}

interface ImageCarouselProps {
    images: CarouselImage[];
    className?: string;
    aspectRatio?: string;
    maxWidth?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
    images,
    className = "",
    aspectRatio = "aspect-square",
    maxWidth = "max-w-full"
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

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

    const onTouchStart = (e: React.TouchEvent) => {
        if (images.length <= 1) return;
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        if (images.length <= 1) return;
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (images.length <= 1 || !touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    return (
        <figure className={`my-8 relative group ${maxWidth} mx-auto ${className}`}>
            <div
                className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 relative bg-gray-50 cursor-grab active:cursor-grabbing"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >

                {/* Image Container with Centering and Blurred Background */}
                <div className={`relative ${aspectRatio} w-full flex items-center justify-center overflow-hidden`}>
                    {/* Background Blur Effect */}
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center blur-2xl opacity-20 scale-110 pointer-events-none"
                        style={{ backgroundImage: `url(${images[currentIndex].src})` }}
                        aria-hidden="true"
                    />

                    {/* Main Image */}
                    <img
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        className="relative z-10 max-w-full max-h-full object-contain transition-all duration-500 hover:scale-[1.02] active:scale-[1.02] pointer-events-none"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                    />
                </div>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 focus:opacity-100"
                            aria-label="Previous image"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 focus:opacity-100"
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
