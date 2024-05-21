import * as React from "react";
import { motion } from "framer-motion";

//-- carousel
import { EmblaOptionsType } from "embla-carousel";

//-- my imports
import EmblaCarousel from "./EmblaCarousel";
import Typewriter from "./Typewriter";

import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Portfolio");

  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <section id="projects">
        {/* main container */}
        <div className="flex flex-row flex-wrap bg-[#000000] min-w-full min-h-[500px] text-[#181b17] items-center justify-center ">
          {/*------ content */}
          <div className="flex flex-wrap flex-row items-center gap-x-32 pt-16 pb-20">
            {/*------ text */}
            <motion.div
              initial={{ x: -100, scale: 0.8, opacity: 0 }}
              whileInView={{ x: 0, scale: 1.0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col pl-5 md:pl-0">
                <div className="flex flex-col justify-center w-full items-center md:items-start">
                  {/* title */}
                  <h1 className="text-3xl font-bold justify-center text-[#f1f5f9] tracking-[.24em] pb-4">
                    {t("title")}
                  </h1>
                  {/* divider */}
                  <div className="h-1 w-24 bg-[#fca04f] "></div>
                </div>
                {/* subtitle */}
                <h2 className="flex flex-wrap w-full text-xl font-bold text-[#a6a29e] tracking-[.20em] justify-center pt-6">
                  {t("subtitle")}
                </h2>
              </div>
            </motion.div>

            {/*------ SLIDE */}
            <div className="flex">
              <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
