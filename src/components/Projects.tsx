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
        <div className="flex flex-row flex-wrap bg-[#262923] min-w-full min-h-[500px] text-[#181b17] items-center justify-center ">

          {/*------ content */}
          <div className="flex flex-wrap flex-row items-center gap-x-32 pt-16 pb-20">

            {/*------ text */}
            <motion.div
              initial={{ x: -100, scale: 0.8, opacity: 0 }}
              whileInView={{ x: 0, scale: 1.0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className='flex flex-col'>
                <div className='flex flex-col justify-center '>
                  {/* title */}
                  <h1 className='text-4xl font-bold text-[#f1f5f9] tracking-[.24em] pb-4 justify-center pt-14'>PORTFÓLIO</h1>
                  {/* divider */}
                  <div className='h-1 w-24 bg-[#fca04f] '></div>
                </div>
                {/* subtitle */}
                <h2 className='flex flex-wrap max-w-42 text-xl font-bold text-[#a6a29e] tracking-[.20em] justify-center pt-6'>Conheça alguns dos nossos projetos</h2>
              </div>
            </motion.div>


            {/*------ SLIDE */}
            <div className='flex'>
              <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>


          </div>
        </div >

      </section >
    </>
  )
}