import React, { useState, useEffect } from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import youtube from "../image/youtube.jpeg";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

const Youtubecc = () => {

    const handleCardClick = () => {
        window.open("https://music.youtube.com", "_blank");
      };

  return (
    <div className="justify-center">
          <Card sx={{ maxWidth: 400, marginBottom: 2 }}>
            <CardActionArea onClick={handleCardClick}>
              <CardMedia
                component="img"
                height="140"
                image={youtube} // Use the imported image here
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Youtube Music
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>

                <AvatarGroup max={4}>
                  <Avatar alt="Remy Sharp" src={youtube} />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>
              </CardContent>
            </CardActionArea>
          </Card>
    </div>
  );
};

export default Youtubecc;