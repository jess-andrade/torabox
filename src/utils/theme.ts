"use client";
import { createTheme } from "@mui/material/styles";
import { League_Spartan } from "next/font/google";

const league_spartan = League_Spartan({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(251 146 60)", //orange
    },
    secondary: {
      main: "rgb(158,102,39)",
    },
  },
  typography: {
    fontFamily: league_spartan.style.fontFamily,
  },
});

export default theme;
