import { ChevronDown, ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import React, { useState, useRef } from 'react';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';
import { pg } from '../../data/data';
import { reviews } from '../../data/reviews'


const Testimonials = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const scrollToIndex = (index) => {
        setCurrentIndex(index);
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.offsetWidth;
            scrollContainerRef.current.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth'
            })
        }
    };

    const nextTestimonial = () => {
        const newIndex = (currentIndex + 1) % reviews.length;
        scrollToIndex(newIndex);
    }
    const prevTestimonial = () => {
        const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        scrollToIndex(newIndex);
    };

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.offsetWidth;
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const newIndex = Math.round(scrollLeft / cardWidth);
            if (newIndex !== currentIndex) {
                setCurrentIndex(newIndex);
            }
        }
    };

    return (
        <section id='testimonials' className='relative py-10  overflow-hidden bg-black'>
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-primary/10 opacity-90 rounded-full blur-3xl' />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
                <FadeIn delay={100}>
                    <div className="text-center mb-16">
                        <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-3'>
                            <Quote className="w-4 h-4 text-primary" />
                            <span className='text-sm text-primary font-medium tracking-wider uppercase'>Testimonials</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4 max-w-xl mx-auto">What Our Residents Say</h2>
                        <p className="text-lg text-white/60 max-w-xl mx-auto">
                            Real experiences from residents of {pg?.name || 'our PG'}
                        </p>
                    </div>
                </FadeIn>

                <FadeIn delay={200}>
                    <div className="relative flex items-center justify-center">

                        <button
                            type="button"
                            aria-label="Previous testimonial"
                            onClick={prevTestimonial}
                            className=" flex absolute left-0 items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-colors duration-300"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <div
                            ref={scrollContainerRef}
                            className="overflow-x-auto flex w-full scroll-smooth snap-x snap-mandatory touch-pan-x"

                            // onScroll={handleScroll}
                            className="overflow-x-hidden flex  scroll-smooth"
                            style={{ scrollSnapType: 'x mandatory' }}

                        >
                            {reviews.map((review, index) => (

                                <div key={index} className="w-full flex justify-center items-center shrink-0 px-4" style={{ scrollSnapAlign: 'start' }}>
                                    <div className=''>
                                        <div className='w-full'>

                                            <div className='w-full bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10'>
                                                <Quote className="w-8 h-8 text-primary/50 mb-4" />

                                                {review.rating ? (
                                                    <div className="flex gap-1 mb-4">
                                                        {Array.from({ length: 5 }).map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className="w-4 h-4 text-primary"
                                                                fill={i < review.rating ? 'currentColor' : 'none'}
                                                            />
                                                        ))}
                                                    </div>
                                                ) : null}

                                                <p className="text-lg text-white/80 leading-relaxed mb-6">{review.text}</p>

                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-6 border-t border-white/10">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-white font-medium">{review.reviewer}</span>
                                                        {review.isLocalGuide ? (
                                                            <span className="text-xs text-primary bg-primary/10 border border-primary/30 rounded-full px-2 py-0.5">Local Guide</span>
                                                        ) : null}
                                                    </div>
                                                    <div className="flex items-center gap-3 text-sm text-white/40">
                                                        {review.reviewCount ? (
                                                            <span className="">{review.reviewCount} reviews</span>
                                                        ) : null}
                                                        {review.timeAgo ? (
                                                            <span className="">{review.timeAgo}</span>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>


                        <button
                            type="button"
                            aria-label="Next testimonial"
                            onClick={nextTestimonial}
                            className="flex absolute right-0 items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-colors duration-300"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </FadeIn>
                <div className="flex items-center justify-center gap-2 mt-8">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            aria-label={`Go to testimonial ${index + 1}`}
                            onClick={() => scrollToIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'w-8 bg-primary'
                                : 'w-2 bg-white/20 hover:bg-white/40'
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section >
    )
}

export default Testimonials