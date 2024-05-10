import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import woman from '../../public/womandark.png'

export default function Contact() {
  return (
    <>
      <section id="contact">
        {/* main container */}
        <div className="flex flex-wrap bg-[#262923] min-w-full min-h-screen justify-center">

          {/* content */}
          <div className="flex flex-wrap flex-row items-center min-w-full pt-20 justify-around gap-y-8 ">

            {/* --------------img */}
            <div className='w-[420px]'>
              <Image src={woman} alt='contact' className='rounded-lg' />
            </div>
            {/* --------------form */}

            <div className='flex flex-wrap min-w-[55%]'>
              <form className="container">

                <div className='flex flex-col justify-center items-center gap-6'>
                  <h1 className='text-[#fca04f] tracking-[.20em] text-2xl'>SOLICITAR ORÇAMENTO</h1>
                  {/* divider */}
                  <div className='h-1 w-24 bg-[#fca04f] '></div>
                </div>

                <div className="email block">
                  <label htmlFor="frm-email">E-mail *</label>
                  <input
                    id="frm-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="block phone">
                  <label htmlFor="frm-phone">Telefone</label>
                  <input
                    id="frm-phone"
                    type="text"
                    name="phone"
                    autoComplete="tel"
                    required
                  />
                </div>
                <div className="name block">
                  <div>
                    <label htmlFor="frm-first">Nome Completo *</label>
                    <input
                      id="frm-first"
                      type="text"
                      name="first"
                      autoComplete="given-name"
                      required
                    />
                  </div>

                </div>
                <div className="message block">
                  <label htmlFor="frm-message">Message *</label>
                  <textarea id="frm-message" rows="6" name="message"></textarea>
                </div>
                <div className="button block">
                  <button type="submit">Enviar</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
