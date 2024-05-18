import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

//-- my imports
import toraboxlogo from "../../public/torabox-logo.png";
import codeBg from "../../public/wpp2.png";
import DownButton from "./DownButton";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <>
      <section id="home">
        {/* main container */}
        <div className="flex flex-wrap flex-row bg-[url('/wpp2.png')] w-full min-h-screen">
          {/* content */}
          <div className="flex min-w-full flex-row items-center justify-around ">
            {/* title, subtitle and text */}
            <div className="flex flex-wrap min-w-[50%] flex-col justify-center gap-y-20">
              <motion.div
                initial={{ x: -100, scale: 0.8, opacity: 0 }}
                whileInView={{ x: 0, scale: 1.0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex flex-col ">
                  <div className="flex flex-row text-[#f1f5f9] font-bold text-5xl tracking-[.24em]">
                    {" "}
                    TORABOX <p className="text-[#fca04f]"> . </p>
                  </div>
                  <div className="text-[#f1f5f9] text-xl pt-4">
                    {" "}
                    {t("description")}
                  </div>
                </div>
              </motion.div>

              <Link href={`#about`} className=" flex self-end">
                <DownButton />
              </Link>
            </div>
            <div className="flex min-w-[400px] bg-orange-500"></div>
          </div>
        </div>
      </section>
    </>
  );
}
