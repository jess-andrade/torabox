import * as React from "react";
import Image from 'next/image';
import { motion } from "framer-motion"

//-- my imports 
import styles from '../styles/section.module.css'

export default function Home() {
  return (
    <>

      <section id="us">
        {/* inclinated section */}
        <section className={styles.sectionright} />

        {/* main container */}
        <div className="flex bg-[url('../../public/greybricks.png')] min-w-full min-h-screen">

          {/* content */}
          <div className='flex min-w-full flex-row items-center justify-center'>


          </div>

        </div>
      </section >
    </>
  )
}
