import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import Navbar from "./Navbar";

import theme from "@/utils/theme";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div className="container-global">
        <main className="main-container">{children}</main>
      </div>
    </ThemeProvider>
  );
}
