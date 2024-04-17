import * as React from "react";
import Image from 'next/image';

//-- my imports 
import styles from '../styles/section.module.css'
import NewStepper from './NewStepper';


export default function About2() {
  return (
    <>

      <section id="services">

        {/* main container */}
        <div className="flex min-w-full min-h-[700px] items-center justify-center">

          {/* content */}
          <div className='flex flex-col min-w-full items-center justify-center text-slate-50'>

            {/* title */}
            <h1 className="text-3xl font-bold justify-center text-[#f1f5f9] tracking-[.24em] pb-14"> PROCESSO COMERCIAL </h1>
            <NewStepper />
          </div>
        </div>

      </section >



    </>
  )
}
