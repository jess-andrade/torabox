// @ts-nocheck

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import woman from "../../public/womandark.png";

export default function Contact() {
  async function handleSubmit(e: any) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert("Thanks for contacting us, we will get back to you soon!");
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }
  }

  return (
    <>
      <section id="contact">
        {/* main container */}
        <div className="flex flex-wrap bg-[#262923] min-w-full min-h-screen justify-center">
          {/* content */}
          <div className="flex flex-wrap flex-row items-center min-w-full pt-20 justify-around gap-y-8 ">
            {/* --------------img */}
            <div className="w-[420px]">
              <Image src={woman} alt="contact" className="rounded-lg" />
            </div>
            {/* --------------form */}

            <div className="flex flex-wrap min-w-[55%]">
              <form className="container" onSubmit={handleSubmit}>
                <div className="flex flex-col justify-center items-center gap-6">
                  <h1 className="text-[#fca04f] tracking-[.20em] text-2xl">
                    SOLICITAR ORÇAMENTO
                  </h1>
                  {/* divider */}
                  <div className="h-1 w-24 bg-[#fca04f] "></div>
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
                    <label htmlFor="frm-name">Nome Completo *</label>
                    <input
                      id="frm-name"
                      type="text"
                      name="name"
                      autoComplete="given-name"
                      required
                    />
                  </div>
                </div>
                <div className="message block">
                  <label htmlFor="frm-message">Mensagem *</label>
                  <textarea
                    id="frm-message"
                    style={{ height: 160 }}
                    name="message"
                  ></textarea>
                </div>
                <div className="button block mt-8">
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
