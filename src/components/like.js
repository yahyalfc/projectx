import React, { useState } from "react";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

function LikeButton() {
  const [liked, setLike] = useState(false);

  return !liked ? (
    <FavoriteBorderIcon
      onClick={() => {
        setLike(true);
      }}
    />
  ) : (
    <FavoriteIcon
      onClick={() => {
        setLike(false);
      }}
    />
  );
}

export default LikeButton;
