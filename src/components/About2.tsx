import * as React from "react";
import Image from 'next/image';

// -- MUI imports
import MyStepper from './MyStepper';
import NewStepper from './NewStepper';

//-- my imports 
import styles from '../styles/section.module.css'

export default function About2() {
  return (
    <>

      <section id="services">
        {/* main container */}
        <div className="flex min-w-full min-h-screen">

          {/* content */}
          <div className='flex wrap min-w-full flex-row items-center justify-center'>
            <div className='flex gap-x-52 '>
              <NewStepper />
            </div>
          </div>
        </div>

      </section >
    </>
  )
}
