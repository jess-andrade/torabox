import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
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
      alignItems: 'center',
      borderRadius: '10px',
    }}>

      <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" sx={{ maxWidth: '150vw' }} TabIndicatorProps={{
        style: {
          backgroundColor: "rgb(124 45 18)"
        }
      }}>
        <Tab icon={<HomeIcon />} href='#home' />
        <Tab icon={<PersonPinIcon />} href='#about' />
        <Tab icon={<CollectionsBookmarkIcon />} href='#projects' />
        <Tab icon={<AlternateEmailIcon />} href='#contact' />

      </Tabs>
    </AppBar>

  );
}