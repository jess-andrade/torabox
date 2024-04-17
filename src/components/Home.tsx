import * as React from "react";
import Image from 'next/image';
import { motion } from "framer-motion"

//-- my imports 
import toraboxlogo from '../../public/torabox-logo.png'
import DownButton from './DownButton';

export default function Home() {
  return (
    <>

      <section id="home">
        {/* main container */}
        <div className="flex bg-[url('../../public/greybricks.png')] min-w-full min-h-screen">

          {/* content */}
          <div className='flex min-w-full flex-row items-center justify-center'>

            <div className='flex flex-wrap gap-y-20 gap-x-44 items-center '>

              {/* title, subtitle and text */}

              <div className='flex flex-col'>
                <motion.div
                  initial={{ x: -100, scale: 0.8, opacity: 0 }}
                  whileInView={{ x: 0, scale: 1.0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div>
                    <div className='text-[#f1f5f9] font-bold text-6xl tracking-[.24em] '> TORABOX.</div>
                    <div className='text-[#f1f5f9] font-bold text-2xl pt-4'> TIRE SUAS IDEIAS DA CAIXINHA</div>
                  </div>
                </motion.div>
                {/* <div className='text-white text-justify max-w-xl pt-14  '>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsum, deserunt corrupti vitae fuga assumenda non dolores id sit illo temporibus. Voluptate voluptatibus saepe eaque fugit eius consequatur cupiditate aliquid.</p>
                  </div> */}

                <div className='flex justify-end'>     <DownButton /> </div>
              </div>



              {/* our logo-torabox*/}
              <motion.div whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.8 }} >
                <Image
                  className='w-72'
                  src={toraboxlogo}
                  alt="logo"
                  priority={false}
                />
              </motion.div>

            </div>

          </div>

        </div>



      </section >
    </>
  )
}
