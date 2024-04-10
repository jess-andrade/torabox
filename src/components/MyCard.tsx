import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface CardProps {
  text: String,
}

export default function MyCard({ text }: CardProps) {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: '#242424' }}>
      <CardContent>
        <Typography variant="body2">
          {text}
        </Typography>
      </CardContent>

    </Card>
  );
}
