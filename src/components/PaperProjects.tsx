import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { getImgProps } from 'next/dist/shared/lib/get-img-props';

interface ImageProps {
  img: any,
}

export default function PaperProjects({ img }: ImageProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 600,
          minHeight: 200,
          padding: 3,
        },
      }}
    >
      <Paper elevation={3}  >
        <div className='flex flex-row gap-10 items-center'>
          <div className='flex min-w-48'>
            {img}
          </div>
          <div className='flex flex-col min-w-52'>
            <h1 className='text-xl font-bold pb-2'>title</h1>
            <p className='text-sm '>Lorem ipsum dolor sit amet. Eos velit sunt id veniam molestiae sed galisum delectus. Id blanditiis corrupti et error illo ea veniam nemo aut magnam ipsam aut porro dolor non dolor consectetur.</p>
          </div>
        </div>
      </Paper>
    </Box>
  );
}