
import { ChevronDown, MapPin, Pin, Mail, Heart, Phone } from 'lucide-react';
import React from 'react';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';
import { pg } from '../../data/data'
import { ICONS } from '../../data/icons'
import { NAV } from '../../data/nav';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {

  const activeSection = useScrollSpy(NAV.map(link => link.id));
  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  }
  const defaultMsg = `Hi, I'm interested in ${pg.suffix || 'your services'}!`;
  return (
    <footer className='relative bg-black overflow-hidden border-t border-white/10 '>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 opacity-30 blur-3xl'></div>
      </div>
      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
          <FadeIn delay={0}>
            <div>
              <div className='flex items-center justify-between mb-4'>
                {/* Logo */}
                <div className="flex items-center gap-1">
                  <div>
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className=" hover:cursor-pointer text-2xl font-bold bg-linear-to-r from-[#7A5C00] via-[#D4AF37] to-[#FFE082] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                      aria-label='home'
                    >
                      {pg.name.split(' ')[0]}
                    </button>
                    <p className="bg-linear-to-r from-[#7A5C00] via-[#D4AF37] to-[#FFE082] bg-clip-text text-transparent">{pg.suffix}</p>
                  </div>

                </div>
              </div>

              <div className='space-y-3'>
                <a href={`mailto:${pg.email}`} className='group flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30  transition-all duration-300'>
                  <div className='p-2 bg-primary/10 rounded-lg'>
                    <Mail className="w-4 h-4 text-primary"></Mail>
                  </div>
                  <span className='text-white/70 text-sm group-hover:text-white transition-colors'>
                    {pg.email}
                  </span>
                </a>

                <div className='flex items-center gap-3 p-3 bg-white/5 border-white/10 rounded-xl'>
                  <div className='p-2 bg-primary/10 rounded-lg'>
                    <MapPin className='w-4 h-4 text-primary' />
                  </div>
                  <span className='text-white/70 text-sm'>
                    {pg.address}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div>
              <h4 className='text-white font-semibold mb-6 text-lg'>Quick Links</h4>
              <ul className='space-y-3'>
                {NAV.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`group flex items-center gap-2 text-white/60 hover:text-primary font-medium transition-all duration-300 hover:cursor-pointer }`}
                  >
                    <div className='w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-primary group-hover:w-2 transition-all duration-300' />
                    <span className='text-sm'>{link.label}</span>
                  </button>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div>
              <h4 className='text-white font-semibold mb-6 text-lg'>Get In Touch</h4>
               <h2 className='text-white tracking-wider mb-3 text-3xl font-semibold'>Let's find you a room</h2>
              <p className='text-white/60 text-sm mb-6 leading-relaxed'>
                Have questions about rooms, pricing, or availability? Reach out — we usually respond within a few hours.
              </p>
              <div className="">
                <div className='group relative bg-white/5 border border-white/10 rounded-2xl p-2 mb-5 hover:border-primary/30 transition-all duration-300'>
                  <div className='flex items-start gap-4'>
                    <div className='p-3 bg-linear-to-br from-primary/20 to-primary/30 border border-primary/30 rounded-xl'>
                      <Phone className='w-6 h-6 text-primary' />
                    </div>
                    <div className='flex-1'>
                      <p className='text-sm text-white/60 mb-1'>Call On Phone</p>
                      <a href={`tel:${pg.phone}`} className='text-white hover:text-[#A8FF8D] transition-colors font font-medium'>{pg.phone}</a>
                    </div>
                  </div>
                  <div className='absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none' />
                </div>
                
                <div className='flex group relative bg-white/5 border border-white/10 rounded-2xl p-2  hover:border-primary/30 transition-all duration-300 items-center gap-4'>
                  <div className='p-3 bg-linear-to-br from-primary/20 to-primary/30 border border-primary/30 rounded-xl'>
                    <FaWhatsapp className='w-6 h-6 text-primary' />
                  </div>

                  <a
                    href={`https://wa.me/${pg.phone.replace(/\D/g, '')}?text=${encodeURIComponent(defaultMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-white hover:text-[#A8FF8D] transition-colors font-medium'
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>

        <FadeIn delay={300}>
          <div className='pt-8 border-t border-white/10 mb-25 '  >
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
              <p className='text-white/50 text-sm'>
                © {new Date().getFullYear()} {pg.name} Stay Home & PG. All rights
              </p>
              <p className=' flex items-center gap-2 text-white/50 text-sm'>
                Build with <Heart className="w-4 h-4 text-primary fill-primary animate-pulse"> </Heart>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}

export default Footer