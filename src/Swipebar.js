import React from "react";
import IconButton from "@mui/material/IconButton";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";

function Swipebar() {
  return (
    <div className="swipebar">
      <IconButton aria-label="delete" size="large">
        <ReplayIcon />
      </IconButton>
      <IconButton aria-label="delete" size="large">
        <CloseIcon />
      </IconButton>
      <IconButton aria-label="delete" size="large">
        <StarRateIcon />
      </IconButton>
      <IconButton aria-label="delete" size="large">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="delete" size="large">
        <FlashOnIcon />
      </IconButton>
    </div>
  );
}

export default Swipebar;
