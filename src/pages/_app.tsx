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
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";

export async function getStaticProps(context: any) {
  return {
    props: {
      messages: (await import(`../../messages/${context.locale}.json`)).default,
    },
  };
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Europe/Vienna"
      messages={pageProps.messages}
    >
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
