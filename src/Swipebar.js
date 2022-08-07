import React from "react";
import IconButton from "@mui/material/IconButton";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import "./Swipebar.css";

function Swipebar() {
  return (
    <div className="swipebar">
      <div>
      <IconButton className="swipeButtons" aria-label="delete" size="large">
        <ReplayIcon  fontsize="large"/>
      </IconButton>
      <IconButton className="swipeButtons" aria-label="delete" size="large">
        <CloseIcon fontsize="large" />
      </IconButton>
      <IconButton className="swipeButtons" aria-label="delete" size="large">
        <StarRateIcon fontsize="large" />
      </IconButton>
      <IconButton className="swipeButtons" aria-label="delete" size="large">
        <FavoriteIcon fontsize="large" />
      </IconButton>
      <IconButton className="swipeButtons" aria-label="delete" size="large">
        <FlashOnIcon fontsize="large" />
      </IconButton>
      </div>
    </div>
  );
}

export default Swipebar;
