import * as React from "react";

//-- my imports 
import styles from '../styles/section.module.css'


export default function About() {
  return (
    <>
      <section id="about">
        <div className='min-w-full min-h-screen bg-neutral-900'>
          <section className={styles.sectionright}>teste</section>
          <div className='text-black font-bold text-4xl pt-4 text-center mt-10'> ABOUT</div>
        </div>
        <section className={styles.sectionleft}> teste</section>
      </section >
    </>
  )
}
