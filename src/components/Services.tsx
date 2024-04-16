import * as React from "react";
import Image from 'next/image';

//--MUI imports
import LanguageIcon from '@mui/icons-material/Language';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';

//-- my imports 
import CardServices from './CardServices'
import styles from '../styles/section.module.css'

//-- card content
const content = [
  {
    title: "Site",
    text: "01 lorem ipsum",
    icon: <LanguageIcon />,
  },
  {
    title: "Aplicativo Mobile",
    text: "02 lorem ipsum",
    icon: <PhoneIphoneIcon />,
  },
  {
    title: "Prototipação de Projeto",
    text: "03 lorem ipsum",
    icon: <HighlightAltIcon />,
  },
  {
    title: "Análise",
    text: "04 lorem ipsum",
    icon: <QueryStatsIcon />,
  },
]

export default function Services() {
  return (
    <>

      <section id="services">

        {/* main container */}
        <div className='min-h-[450px] bg-slate-100  text-[#181b17] max-w-full'>

          {/* inclinated section */}
          <section className={styles.sectionright} />

          {/* content */}
          <div className='flex min-w-full items-center flex-col justify-center'>

            {/* title */}
            <h1 className='text-3xl font-bold justify-center text-[#242424] tracking-[.24em] pb-20'>NOSSOS SERVIÇOS</h1>

            {/* cards */}
            <div className='flex flex-wrap items-center justify-center flex-row gap-10 w-full m-w-60'>
              <CardServices title={content[0].title} text={content[0].text} icon={content[0].icon} />
              <CardServices title={content[1].title} text={content[1].text} icon={content[1].icon} />
              <CardServices title={content[2].title} text={content[2].text} icon={content[2].icon} />
              <CardServices title={content[3].title} text={content[3].text} icon={content[3].icon} />
            </div>
          </div>
        </div>
      </section >

    </>
  )
}
