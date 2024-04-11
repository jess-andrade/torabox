import * as React from "react";
import Image from 'next/image';

//-- my imports 
import CardServices from './CardServices'

//-- card content
const content = [
  {
    title: "First card",
    text: "01 lorem ipsum",
  },
  {
    title: "Second card",
    text: "02 lorem ipsum",
  },
  {
    title: "Third card",
    text: "03 lorem ipsum",
  },
  {
    title: "Fourth card",
    text: "04 lorem ipsum",
  },
]

export default function Services() {
  return (
    <>

      <section id="services">

        {/* main container */}
        <div className="flex bg-[url('../../public/greybricks.png')] min-w-full min-h-screen">

          {/* content */}
          <div className='flex min-w-full items-center flex-col justify-center'>

            {/* title */}
            <h1 className='text-3xl font-bold justify-center text-slate-100 tracking-[.24em] pb-20'>NOSSOS SERVIÇOS</h1>

            {/* cards */}
            <div className='flex flex-wrap items-center justify-center flex-row gap-10 w-full m-w-60'>
              <CardServices title={content[0].title} text={content[0].text} />
              <CardServices title={content[1].title} text={content[1].text} />
              <CardServices title={content[2].title} text={content[2].text} />
              <CardServices title={content[3].title} text={content[3].text} />
            </div>


          </div>
        </div>
      </section >
    </>
  )
}
