import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function DownButton() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1, backgroundColor: '#fca04f' } }} >

      <Fab variant="extended" sx={{}}>
        <KeyboardArrowDownIcon sx={{ mr: 1 }} />
        Saiba mais
      </Fab>

    </Box>
  );
}