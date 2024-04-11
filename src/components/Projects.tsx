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
        <div className="flex bg-slate-100 min-w-full min-h-screen text-black">
          {/* content */}
          <div className='flex min-w-full items-center justify-center '>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>

      </section >
    </>
  )
}