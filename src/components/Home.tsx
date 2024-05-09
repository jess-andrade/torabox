import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

//-- my imports
import toraboxlogo from "../../public/torabox-logo.png";
import DownButton from "./DownButton";

export default function Home() {
  return (
    <>
      <section id="home">
        {/* main container */}
        <div className="flex flex-wrap flex-row bg-[url('../../public/wpp2.png')] min-w-full min-h-screen">

          {/* content */}
          <div className="flex min-w-full flex-rox items-center justify-around ">
            <div className="flex gap-x-44 items-center p-5 ">

              {/* title, subtitle and text */}
              <div className="flex min-w-full flex-wrap flex-col gap-y-28">
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
                      Soluções inteligêntes e tecnológicas para você e seu
                      negócio.
                    </div>
                  </div>
                </motion.div>

                <DownButton />

              </div>
            </div>


            <div className='flex min-w-[400px] bg-orange-500'></div>
          </div>


        </div>
      </section>
    </>
  );
}
