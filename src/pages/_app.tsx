import React, { useEffect, useState } from 'react';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme } from '@mui/material';

import { scroll } from "framer-motion/dom"

import '../styles/embla.css'
import '../styles/base.css'

import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {


  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
