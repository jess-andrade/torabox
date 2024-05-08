import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { getImgProps } from 'next/dist/shared/lib/get-img-props';
import EmblaCarousel from 'embla-carousel/components/EmblaCarousel';


interface CardProps {
  img: any,
  text: String,
  title: String,
}


export default function PaperProjects({ img, text, title }: CardProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          minWidth: 600,
          maxHeight: 500,
          padding: 3,

        },
      }}
    >
      <Paper elevation={3}  >
        <div className='flex flex-row gap-10 items-center'>
          <div className='flex max-w-80 max-h-40'>
            {img}
          </div>
          <div className='flex flex-col max-w-42 text-justify'>
            <div className='text-[#fca04f] text-sm font-bold'>Subtitle</div>
            <h1 className='text-xl font-bold pb-2 text-[#262923]'>{title}</h1>
            <p className='text-sm text-[#262923] '>{text}</p>
          </div>
        </div>
      </Paper>
    </Box>
  );
}