// @ts-nocheck

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import woman from "../../public/womandark.png";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

export default function Contact() {
  const [openModal, setOpenModal] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const [modalText, setModalText] = React.useState("");

  const handleOpen = () => setOpenModal(!openModal);

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

      setOpenModal(true);
      setModalTitle(`Seu e-mail foi enviado com sucesso!`);
      setModalText(
        `${
          e.target.name.value.split(" ")[0]
        }, entraremos em contato assim que possível!`
      );

      // e.target.reset();
    } catch (err) {
      setOpenModal(true);
      setModalTitle(`Ops! Não foi possível enviar seu e-mail`);
      setModalText(`Mas não se preocupe. Tente novamente mais tarde!`);
    }
  }

  return (
    <section id="contact">
      {/* main container */}
      <div className="flex flex-wrap bg-[#262923] min-w-full min-h-screen justify-center">
        {/* content */}
        <div className="flex flex-wrap flex-row items-center min-w-full pt-20 justify-around gap-y-8 ">
          {/* --------------img */}
          <div className="w-[420px] hidden lg:block">
            <Image src={woman} alt="contact" className="rounded-lg" />
          </div>
          {/* --------------form */}

          <div className="flex flex-wrap min-w-[55%]">
            <form className="container" onSubmit={handleSubmit}>
              <div className="flex flex-col justify-center items-center gap-6 ">
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

      <Dialog open={openModal} handler={handleOpen}>
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            {modalTitle}
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-16 w-16 text-red-500"
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clipRule="evenodd"
            />
          </svg>
          <Typography color="blue-gray" variant="h4">
            {modalText}
          </Typography>
          <Typography className="text-center font-normal">
            Atenciosamente, equipe Torabox!
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            close
          </Button>
        </DialogFooter>
      </Dialog>
    </section>
  );
}
