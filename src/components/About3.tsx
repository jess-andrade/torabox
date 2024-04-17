import * as React from "react";
import Image from 'next/image';
import { motion } from "framer-motion"

//-- my imports 
import toraboxlogo from '../../public/torabox-logo.png'
import DownButton from './DownButton';

export default function About3() {
  return (
    <>

      <section id="home">
        {/* main container */}
        <div className="flex bg-[#181b17] min-w-full min-h-screen">

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
                    <div className='text-[#f1f5f9] font-bold text-3xl tracking-[.20em] '> Precisando de um site? </div>
                    <div className='text-[#f1f5f9] font-bold text-2xl pt-4'> Criando soluções tecnologicas para você</div>
                  </div>
                </motion.div>
                {/* <div className='text-white text-justify max-w-xl pt-14  '>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsum, deserunt corrupti vitae fuga assumenda non dolores id sit illo temporibus. Voluptate voluptatibus saepe eaque fugit eius consequatur cupiditate aliquid.</p>
                  </div> */}

              </div>

            </div>

          </div>

        </div>



      </section >
    </>
  )
}
