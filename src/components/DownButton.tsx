import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export interface DownButtonProps {
  text: String;
}

export default function DownButton({ text }: DownButtonProps) {
  return (
    <Box sx={{ "& > :not(style)": { m: 1, backgroundColor: "#fca04f" } }}>
      <Fab variant="extended" sx={{}}>
        <KeyboardArrowDownIcon sx={{ mr: 1 }} />
        {text}
      </Fab>
    </Box>
  );
}
