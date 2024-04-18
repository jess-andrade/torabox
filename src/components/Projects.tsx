import * as React from "react";
import { motion } from "framer-motion"

//-- carousel 
import { EmblaOptionsType } from 'embla-carousel'

//-- my imports 
import EmblaCarousel from './EmblaCarousel';
import Typewriter from './Typewriter';

export default function Projects() {

  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <>
      <section id="projects">

        {/* main container */}
        <div className="flex flex-row flex-wrap bg-[#262923] min-w-full min-h-[500px] text-[#181b17] items-center justify-center gap-x-24">

          {/*content */}

          <motion.div
            initial={{ x: -100, scale: 0.8, opacity: 0 }}
            whileInView={{ x: 0, scale: 1.0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className='flex flex-col'>

              <div className='flex flex-col justify-center items-center'>
                {/* title */}
                <h1 className='text-4xl font-bold text-[#f1f5f9] tracking-[.24em] pb-4 justify-center'>PORTFÓLIO</h1>

                {/* divider */}
                <div className='h-1 w-24 bg-[#fca04f] '></div>

              </div>

              {/* subtitle */}
              <h2 className='text-xl font-bold text-[#a6a29e] tracking-[.20em] justify-center pt-6'>Conheça nossos projetos</h2>
            </div>
          </motion.div>

          {/* subtitle w typewriter */}
          {/* <div className='text-xl justify-center text-[#a6a29e] tracking-[.20em] pb-10 min-h-9'>
            <Typewriter text="Conheça nossos projetos" delay={200} delayEnd={3000} />
          </div> */}

          <div className='flex flex-wrap gap-4 pt-24'>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>

      </section >
    </>
  )
}