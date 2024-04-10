import React, { useEffect, useState } from 'react';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme } from '@mui/material';


import Layout from "../components/Layout";
// import { boxOpenedContext } from '@/context/boxOpenedContext';

export default function App({ Component, pageProps }: AppProps) {

  // const [boxOpened, setBoxOpened] = useState<string>('');

  return (
    // <boxOpenedContext.Provider value={{ boxOpened, setBoxOpened }}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </boxOpenedContext.Provider>
  );
}
