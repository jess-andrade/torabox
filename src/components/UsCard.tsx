import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import { motion } from "framer-motion";

interface ImageProps {
  img: any,
  name: string,
  subtitle: string,
  description: string
}

export default function UsCard({ img, name, subtitle, description }: ImageProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          minWidth: 190,
          padding: 2,
          borderRadius: 7,
          backgroundColor: '#ffffff',

        },
      }}
    >
      <Paper elevation={2} >
        <div className='flex flex-row flex-wrap gap-x-4 items-center '>

          {/* <Paper elevation={9} sx={{ backgroundColor: '#fca04f' }}> */}

          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
          >
            <div className='w-24'>
              {img}
            </div>
          </motion.div>

          <div className='flex flex-col'>
            <h1 className='text-xl font-bold pb-2'>{name}</h1>
            <h1 className='text-sm font-bold pb-2 text-[#F9B477]'>{subtitle}</h1>
          </div>
          <p className='text-sm '>{description}</p>

        </div>
      </Paper>
    </Box>
  );
}