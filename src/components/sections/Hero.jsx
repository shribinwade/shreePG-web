import { ChevronDown, Pin, } from 'lucide-react';
import React from 'react';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';
import { pg, whyChooseUs, rooms, amenities } from '../../data/data'
import { ICONS } from '../../data/icons'

const Hero = () => {
  return (
    <section className=" relative min-h-screen py-10 flex items-center overflow-hidden bg-black">
      <RadialGradientBackground variant="hero" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
          {/* Left column -Content */}
          <div className='text-left'>
            <FadeIn delay={0}>
              <div className='inline-flex items-center gap-2.5 px-[18px] py-[11px] mb-5 bg-linear-to-r from-primary/10 via-primary/15 via-primary/20 border border-primary/20 rounded-full'>

                <span className='text-xs md:text-sm  text-white tracking-[1.2x]'>
                  <p className='tracking-widest'>{pg.category} | KHARADI | PUNE</p>
                </span>

              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
                Luxury, spacious
                and secure living
              </h1>

            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-2xl tracking-wider text-white/70 max-w-[550px] mb-2 ">
                {pg.tagline}
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="text-md tracking-wider text-white/70 max-w-[550px] mb-8 ">
                {pg.desc}
              </p>
            </FadeIn>

            <FadeIn delay={500}>
              <div className='flex flex-nowrap gap-2'>
                <button
                  onClick={() => scrollToSection('rooms')}
                  className="inline-flex shrink-0 items-center gap-0 mb-12 group">
                  <div className="relative z-10 in-hover:cursor-pointer hover:opacity-80 bg-primary/20 text-white rounded-[17px] px-[26px] py-[13px] text-base font-medium border border-primary/25">
                    View Rooms
                  </div>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex shrink-0 items-center gap-0 mb-12 group">
                  <div className="relative z-10 in-hover:cursor-pointer hover:opacity-80 bg-white text-[#212121] rounded-[17px] px-[26px] py-[13px] text-base font-medium border border-white">
                    Get in Touch
                  </div>
                </button>
              </div>

            </FadeIn>

            <FadeIn delay={600}>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-5 max-w-full">
                {amenities.map((stat, index) => (
                  <div key={index} className="text-left border-r border-white pr-10 last:border-r-0">
                    <div className="text-md font-normal text-primary mb-[8px] font-mono">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-primary mb-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        dangerouslySetInnerHTML={{ __html: ICONS[stat.icon] }}
                      />
                    </div>
                    <p className="text-sm text-white leading-snug">
                      {stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* right Column -Content */}
          <FadeIn delay={200}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl aspect-4/5 max-w-[500px]  group">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-[-2px] bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl" />
                </div>

                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden m-px h-[calc(100%-2px)]">
                  <img src="assets/Room3.avif" alt="room"
                    className='w-full h-200 object-cover' />
                </div>
              </div>
            </div>

          </FadeIn>
        </div>
      </div>

      {/* scroll Indicator */}
      <button
        onClick={() => scrollToSection('whyus')}
        className='hidden md:flex absolute left-1/2 bottom-8 -translate-x-1/2 animate-bounce hover:cursor-pointer'
      >
        <ChevronDown className='w-8 h-8 text-primary' />
      </button>

    </section>
  )
}

export default Hero