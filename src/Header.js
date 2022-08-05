import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ChatIcon from '@mui/icons-material/Chat';

function Header() {
  return (
    <div className="header">
      <IconButton aria-label="delete" size="large">
        <PersonIcon fontSize="large" />
      </IconButton>
      <img className="tinder-img" src="https://cdn-icons-png.flaticon.com/512/2111/2111653.png" alt="tinder" ></img>
      <IconButton aria-label="delete" size="large">
        <ChatIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
