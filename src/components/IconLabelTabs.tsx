import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { AppBar } from '@mui/material';


export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (

    <AppBar style={{
      position: "fixed",
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#181b17',
    }}>


      {/* ------ torabox text */}
      <p className='text-white tracking-[.40em] text-[#fca04f] '>TORABOX.</p>


      {/* ------ icons */}
      <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" sx={{ maxWidth: ' 150vw' }} TabIndicatorProps={{
        style: {
          backgroundColor: "rgb(124 45 18)"
        }
      }}>
        <Tab href='#home' label='início' style={{ color: '#f1f5f9' }} />
        {/* icon={<HomeIcon  />}  */}

        <Tab href='' label='Sobre nós' style={{ color: '#f1f5f9' }} />
        {/* icon={<PersonPinIcon />}  */}

        <Tab href='' label='Contato' style={{ color: '#f1f5f9' }} />
        {/* icon={<PersonPinIcon />}  */}
        {/* 
        <Tab icon={<BubbleChartIcon style={{ color: value === 4 ? 'orange' : 'white' }} />} href='#services' />
        <Tab icon={<CollectionsBookmarkIcon style={{ color: value === 2 ? 'orange' : 'white' }} />} href='#projects' />
        <Tab icon={<AlternateEmailIcon style={{ color: value === 3 ? 'orange' : 'white' }} />} href='#contact' /> */}


      </Tabs>
    </AppBar >

  );
}