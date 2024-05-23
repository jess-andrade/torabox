import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { getImgProps } from "next/dist/shared/lib/get-img-props";
import EmblaCarousel from "embla-carousel/components/EmblaCarousel";

interface CardProps {
  img: any;
  text: String;
  title: String;
  sub: String;
}

export default function PaperProjects({ img, text, title, sub }: CardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          height: 360,
          borderRadius: 4,
          backgroundColor: "#f4f4f4",
        },
      }}
    >
      <Paper elevation={2}>
        <div className="flex items-center m-4">
          {/* --------- content */}
          <div className="flex flex-col gap-1 ">
            {/* --------- text */}
            <div className="flex flex-col items-start min-w-screen text-justify gap-y-3 mt-3  ">
              <div className="text-[#fca04f] text-sm font-bold">{sub}</div>
              <h1 className="text-xl font-bold text-[#262923]">{title}</h1>
              <p className="text-sm text-[#9a9793] pb-4">{text}</p>
            </div>

            {/* --------- img */}
            <div className="flex max-w-[350px] h-[170px]">{img}</div>
          </div>
        </div>
      </Paper>
    </Box>
  );
}
