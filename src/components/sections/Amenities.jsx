import React from 'react'
import FadeIn from '../animations/FadeIn'
import * as Icons from 'lucide-react'
import { AMENITIES } from '../../data/amenities'

import { Sofa, Wifi, Sparkles, Camera, Droplet, Zap, Shirt, Bike, Car, Flame, Bath, Table2, Archive, BedDouble } from 'lucide-react';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const ICON_MAP = {
    sofa: Sofa,
    wifi: Wifi,
    sparkle: Sparkles,
    camera: Camera,
    droplet: Droplet,
    bolt: Zap,
    laundry: Shirt,
    bike: Bike,
    car: Car,
    flame: Flame,
    bath: Bath,
    desk: Table2,
    cupboard: Archive,
    bed: BedDouble,
};
const Amenities = () => {
    return (
        <section id='amenities' className='relative py-20  overflow-hidden bg-black'>
            <RadialGradientBackground variant="hero" />
            {/* Animated Background Gradients */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50' />
                <div className='absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50' />
            </div>

            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <FadeIn delay={100}>
                    <div className='text-center mb-16'>
                        <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6'>
                            <Icons.Sparkles className='w-4 h-4 text-primary' />
                            <span className='text-sm text-primary font-medium'>Amenities</span>
                        </div>
                        <div className=''>
                            <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4'>Everything included, nothing extra to buy</h2>
                            <p className='text-lg text-white/60 max-w-2xl mx-auto'>Move in with a suitcase. The rest is already waiting for you.</p>
                        </div>
                    </div>
                </FadeIn>

                {/* Amenities */}
                <FadeIn delay={200}>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {AMENITIES.map(([icon, title], index) => {
                            const Icon = ICON_MAP[icon];
                            return (
                                <FadeIn key={index} delay={index * 100}>
                                    <div key={index} className='group relative w-full  bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transistion-all duration-300 hover:scale-105'>
                                        {Icon && <Icon className='w-10 h-10 text-primary shrink-0' />}
                                        <span className='text-md '>{title}</span>
                                    </div>
                                </FadeIn>

                            );
                        })}
                    </div>
                </FadeIn>


            </div>
        </section>
    )
}

export default Amenities