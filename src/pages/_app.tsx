import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { scroll } from "framer-motion/dom";

import "../styles/embla.css";
import "../styles/base.css";

import Layout from "../components/Layout";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../utils/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
