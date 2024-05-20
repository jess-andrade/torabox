import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

//-- my imports
import styles from "../styles/section.module.css";
import UsCard from "./UsCard";
import logo from '../../public/logo.png'

// -- MUI
import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <>
      <section id="footer">
        {/* main container */}
        <div className="flex flex-col bg-[#181b17] min-w-full min-h-60 pt-10 justify-center pb-10">
          {/* content */}
          <div className="flex flex-wrap flex-row items-center justify-around">
            {/* ------------ title */}

            <div className="flex flex-row w-[200px]">
              <Image src={logo} alt="logo" />
            </div>

            {/* ------------ info */}
            <div className="flex flex-col gap-4 text-[#ebeae4]">
              <p>Copyright © 2024 TORABOX - {t("copyright")}.</p>

              <div className="flex flex-row justify-around">
                <p>
                  <EmailIcon color="primary" /> torabox98@gmail.com{" "}
                </p>
                <p>
                  <FmdGoodIcon color="primary" /> Salvador-BA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
