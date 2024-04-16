import * as React from "react";
import { useState } from "react";

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
        <div className="flex flex-row bg-[#242424] min-w-full min-h-[500px] text-black items-center justify-center pb-10">

          {/* content */}

          {/* title */}
          <h1 className='text-3xl font-bold justify-center text-[#f1f5f9] tracking-[.24em] pb-4 pt-20'>PORTFÓLIO</h1>

          {/* subtitle w typewriter */}
          {/* <div className='text-xl justify-center text-[#a6a29e] tracking-[.20em] pb-10 min-h-9'>
            <Typewriter text="Conheça nossos projetos" delay={200} delayEnd={3000} />
          </div> */}

          <div className='flex flex-wrap gap-4'>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>

      </section >
    </>
  )
}