import React, { useState, useEffect } from 'react'
import { Home, Menu, X, Phone } from 'lucide-react'

import { pg } from '../../data/data';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { NAV } from '../../data/nav';
import { scrollToSection } from '../../hooks/useScrollSpy';
import { FaWhatsapp } from "react-icons/fa";
const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV.map(link => link.id));

  useEffect(
    () => {
      const handScroll = () => { setIsScrolled(window.scrollY > 50); };
      window.addEventListener('scroll', handScroll);
      return () => window.removeEventListener('scroll', handScroll);
    }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  }

  const defaultMsg = `Hi, I'm interested in ${pg.suffix || 'your services'}!`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-1000 w-full py-4 transition-all duration-300 ${isScrolled ? 'bg-black/30 backdrop-blur-lg' : 'bg-transparent'}`}
      style={{ transform: 'translate3d(0,0,0)' }}
    >
      <div className="max-w-330 mx-auto px-5">

        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className="flex items-center gap-1">

            <img className='w-15 h-15' src="assets/logo.avif" alt="logo" />
            <div>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="uppercase hover:cursor-pointer text-2xl font-bold bg-gradient-to-r from-[#7A5C00] via-[#D4AF37] to-[#FFE082] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                aria-label='home'
              >
                {pg.name.split(' ')[0]}
              </button>
              <p className="bg-gradient-to-r from-[#7A5C00] via-[#D4AF37] to-[#FFE082] bg-clip-text text-transparent">{pg.suffix}</p>
            </div>

          </div>

          {/* DeskTop navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`bg-gradient-to-r from-[#7A5C00] via-[#D4AF37] to-[#FFE082] bg-clip-text text-transparent  font-medium transition-all duration-300 hover:cursor-pointer ${activeSection === link.id ? 'text-white' : 'text-white/70 hover:text-white'}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden xl:flex items-center gap-2">
            <a href={`https://wa.me/${pg.phone.replace(/\D/g, '')}?text=${encodeURIComponent(defaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer" >
              <button
                className="flex in-hover:cursor-pointer tracking-wide justify-between gap-2 px-9 py-3.5 bg-[radial-gradient(circle,#FFF4B0_0%,#FFD700_0%,#D4AF37_63%,#8B7500_100%)] bg-clip  text-[#212121]  font-bold text-base rounded-[17px] border-white hover:opacity-80 transition-all duration-300"
              >
                <FaWhatsapp className='w-5 h-5' /> WhatsApp Now
              </button>
            </a>
          </div>

          {/* Mobile Menu button */}
          <button

            onClick={() => { setIsMenuOpen(!isMenuOpen) }}
            className='md:hidden p-4 text-white hover:text-white/80 transition-colors'
            aria-label="menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-max opacity-100' : 'max-h-0 opacity-0'}`}>

        <div className="bg-black/95 backdrop-blur-lg border-t border-white/10 px-5 py-6 space-y-3">
          {NAV.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeSection === link.id ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
            >
              {link.label}
            </button>
          ))}

          <a href={`tel:${pg.phone}`} ><button
            className="w-full px-7 py-3.5 bg-white text-[#212121] font-medium text-base rounded-[17px] border border-white hover:bg-white/90 transition-all duration-300 mt-2">
            Call Now
          </button></a>

        </div>
      </div>

    </nav>
  )
}

export default Navbar