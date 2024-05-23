import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

//-- my imports
import logo from "../../public/logo.png";
import codeBg from "../../public/wpp2.png";
import DownButton from "./DownButton";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <>
      <section id="home">
        {/* main container */}
        <div className="flex flex-wrap flex-row bg-[url('/wpp2.png')] min-w-screen min-h-screen">
          {/* content */}
          <div className="flex w-screen md:min-w-full flex-row items-center  md:justify-around  ">
            {/* title, subtitle and text */}
            <div className="flex flex-wrap flex-col justify-center md:min-w-[50%] ">
              <motion.div
                initial={{ x: -100, scale: 0.8, opacity: 0 }}
                whileInView={{ x: 0, scale: 1.0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex flex-col w-[300px] md:w-[340px]">
                  <Image src={logo} alt="logo" />
                  {/* <div className="flex flex-row text-[#f1f5f9] font-bold text-5xl tracking-[.24em]">
                    {" "}
                    TORABOX <p className="text-[#fca04f]"> . </p>
                  </div>
                  <div className="text-[#f1f5f9] text-xl pt-4">
                    {" "}
                    {t("description")}
                  </div> */}
                </div>
              </motion.div>

              <Link href={`#about`} className=" flex self-center md:self-end">
                <DownButton text={t("learnMoreButton")} />
              </Link>
            </div>
            <div className="flex min-w-[400px]"></div>
          </div>
        </div>
      </section>
    </>
  );
}
