// @ts-nocheck

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import woman from "../../public/call.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SmsFailedIcon from "@mui/icons-material/SmsFailed";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@mui/material";

import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  const [openModal, setOpenModal] = React.useState(false);
  const [clientName, setClientName] = React.useState("");
  const [sendEmailStatus, setSendEmailStatus] = React.useState("fail");
  const [emailLoading, setEmailLoading] = React.useState(false);

  const modalProps = {
    success: {
      title: t("modalSuccessTitle"),
      text: t("modalSuccessText", { name: clientName }),
      color: "#e8e8e8",
      icon: <EmailOutlinedIcon sx={{ color: "#e8e8e8", fontSize: 40 }} />,
    },
    fail: {
      title: t("modalFailTitle"),
      text: t("modalFailText"),
      color: "#e8e8e8",
      icon: <SmsFailedIcon sx={{ color: "#e8e8e8", fontSize: 40 }} />,
    },
  };

  const handleOpen = () => setOpenModal(!openModal);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setEmailLoading(true);
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        setEmailLoading(false);
        setSendEmailStatus("fail");
        setOpenModal(true);
      }

      setClientName(e.target.name.value.split(" ")[0]);
      e.target.reset();
      setEmailLoading(false);
      setSendEmailStatus("success");
      setOpenModal(true);

      // e.target.reset();
    } catch (err) {
      setEmailLoading(false);
      setSendEmailStatus("fail");
      setOpenModal(true);
    }
  }

  return (
    <section id="contact">
      {/* main container */}
      <div className="flex flex-wrap bg-[url('/black_paper.png')] min-w-full min-h-screen justify-center">
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
                <h1 className="text-[#e8e8e8] tracking-[.20em] text-2xl">
                  {t("title")}
                </h1>
                {/* divider */}
                <div className="h-1 w-24 bg-[#fca04f] "></div>
              </div>

              <div className="email block">
                <label htmlFor="frm-email">{t("email")} *</label>
                <input
                  id="frm-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="block phone">
                <label htmlFor="frm-phone">{t("phone")}</label>
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
                  <label htmlFor="frm-name">{t("name")} *</label>
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
                <label htmlFor="frm-message">{t("message")} *</label>
                <textarea
                  id="frm-message"
                  style={{ height: 160 }}
                  name="message"
                ></textarea>
              </div>
              <div className="button block mt-8">
                <Button type="submit" loading={emailLoading}>
                  {t("submitButton")}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* --------------------------MODAL */}

      <Dialog open={openModal} handler={handleOpen} className="bg-[#181b17]">
        <DialogHeader>
          <Typography variant="h5" color="#e8e8e8">
            {modalProps[sendEmailStatus].title}
          </Typography>
        </DialogHeader>

        <DialogBody divider className="grid place-items-center gap-4">
          {modalProps[sendEmailStatus].icon}
          <Typography variant="h5" color="#e8e8e8">
            {modalProps[sendEmailStatus].text}
          </Typography>
          <Typography className="text-center font-normal" color="#fca04f">
            {t("modalEndingPhrase")}
          </Typography>
        </DialogBody>

        <DialogFooter className="space-x-2">
          <Button variant="outlined" color="white" onClick={handleOpen}>
            Ok!
          </Button>
        </DialogFooter>
      </Dialog>
    </section>
  );
}
