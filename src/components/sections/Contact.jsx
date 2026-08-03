import { Mail, MapPin, MessageSquare, Phone, PhoneCall, PhoneCallIcon, Pin, Send } from 'lucide-react';
import React, { useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";
import FadeIn from '../animations/FadeIn';
import { pg } from '../../data/data';
import { scrollToSection } from '../../hooks/useScrollSpy';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        const trimmedName = formData.name.trim();
        const trimmedEmail = formData.email.trim();
        const trimmedMessage = formData.message.trim();
        const trimmedPhone = formData.phone.trim();
        // Required fields
        if (!trimmedName || !trimmedEmail || !trimmedPhone || !trimmedMessage) {
            setStatus({ type: 'error', message: 'Please fill in all fields' });
            return;
        }

        // Name validation: letters and spaces only, min 2 chars
        const nameRegex = /^[A-Za-z\s]{2,50}$/;
        if (!nameRegex.test(trimmedName)) {
            setStatus({ type: 'error', message: 'Please enter a valid name (letters only, min 2 characters)' });
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(trimmedEmail)) {
            setStatus({ type: 'error', message: 'Please enter a valid email' });
            return;
        }

        // Phone validation: Indian 10-digit mobile number, optionally with +91
        const phoneRegex = /^(?:\+91[-\s]?)?[6-9]\d{9}$/;
        if (!phoneRegex.test(trimmedPhone)) {
            setStatus({ type: 'error', message: 'Please enter a valid 10-digit phone number' });
            return;
        }

        // Message validation: min/max length
        if (trimmedMessage.length < 10) {
            setStatus({ type: 'error', message: 'Message must be at least 10 characters long' });
            return;
        }
        if (trimmedMessage.length > 1000) {
            setStatus({ type: 'error', message: 'Message must be under 1000 characters' });
            return;
        }

        // setIsSubmitting(true);
        setStatus({ type: 'success', message: 'Message sent successfully We\'ll get back to you soon' });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    };

    const socialIcons = {
        whatsup: FaWhatsapp,
        phone: Phone,
        location: Pin,
        email: Mail
    }

    return (
        <section id="contact" className='relative py-20  overflow-hidden bg-black'>
            <div className="absolute inset-0 overflow-hidden">
                <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl'></div>
                <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl'></div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl' ></div>
            </div>
            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <FadeIn delay={0}>
                    <div className='text-center mb-16'>
                        <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6'>
                            <MessageSquare className='w-4 h-4 text-primary' />
                            <span className='text-sm text-primary font-medium tracking-wider'>GET IN TOUCH</span>
                        </div>
                        <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4'>
                            Book a visit or ask us anything
                        </h2>
                        <p className='text-lg text-white/60 max-w-2xl mx-auto'>Send an enquiry and we'll reply within 30 minutes between 8 AM and 10 PM.</p>
                    </div>

                </FadeIn>

                <div className='grid md:grid-cols-2 gap-12'>
                    <FadeIn delay={100}>
                        <div className='bg-white/5 border border-white/10 rounded-2xl p-8'>
                            <form onSubmit={handleSubmit} className=' space-y-6 '>
                                <div>
                                    <label htmlFor="name" className='block text-xl font-medium text-white/80 mb-2'>Name</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300' placeholder='Your name' />
                                </div>
                                <div>
                                    <label htmlFor="email" className='block text-xl font-medium text-white/80 mb-2'>Email</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300' placeholder='your.email@example.com' />
                                </div>
                                <div>
                                    <label htmlFor="phone" className='block text-xl font-medium text-white/80 mb-2'>Phone</label>
                                    <input type="number" id="phone" name="phone" value={formData.phone} onChange={handleChange} className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' placeholder='Phone Number' />
                                </div>

                                <div>
                                    <label htmlFor="message" className='block text-xl font-medium text-white/80 mb-2'>Message</label>
                                    <textarea name="message" className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300' id="message" value={formData.message} onChange={handleChange} rows={5} placeholder='Ask anything'></textarea>
                                </div>

                                <button type='submit' className='w-full px-6 py-3 bg-linear-to-r from-primary/10 to-primary text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 group'>
                                    <span>Send Message</span>
                                    <Send className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
                                </button>
                                {status.message && (
                                    <div className={`p-4 rounded-xl ${status.type === 'success' ? 'bg-green-500/10 border border-green-500/20 text-green-400' : 'bg-red-500/10 border border-red-500/20 text-red-400'}`}>
                                        {status.message}
                                    </div>
                                )}

                            </form>
                        </div>
                    </FadeIn>

                    {/* contack Info */}
                    <FadeIn delay={200}>
                        <div className='group relative bg-white/5 border border-white/10 rounded-2xl p-6 mb-5 hover:border-primary/30 transition-all duration-300'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 bg-linear-to-br from-primary/20 to-primary/30 border border-primary/30 rounded-xl'>
                                    <Mail className='w-6 h-6 text-primary' />
                                </div>
                                <div className='flex-1'>
                                    <p className='text-sm text-white/60 mb-1'>Email</p>
                                    <a href={`mailto:${pg.email}`} className='text-white hover:text-[#A8FF8D] transition-colors font font-medium'>{pg.email}</a>
                                </div>
                            </div>
                            <div className='absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none' />
                        </div>

                        <div className='group relative bg-white/5 border border-white/10 rounded-2xl p-6 mb-5 hover:border-primary/30 transition-all duration-300'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 bg-linear-to-br from-primary/20 to-primary/30 border border-primary/30 rounded-xl'>
                                    <Phone className='w-6 h-6 text-primary' />
                                </div>
                                <div className='flex-1'>
                                    <p className='text-sm text-white/60 mb-1'>Phone</p>
                                    <a href={`tel:${pg.phone}`} className='text-white hover:text-[#A8FF8D] transition-colors font font-medium'>{pg.phone}</a>
                                </div>
                            </div>
                            <div className='absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none' />
                        </div>

                        <div className='group relative bg-white/5 border border-white/10 rounded-2xl p-6 mb-5 hover:border-primary/30 transition-all duration-300'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 bg-linear-to-br from-primary/20 to-primary/30 border border-primary/30 rounded-xl'>
                                    <FaWhatsapp className='w-6 h-6 text-primary' />
                                </div>
                                <div className='flex-1'>
                                    <p className='text-sm text-white/60 mb-1'>WhatsApp</p>
                                    <a
                                        href={`https://wa.me/${pg.phone.replace(/\D/g, '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='text-white hover:text-[#A8FF8D] transition-colors font-medium'
                                    >
                                        Click here to WhatsApp
                                    </a>
                                </div>
                            </div>
                            <div className='absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none' />
                        </div>

                        <div className='group relative bg-white/5 border border-white/10 rounded-2xl  p-6 mb-5 hover:border-primary/30 transition-all duration-300'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 bg-linear-to-br from-primary/20 to-primary/30 border border-primary/30 rounded-xl'>
                                    <MapPin className='w-6 h-6 text-primary' />
                                </div>
                                <div className='flex-1' onClick={() => scrollToSection('location')}>
                                    <p className='text-sm text-white/60 mb-1'>Location</p>
                                    <p className='text-white text-medium'>{pg.address}</p>
                                </div>
                            </div>
                            <div className='absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none' />
                        </div>


                    </FadeIn>

                </div>
            </div>
        </section>
    )
}

export default Contact;