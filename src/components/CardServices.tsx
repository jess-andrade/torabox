import * as React from 'react';
import Image from 'next/image';

//MUI imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


//my imports 
import cat from '../../public/cat.jpg'

interface CardProps {
  text: String,
  title: String,
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function CardServices({ text, title }: CardProps) {
  return (

    <Card sx={{
      minHeight: 200,
      minWidth: 600,
      backgroundColor: '#242424',
      maxWidth: 1000,
      color: '#f1f5f9',
      padding: 5,

    }}>
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
      }}>


        <div className='flex flex-col gap-4'>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">
            {text}
          </Typography>
        </div>
      </CardContent>


    </Card >
  );
}
