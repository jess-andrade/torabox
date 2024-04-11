import * as React from "react";
import Image from 'next/image';

//-- my imports 
import CardServices from './CardServices'

export default function Services() {
  return (
    <>

      <section id="services">
        {/* main container */}
        <div className="flex bg-[url('../../public/greybricks.png')] min-w-full min-h-screen">

          {/* content */}
          <div className='flex min-w-full flex-col items-start justify-center p-20'>

            <h1 className='text-3xl font-bold justify-center text-slate-100 tracking-[.24em]'>NOSSOS SERVIÇOS</h1>

            <div className='flex flex-wrap flex-row gap-x-4 w-full m-w-60'>
              <CardServices title='title' text='pipipipopo' />
              <CardServices title='title' text='pipipipopo' />
              <CardServices title='title' text='pipipipopo' />

            </div>


          </div>
        </div>
      </section >
    </>
  )
}
