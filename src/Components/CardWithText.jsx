import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
function CardWithText({ src, link, text }) {
  return (
    <Card sx={{ maxWidth: 360 }}>
      <a href={link} target="_blank">
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={src}
            alt="green iguana"
            sx={{
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.05)"
              }
            }}
          />
          <p className="p-2">{text}</p>
        </CardActionArea>
      </a>
    </Card>
  );
}

export default CardWithText;
