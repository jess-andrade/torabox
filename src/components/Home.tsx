import * as React from "react";
import Image from 'next/image';
import { motion } from "framer-motion"

//-- my imports 
import toraboxlogo from '../../public/torabox-logo.png'

export default function Home() {
  return (
    <>

      <section id="home">
        {/* main container */}
        <div className="flex bg-[url('../../public/greybricks.png')] min-w-full min-h-screen">

          {/* content */}
          <div className='flex min-w-full flex-row items-center justify-center'>

            <div className='flex wrap gap-x-52 '>

              {/* title, subtitle and text */}
              <motion.div
                animate={{ x: 10 }}
                transition={{ from: -300, type: 'spring', duration: 3 }}
              >
                <div className='flex-col'>
                  <div className='text-white font-bold text-6xl tracking-[.24em]'> TORABOX</div>
                  <div className='text-white font-bold text-2xl pt-4'> SUBITITLE WE R FABULOUS</div>
                  <div className='text-white text-justify max-w-xl pt-14  '>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsum, deserunt corrupti vitae fuga assumenda non dolores id sit illo temporibus. Voluptate voluptatibus saepe eaque fugit eius consequatur cupiditate aliquid.</p>
                  </div>
                </div>
              </motion.div>

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
