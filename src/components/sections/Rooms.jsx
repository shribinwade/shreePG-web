import React from 'react'
import Card from '../ui/Card';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';
import { ROOMS } from '../../data/rooms';
import { ICONS } from '../../data/icons';
import { Car, Check } from 'lucide-react';
import { scrollToSection } from '../../hooks/useScrollSpy';

const Rooms = () => {
    return (
        <section id='rooms' className='relative py-20  overflow-hidden bg-black' >
            <RadialGradientBackground variant='rooms' />
            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <FadeIn delay={200}>
                    <Card className="max-w-fit items-center gap-2.5 px-[18px] py-[5px] mb-5 bg-linear-to-r from-primary/10 via-primary/15 via-primary/20 border border-primary/20 rounded-full ">
                        <p className='text-primary tracking-wider text-md text-center'>ROOM TYPES</p>
                    </Card>
                </FadeIn>

                <FadeIn delay={300}>
                    <div className='max-w-fit mb-10'>
                        <h1 className="text-3xl md:text-2xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                            Choose the space that suits you
                        </h1>
                        <p className='max-w-2xl text-xl text-gray-50/50 leading-tight'>
                            Every room comes furnished with a bed and mattress, study table, cupboard, attached bathroom and hot water.
                        </p>
                    </div>
                    <div >

                    </div>
                </FadeIn>

                <FadeIn delay={400}>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center'>
                        {ROOMS.map((index) => (
                            <FadeIn key={index.id} delay={index.id * 200}>


                                <Card className='items-center gap-2.5  bg-linear-to-r from-primary/10 via-primary/15 via-primary/20 border border-primary/20  rounded-2xl overflow-hidden m-px h-[calc(100%-2px)] hover:border-white/80'  key={index.id}>
                                    <Card.Header className='mb-5' >
                                        <img src={index.img} alt={index.title} className='w-full  mask-[linear-gradient(to_bottom,black_60%,transparent_100%)]  object-cover ' />
                                    </Card.Header>
                                    <Card.Body className='px-[30px] py-[5px] mx-auto'>
                                        <h2 className='text-2xl font-bold tracking-wide mb-3'>{index.title}</h2>
                                        <p className='text-base text-gray-50/50 tracking-wide'>{index.desc}</p>
                                        <p className='mt-5'><span className="text-3xl font-bold">{index.price}*</span> <span className="text-sm text-gray-500">/ month</span></p>
                                        <ul className='mt-5'>
                                            {index.points.map((point, j) => (
                                                <span key={j} className='flex items-center align-middle py-1 gap-1'><Check className='w-5 h-5' /><li key={j}>{point}</li></span>
                                            ))}
                                        </ul>
                                    </Card.Body>
                                    <Card.Footer className='px-[30px] py-[5px] mx-auto text-center mb-5'>
                                        <button onClick={() => scrollToSection('contact')} className='in-hover:cursor-pointer tracking-wide justify-between gap-2 px-9 py-3.5 bg-[radial-gradient(circle,#FFF4B0_0%,#FFD700_0%,#D4AF37_63%,#8B7500_100%)] bg-clip  text-[#212121]/90 font-bold rounded-[17px] border-white opacity-70 hover:opacity-100 hover:scale-105 ease-out transition-all duration-300'>
                                            Enquire About this Room
                                        </button>
                                    </Card.Footer>
                                </Card>
                            </FadeIn>
                        ))}
                    </div>
                </FadeIn>

            </div>
        </section>
    )
}

export default Rooms