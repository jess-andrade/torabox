import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

//-- my imports

import create from "../../public/create.png";
import coding from "../../public/coding.png";

export default function About3() {
  const t = useTranslations("About");

  return (
    <>
      <section id="about">
        {/* main container */}
        <div className="flex flex-wrap bg-[#181b17] min-w-screen min-h-screen">
          {/* content */}
          <div className="flex flex-wrap min-w-screen flex-row items-center pt-20">
            {/* title, subtitle and text */}
            <div className="flex flex-wrap flex-row justify-start gap-x-40 gap-y-10">
              {/* ----- side image */}
              <div className="flex max-w-[400px] max-h-[160px] md:max-w-[600px] md:max-h-[300px] z-0 bg-[#fca04f] rounded-r-full pb-10">
                <div className="z-10 max-w-[220px] md:max-w-[400px] pl-28">
                  <motion.div
                    initial={{ x: -100, scale: 0.8, opacity: 0 }}
                    whileInView={{ x: 0, scale: 1.0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Image src={coding} alt="" />
                  </motion.div>
                </div>
              </div>

              {/* ------------------------------------- text */}

              <div className="flex flex-col flex-wrap max-w-[800px] gap-4 p-10 md:p-0">
                <div className="text-[#fca04f] text-[20px] md:text-md">
                  {t("businessHeader")}
                </div>
                <div className="text-[#ebeae4] font-bold text-4xl md:text-5xl tracking-[.10em] ">
                  {" "}
                  {t("businessTitle")}
                </div>
                <div className="h-1 w-24 bg-[#fca04f]"></div>
                <div className=" pt-4 text-xl md:text-2xl text-[#9a9793] font-bold">
                  {" "}
                  {t("businessSubtitle")}{" "}
                </div>
                <div className="text-xl text-[#9a9793] pb-20">
                  {t("businessDescription")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
