import React from 'react'
import Card from '../ui/Card';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';
import { WHY } from '../../data/why';
import { ICONS } from '../../data/icons';


const WhyUs = () => {
    return (

        <section id='whyus' className='relative py-20 overflow-hidden bg-black' >
            <RadialGradientBackground variant='whyus' />
            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 gap-5 items-center mb-20'>
                    <FadeIn delay={200}>
                        <Card className="max-w-40 items-center gap-2.5 px-[18px] py-[5px] mb-5 bg-linear-to-r from-primary/10 via-primary/15 via-primary/20 border border-primary/20 rounded-full">
                            <p className='text-primary tracking-wider  text-md text-center'>Why Choose Us </p>
                        </Card>
                    </FadeIn>
                    
                    <FadeIn delay={300}>
                        <div className='md:max-w-1/2'>
                            <h1 className="tracking-wider text-3xl md:text-2xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                                Built around comfort, safety and focus
                            </h1>
                            <p className='text-base tracking-wide leading-tight '>Every detail — from the mattress you sleep on to the person at the gate — is chosen so you can get on with studying, working and living well.</p>

                        </div>
                    </FadeIn>

                    <FadeIn delay={400}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {WHY.map(([icon, title, description], index) => {
                                const Icon = ICONS[icon];
                                return (
                                    <FadeIn key={index} delay={index * 100}>
                                        <Card className="items-center   px-[40px] py-[40px] mb-5 bg-linear-to-r from-primary/10 via-primary/15 via-primary/20 border border-primary/20 rounded-2xl hover:border-white hover:scale-105 transition-all duration-300">
                                            <Card.Header className="flex items-center gap-2 border-none font-semibold mb-2">
                                                <div className='px-2 py-2 mb-3 bg-radial from-primary/10 via-primary/15 via-primary/20 border border-primary/20 rounded-2xl'>
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth="1.8"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        aria-hidden="true"
                                                        className="w-8 h-8 text-emerald-500"
                                                        dangerouslySetInnerHTML={{ __html: ICONS[icon] }}
                                                    />
                                                </div>
                                            </Card.Header>
                                            <Card.Body>
                                                <h2 className='text-2xl tracking-wide mb-3'>{title}</h2>
                                                <p className="text-sm text-base text-gray-50/60">{description}</p>
                                            </Card.Body>
                                        </Card>
                                    </FadeIn>
                                );
                            })}
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default WhyUs