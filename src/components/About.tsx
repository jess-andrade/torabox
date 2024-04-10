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
        <div className='min-h-[450px] bg-slate-100  text-[#181b17] max-w-full'>

          {/* inclinated section */}
          <section className={styles.sectionright} />


          {/* content */}
          <div className='flex wrap flex-row items-start place-content-evenly text-justify pb-3.5'>

            {/* mission */}
            <div className='flex flex-col items-center max-w-80 gap-6'>
              <RocketLaunchIcon fontSize='large' />
              <h1 className='font-bold tracking-[.24em]'>MISSÃO</h1>
              <p className='text-sm'>Nossa missão é capacitar indivíduos e empresas por meio da tecnologia, fornecendo soluções inovadoras e personalizadas que impulsionem o crescimento, promovam a eficiência e facilitem a realização de objetivos.</p>
            </div>

            {/* values */}
            <div className='flex flex-col items-center max-w-80 gap-4'>
              <VolunteerActivismIcon fontSize='large' />
              <h1 className='font-bold tracking-[.24em]'>VALORES</h1>
              <p className='text-sm'>Colaboração, Comprometimento, Inovação e Aprendizado contínuo </p>


            </div>

            {/* vision */}
            <div className='flex flex-col items-center max-w-80 gap-4'>
              <VisibilityIcon fontSize='large' />
              <h1 className='font-bold tracking-[.24em]'>VISÃO</h1>
              <p className='text-sm'> Almejamos um futuro onde nossa equipe seja reconhecida por sua capacidade de transformar desafios em oportunidades e criar impacto positivo através da tecnologia. </p>

            </div>
          </div>
          <MyStepper />
        </div>

        <section className={styles.sectionright} />

      </section >
    </>
  )
}
