import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

//-- my imports

import create from "../../public/create.png";
import coding from "../../public/coding.png";

export default function About3() {
  return (
    <>
      <section id="home">
        {/* main container */}
        <div className="flex flex-wrap bg-[#181b17] min-w-full min-h-screen">
          {/* content */}
          <div className="flex flex-wrap min-w-full flex-row items-center ">
            {/* title, subtitle and text */}

            <div className="flex flex-wrap flex-row justify-start gap-x-40">
              {/* ----- side image */}
              <motion.div
                initial={{ x: -100, scale: 0.8, opacity: 0 }}
                whileInView={{ x: 0, scale: 1.0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex max-w-[600px] max-h-[300px] z-0 bg-[#fca04f] rounded-r-full pb-10">
                  <div className="z-10 max-w-[400px] pl-28">
                    <Image src={coding} alt="" />
                  </div>
                </div>
              </motion.div>

              {/* ----- text */}
              <div className="flex flex-col flex-wrap max-w-[800px] gap-4">
                <div className="text-[#fca04f] text-sm"> Para seu negócio</div>
                <div className="text-[#ebeae4] font-bold text-5xl tracking-[.10em] ">
                  {" "}
                  Precisando de uma modernização tecnológica em seu negócio ?
                </div>
                <div className="h-1 w-24 bg-[#fca04f]"></div>
                <div className=" pt-4 text-2xl text-[#9a9793] font-bold">
                  {" "}
                  Não fique para trás{" "}
                </div>
                <div className="text-xl text-[#9a9793] pb-20">
                  Se seu negócio esta precisando de um site, um sistema web ou
                  até mesmo um aplicativo. Deixa que cuidamos disso
                </div>
              </div>

              {/* <div className='text-white text-justify max-w-xl pt-14  '>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsum, deserunt corrupti vitae fuga assumenda non dolores id sit illo temporibus. Voluptate voluptatibus saepe eaque fugit eius consequatur cupiditate aliquid.</p>
                  </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
