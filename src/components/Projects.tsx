import * as React from "react";
import { useState } from "react";


import { EmblaOptionsType } from 'embla-carousel'

//-- my imports 
import EmblaCarousel from './EmblaCarousel';

export default function Projects() {

  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <>
      <section id="projects">

        {/* main container */}
        <div className="flex flex-col bg-slate-100 min-w-full min-h-screen text-black items-center justify-center">

          {/* content */}

          {/* title */}
          <h1 className='text-3xl font-bold justify-center text-[#242424] tracking-[.24em] pb-20'>PORTFÓLIO</h1>
          <div className='flex flex-wrap gap-4'>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>

      </section >
    </>
  )
}