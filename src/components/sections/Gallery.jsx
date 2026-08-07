import { useState, useEffect } from 'react';
import { images } from '../../data/gallary';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';
import FadeIn from '../animations/FadeIn';

const Gallery = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const openOverlay = (image) => setSelectedImage(image);
  const closeOverlay = () => setSelectedImage(null);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') closeOverlay();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);


  return (
    <div id='gallery' className="relative  bg-black text-white">
      <RadialGradientBackground variant='gallary' />
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full'>
        <FadeIn delay={100}>
          <div className="text-center mb-10">
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full '>

              <span className='text-sm text-primary font-medium tracking-wider uppercase'>Gallary</span>
            </div>


          </div>
        </FadeIn>
        <div className='flex flex-col justify-center items-center  overflow-hidden'>
          <FadeIn delay={300}>
            <main className="max-w-full z-10 grid grid-cols-1 md:grid-cols-3 gap-2">
              {images.map((image, index) => (
                <FadeIn delay={index * 200} className="aspect-4/3 overflow-hidden">
                <a
                  href="#"
                  key={index}
                  tabIndex={selectedImage ? -1 : 0}
                  onClick={(e) => {
                    e.preventDefault();
                    openOverlay(image);
                  }}
                  className="overflow-hidden focus:outline-none w-full aspect-4/3"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="
                    object-cover block w-full h-full
                    brightness-[0.8] scale-100
                    transition-all duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)]
                    hover:scale-110 hover:brightness-100
                    focus:scale-110 focus:brightness-100
                "
                  />
                </a>
                </FadeIn>
              ))}
            </main>
          </FadeIn>
        </div>
      </div>


      <div
        className={`
                    fixed inset-0 flex justify-center items-center
                    bg-black/60 backdrop-blur-sm z-[1000]
                    transition-all duration-500 ease-in-out
                    ${selectedImage ? 'opacity-100 visible delay-200' : 'opacity-0 invisible'}
                `}
        onClick={(e) => {
          if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
            closeOverlay();
          }
        }}
      >
        <button
          aria-label="Close overlay"
          onClick={closeOverlay}
          className="
                        absolute top-4 right-4 w-12 h-12
                        bg-transparent border-none p-1
                        opacity-50 hover:opacity-100 focus:opacity-100
                        transition-all duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)]
                        cursor-pointer text-primary
                    "
        >
          <svg viewBox="-50 -50 100 100" width="40" height="40" className="w-full h-full block pointer-events-none">
            <g fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round">
              <path transform="rotate(45)" d="M -40 0 h 80 m -40 -40 v 80" />
            </g>
          </svg>
        </button>
        {selectedImage && (
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="h-[90vh] w-[85vw] max-w-full object-contain"
          />
        )}
      </div>
    </div >
  );
}

export default Gallery