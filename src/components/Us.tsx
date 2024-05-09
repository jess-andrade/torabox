import * as React from "react";
import Image from 'next/image';
import { motion } from "framer-motion"

//-- my imports 
import styles from '../styles/section.module.css'
import UsCard from './UsCard';

// -- Images
import gisa from '../../public/gisa.jpg'
import jess from '../../public/jess.jpg'
import john from '../../public/john.jpg'


const us = [
  {
    img: <Image src={john} alt='cat' width={300} height={300} style={{ borderRadius: 300 }} />,
    name: "João",
    subtitle: "FULL-STACK",
    description:
      "",
  },
  {
    img: <Image src={jess} alt='bolsa' width={300} height={300} style={{ borderRadius: 300 }} />,
    name: "Jessica",
    subtitle: "FRONT-END",
    description:
      "",
  },
  {
    img: <Image src={gisa} alt='otter' width={300} height={300} style={{ borderRadius: 300 }} />,
    name: "Gisa",
    subtitle: "UI/UX",
    description:
      "",
  },
]

export default function Home() {
  return (
    <>

      <section id="us">


        {/* main container */}
        <div className="flex flex-col bg-[#ebeae4] min-w-full min-h-80 pt-10 justify-center ">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            {/* content */}
            <div className='flex flex-wrap flex-row items-center justify-center gap-8'>

              <div>
                {/* title */}
                <h1 className='text-4xl font-bold text-[#262923] tracking-[.24em] pb-4 justify-center pt-14'>TECH TEAM</h1>
                {/* divider */}
                <div className='h-1 w-24 bg-[#fca04f] '></div>
              </div>


              <UsCard img={us[0].img} name={us[0].name} subtitle={us[0].subtitle} description={us[0].description} />

              <UsCard img={us[1].img} name={us[1].name} subtitle={us[1].subtitle} description={us[1].description} />

              <UsCard img={us[2].img} name={us[2].name} subtitle={us[2].subtitle} description={us[2].description} />
            </div>

          </motion.div>

        </div>
      </section >
    </>
  )
}
