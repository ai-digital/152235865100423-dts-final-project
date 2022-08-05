import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
//import Platform from "./Platform";

const CardCommodities = ({ sembako }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={sembako.background_image}
            alt="gambar sembako"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {sembako.name}
            </Typography>
            
            <Typography variant="body2" sx={{ marginTop: "0.5em" }}>
              Release Date: {sembako.updated_at}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to={`${sembako.id}`}>Detail</Link>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardCommodities;
