import { useState } from 'react';
import FadeIn from '../animations/FadeIn';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../../data/faq';


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div id="faq" className="relative bg-black text-white">
        {/* //spotlight */}
         <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-primary/10 opacity-90 rounded-full blur-3xl' />
          </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <FadeIn delay={100}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <span className="text-sm text-primary font-medium tracking-wider uppercase">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold">Frequently Asked Questions</h2>
            <p className="text-white/50 mt-3">Everything you need to know before moving in</p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-3">
          {FAQS.map(([question, answer], index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={index} delay={index * 100}>
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 focus:outline-none"
                  >
                    <span className="font-medium text-white">{question}</span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-white/70 leading-relaxed">{answer}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;