import * as React from "react";
import Image from 'next/image';
import { motion } from "framer-motion"

//-- my imports 
import styles from "../styles/section.module.css";
import coding from '../../public/coding.png'
import create from '../../public/create.png'
import teamwork from '../../public/teamwork.png'

export default function About4() {
  return (
    <>

      <section id="home">
        {/* main container */}
        <div className="flex flex-wrap bg-[#262923] min-w-full min-h-screen">

          {/* inclinated section */}
          {/* <section className={styles.sectionright} /> */}


          {/* content */}
          <div className='flex flex-wrap min-w-full flex-row items-center justify-end'>


            {/* title, subtitle and text */}

            <div className='flex flex-wrap flex-row justify-center gap-x-40'>

              <div className='flex flex-col flex-wrap max-w-[800px] gap-4 '>
                <div className='text-[#fca04f] text-sm'>Para você</div>
                <div className='text-[#ebeae4] font-bold text-5xl tracking-[.10em] '> Tem uma ideia inovadora para tirar da caixinha ?</div>
                <div className='h-1 w-24 bg-[#fca04f]'></div>
                <div className=' pt-4 text-xl text-[#9a9793]'>Lorem ipsum dolor sit amet. Ea architecto tempora nam nostrum rerum aut voluptatem obcaecati aut similique sunt est dolores </div>
              </div>

              <motion.div
                initial={{ x: 100, scale: 0.8, opacity: 0 }}
                whileInView={{ x: 0, scale: 1.0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className='flex w-[600px] h-[300px] z-0 bg-[#fca04f] rounded-l-full '>
                  <div className='z-10 w-[400px] pr-24'><Image src={teamwork} alt='' /></div>
                </div>
              </motion.div>


              {/* <div className='text-white text-justify max-w-xl pt-14  '>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsum, deserunt corrupti vitae fuga assumenda non dolores id sit illo temporibus. Voluptate voluptatibus saepe eaque fugit eius consequatur cupiditate aliquid.</p>
                  </div> */}

            </div>

          </div>

        </div>



      </section >
    </>
  )
}
