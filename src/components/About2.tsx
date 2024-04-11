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
        <div className="flex min-w-full min-h-screen items-center justify-center">

          {/* content */}
          <div className='flex wrap min-w-full flex-row'>


            <NewStepper />


          </div>
        </div>

      </section >
    </>
  )
}
