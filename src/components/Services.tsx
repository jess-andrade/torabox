import * as React from "react";
import Image from 'next/image';

//-- my imports 

export default function Services() {
  return (
    <>

      <section id="services">
        {/* main container */}
        <div className="flex min-w-full min-h-screen">

          {/* content */}
          <div className='flex wrap flex-row items-center place-content-evenly '>

            {/* title, subtitle and text */}
            <div className='text-white font-bold text-6xl tracking-[.24em]'> NOSSOS SERVIÇOS</div>


          </div>
        </div>
      </section >
    </>
  )
}
