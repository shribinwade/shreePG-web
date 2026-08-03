import React from 'react'
import FadeIn from '../animations/FadeIn';
import { Locate } from 'lucide-react';
const Location = () => {
    return (
        <section id="location" className='relative min-h-1/2 py-10 overflow-hidden bg-black'>
     
            <div className='z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  '>
                <FadeIn delay={0}>
                    <div className='text-center '>
                        <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6'>
                            <Locate className='w-4 h-4 text-primary' />
                            <span className='text-sm text-primary font-medium tracking-wider'>Location</span>
                        </div>

                    </div>
                </FadeIn>
                <FadeIn delay={200}>
                    <div className='w-full rounded-xl overflow-hidden'>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19679.609625420133!2d73.91664928715817!3d18.561983400000024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1ed05c53f15%3A0x697792af15dd8866!2sShree%20Stay%20Homes%20%26%20PG!5e1!3m2!1sen!2sin!4v1785765965079!5m2!1sen!2sin"
                            className='w-full h-100 border-0'
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="Shree Stay Homes & PG Location"
                        ></iframe>

                    </div>
                </FadeIn>
            </div>





        </section>

    )
}

export default Location