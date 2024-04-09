import * as React from "react";

// -- MUI imports
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MyStepper from './MyStepper';

//-- my imports 
import styles from '../styles/section.module.css'
import NewStepper from './NewStepper';


export default function About() {
  return (
    <>
      <section id="about">
        {/* main container */}
        <div className='min-w-ful min-h-[410px] bg-slate-100  text-[#181b17]'>

          {/* inclinated section */}
          <section className={styles.sectionright} />


          {/* content */}
          <div className='flex wrap flex-row items-center place-content-evenly justify-self-center text-justify '>

            {/* mission */}
            <div className='flex wrap flex-col items-center max-w-80 gap-6'>
              <RocketLaunchIcon fontSize='large' />
              <h1 className='font-bold tracking-[.24em]'>MISSÃO</h1>
              <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at eleifend enim. Cras efficitur ultrices leo sed ultrices. Pellentesque placerat nibh a augue euismod, vitae sodales neque pellentesque</p>
            </div>

            {/* values */}
            <div className='flex wrap flex-col items-center max-w-80 gap-4'>
              <VolunteerActivismIcon fontSize='large' />
              <h1 className='font-bold tracking-[.24em]'>VALORES</h1>
              <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at eleifend enim. Phasellus at eleifend enim. Phasellus at eleifend enim. </p>
            </div>

            {/* vision */}
            <div className='flex wrap flex-col items-center max-w-80 gap-4'>
              <VisibilityIcon fontSize='large' />
              <h1 className='font-bold tracking-[.24em]'>VISÃO</h1>
              <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at eleifend enim. Cras efficitur ultrices leo sed ultrices. </p>

            </div>
          </div>
          <MyStepper />
        </div>

        <section className={styles.sectionright} />

      </section >
    </>
  )
}
