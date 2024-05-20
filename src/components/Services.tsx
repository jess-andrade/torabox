import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

//--MUI imports
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import HighlightAltIcon from "@mui/icons-material/HighlightAlt";
import BrushIcon from "@mui/icons-material/Brush";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";

//-- my imports
import CardServices from "./CardServices";
import styles from "../styles/section.module.css";
import Typewriter from "./Typewriter";

import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("Services");

  //-- card content
  const content = [
    {
      title: t("websiteTitle"),
      text: t("websiteDescription"),
      icon: <LanguageIcon color="primary" fontSize="large" />,
    },
    {
      title: t("webAppTitle"),
      text: t("webAppDescription"),
      icon: <LaptopMacIcon color="primary" fontSize="large" />,
    },
    {
      title: t("mobileAppTitle"),
      text: t("mobileAppDescription"),
      icon: <PhoneIphoneIcon color="primary" fontSize="large" />,
    },
    {
      title: t("designTitle"),
      text: t("designDescription"),
      icon: <BrushIcon color="primary" fontSize="large" />,
    },
    {
      title: "Análise",
      text: "04 lorem ipsum",
      icon: <QueryStatsIcon />,
    },
  ];

  return (
    <>
      <section id="services">
        {/* main container */}
        <div className="min-h-[550px] bg-[#181b17] text-[#181b17] max-w-260 lg:max-w-full pb-10 pt-20">
          {/* inclinated section */}
          {/* <section className={styles.sectionright} /> */}

          {/* content */}
          <div className="flex min-w-full items-center flex-col justify-center ">
            <div>
              {/* title */}
              <h1 className="text-3xl font-bold justify-center text-[#f1f5f9] tracking-[.24em] pb-4">
                {" "}
                {t("title")}{" "}
              </h1>

              {/* divider */}
              <div className="h-1 w-24 bg-[#fca04f] "></div>

              {/* subtitle w typewriter */}
              <div className="text-xl justify-center text-[#f4f4f4] tracking-[.20em] pb-10 min-h-9 pt-6">
                <Typewriter text={t("subtitle")} delay={200} delayEnd={3200} />
              </div>
            </div>

            {/* cards */}

            <div className="flex flex-wrap items-center justify-center flex-row gap-10 pb-10 z-10">
              {/* ------ card 01 */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1.0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <CardServices
                  title={content[0].title}
                  text={content[0].text}
                  icon={content[0].icon}
                />
              </motion.div>

              {/* ------ card 01 */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1.0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <CardServices
                  title={content[1].title}
                  text={content[1].text}
                  icon={content[1].icon}
                />
              </motion.div>

              {/* ------ card 02 */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1.0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <CardServices
                  title={content[2].title}
                  text={content[2].text}
                  icon={content[2].icon}
                />
              </motion.div>

              {/* ------ card 03 */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1.0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <CardServices
                  title={content[3].title}
                  text={content[3].text}
                  icon={content[3].icon}
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

            <Link href={`#contact`}>
              <button className="bg-[#9e6627] p-3 rounded-[20px] text-[#f4f4f4] text-sm font-bold pl-10 pr-10">
                {t("budgetButton")}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
