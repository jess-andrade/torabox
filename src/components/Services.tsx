import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion"

//--MUI imports
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import HighlightAltIcon from "@mui/icons-material/HighlightAlt";

//-- my imports
import CardServices from "./CardServices";
import styles from "../styles/section.module.css";
import Typewriter from "./Typewriter";

//-- card content
const content = [
  {
    title: "SITE",
    text: "01 lorem ipsum",
    icon: <LanguageIcon color='primary' />,
  },
  {
    title: "MOBILE",
    text: "02 lorem ipsum",
    icon: <PhoneIphoneIcon color='primary' />,
  },
  {
    title: "DESIGN",
    text: "03 lorem ipsum",
    icon: <HighlightAltIcon color='primary' />,
  },
  {
    title: "Análise",
    text: "04 lorem ipsum",
    icon: <QueryStatsIcon />,
  },
];

export default function Services() {
  return (
    <>
      <section id="services">
        {/* main container */}
        <div className="min-h-[450px] bg-[#ffffff] text-[#181b17] max-w-full pb-10">

          {/* inclinated section */}
          <section className={styles.sectionrightwhite} />

          {/* content */}
          <div className="flex min-w-full items-center flex-col justify-center">

            {/* title */}
            <h1 className="text-3xl font-bold justify-center text-[#242424] tracking-[.24em] pb-4"> NOSSOS SERVIÇOS </h1>

            {/* subtitle w typewriter */}
            <div className='text-xl justify-center text-[#a6a29e] tracking-[.20em] pb-10 min-h-9'>
              <Typewriter text="como podemos te ajudar ?" delay={200} delayEnd={3000} />
            </div>

            {/* cards */}

            <div className="flex flex-wrap items-center justify-center flex-row gap-10 pb-10">

              {/* ------ card 01 */}
              <motion.div
                initial={{ y: 100, scale: 0.8, opacity: 0 }}
                whileInView={{ y: 0, scale: 1.0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <CardServices
                  title={content[0].title}
                  text={content[0].text}
                  icon={content[0].icon}
                />
              </motion.div>

              {/* ------ card 02 */}
              <motion.div
                initial={{ y: 100, scale: 0.8, opacity: 0 }}
                whileInView={{ y: 0, scale: 1.0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <CardServices
                  title={content[1].title}
                  text={content[1].text}
                  icon={content[1].icon}
                />
              </motion.div>

              {/* ------ card 03 */}
              <motion.div
                initial={{ y: 100, scale: 0.8, opacity: 0 }}
                whileInView={{ y: 0, scale: 1.0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <CardServices
                  title={content[2].title}
                  text={content[2].text}
                  icon={content[2].icon}
                />
              </motion.div>

              {/* ------ card 04 */}
              {/* <motion.div
                initial={{ y: 100, scale: 0.8, opacity: 0 }}
                whileInView={{ y: 0, scale: 1.0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <CardServices
                  title={content[3].title}
                  text={content[3].text}
                  icon={content[3].icon}
                />
              </motion.div> */}
            </div>

            <button className='bg-[#fca04f] p-3 rounded text-[#242424] text-sm font-bold'>
              FALE CONOSCO »
            </button>

          </div>
        </div>
      </section >
    </>
  );
}
