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
        <div className="flex flex-row flex-wrap bg-[#f1f5f9] min-w-full min-h-[500px] text-[#181b17] items-center justify-center gap-24 ">

          {/* content */}

          <div className='flex flex-col'>
            {/* title */}
            <h1 className='text-4xl font-bold text-[#181b17] tracking-[.24em] pb-4justify-center'>PORTFÓLIO</h1>
            {/* subtitle */}
            <h2 className='text-xl font-bold text-[#a6a29e] tracking-[.20em] justify-center'>Conheça nossos projetos</h2>
          </div>

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