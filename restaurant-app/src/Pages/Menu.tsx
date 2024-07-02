import React from "react";
import Layout from "../components/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { MenuList } from "../utils/data";

function Menu() {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card
            sx={{
              maxWidth: "400px",
              display: "flex",
              flexDirection: "column",
              m: 3,
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              ></CardMedia>
            </CardActionArea>
            <CardContent>
              <Typography variant="h5" gutterBottom component={"div"}>
                {menu.name}
              </Typography>
              <Typography variant="body1" gutterBottom component={"div"}>
                {menu.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Layout>
  );
}

export default Menu;
