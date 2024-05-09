import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { createTheme } from "@mui/material";

import { scroll } from "framer-motion/dom";

import "../styles/embla.css";
import "../styles/base.css";

import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
