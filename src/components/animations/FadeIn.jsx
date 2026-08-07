import React, { useEffect, useRef, useState } from 'react'


const FadeIn = ({ children, delay = 0, duration = 500, threshold = 0.1 ,className = '',style = {}}) => {

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        //Trigger animation when element eneters viewport
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px' //Trigger slightly before element is visible
      }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };

  }, [threshold, isVisible]);

  return (
    <div ref={elementRef}
    
      className={`${isVisible ? 'animate-fadeIn' : 'opacity-0'} ${className}`}

    style={{
        animationDelay: isVisible ? `${delay}ms` : '0ms',
        animationDuration: `${duration}ms`,
        animationFillMode: 'both',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default FadeIn