import * as React from 'react';
import Image from 'next/image';

//MUI imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { shadows } from '@mui/system';

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
      backgroundColor: '#f4f4f4',
      borderRadius: 4,
      boxShadow: 3,

    }}>
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'row',
        maxWidth: 310,
        minHeight: 270,
        gap: 4,
        boxShadow: 20,
        backgroundColor: '#f4f4f4',
        borderRadius: 4,
        padding: 5,
      }}>


        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4'>
            {icon}
            <Typography
              variant="h5"
              component="div"
              color='primary'
              fontWeight='bold'
            >
              {title}
            </Typography>

          </div>
          <Typography
            variant="body2"
            sx={{ color: '#5C5E5A', textAlign: 'justify', fontSize: 16 }}
          >
            {text}
          </Typography>
        </div>
      </CardContent>

    </Card >

  );
}
