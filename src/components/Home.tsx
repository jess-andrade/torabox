import * as React from "react";
import Image from 'next/image';

//-- my imports 
import toraboxlogo from '../../public/torabox-logo.png'


export default function Home() {
  return (
    <>
      <section id="home">
        <div className="bg-[url('../../public/blackbricks4.png')] bg-fixed min-w-screen min-h-screen">
          {/* <div className="bg-neutral-900 bg-fixed min-w-screen min-h-screen"> */}

          {/* content */}
          <div className='flex flex-row items-center place-content-evenly pt-24 '>

            {/* title, subtitle and text */}
            <div className='flex-col'>
              <div className='text-white font-bold text-6xl'> TORABOX</div>
              <div className='text-white font-bold text-2xl pt-4'> SUBITITLE WE R FABULOUS</div>
              <div className='text-white text-justify max-w-2xl pt-14 '>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsum, deserunt corrupti vitae fuga assumenda non dolores id sit illo temporibus. Voluptate voluptatibus saepe eaque fugit eius consequatur cupiditate aliquid.</p>
              </div>
            </div>

            {/* our logo-torabox*/}
            <Image
              className='w-1/4'
              src={toraboxlogo}
              alt="logo"
              priority={false}
            />
          </div>
        </div>
      </section >
    </>
  )
}
