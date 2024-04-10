import * as React from 'react';

//MUI imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


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

export default function MyCard({ text, title }: CardProps) {
  return (

    <Card sx={{
      minHeight: 300,
      backgroundColor: '#242424',
      maxWidth: 1000,
      color: '#f1f5f9',
      padding: 5,

    }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {text}
        </Typography>
      </CardContent>

    </Card>
  );
}
