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
      <Paper elevation={4}>
        <div className="flex items-center">
          {/* --------- content */}
          <div className="flex flex-col gap-4">
            {/* --------- text */}
            <div className="flex flex-col items-center min-w-full text-justify gap-3">
              <div className="text-[#fca04f] text-sm font-bold m-4">{sub}</div>
              <h1 className="text-xl font-bold pb-2 text-[#262923]">{title}</h1>
              <p className="text-sm text-[#9a9793] mx-4 ">{text}</p>
            </div>

            {/* --------- img */}
            <div className="flex max-w-[400px] h-full">{img}</div>
          </div>
        </div>
      </Paper>
    </Box>
  );
}
