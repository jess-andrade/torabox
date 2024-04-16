import * as React from 'react';
import Image from 'next/image';

//MUI imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//-- framer motion imports
import { motion, useScroll } from "framer-motion"

//my imports 
import cat from '../../public/cat.jpg'

interface CardProps {
  text: String,
  title: String,
  icon: any,
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', maxHeight: 100 }}
  >
    •
  </Box>
);

export default function CardServices({ text, title, icon }: CardProps) {
  return (

    <Card sx={{
      minWidth: 600,
      backgroundColor: 'rgb(210, 210, 209, 0.3)',
      maxWidth: 1000,
      color: '#242424',
      padding: 5,

    }}>
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
      }}>


        <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-4'>
            {icon}
            <Typography variant="h5" component="div">
              {title}
            </Typography>
          </div>
          <Typography variant="body2">
            {text}
          </Typography>
        </div>
      </CardContent>

    </Card >

  );
}
