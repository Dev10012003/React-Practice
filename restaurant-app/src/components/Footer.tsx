import { GitHub, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box sx={{ textAlign: "center", bgcolor: "black", color: "white", p: 3 }}>
      <Box
        sx={{
          my: 3,
          "& svg": {
            fontSize: "60px",
            cursor: "pointer",
            mr: 2,
          },
          "& svg:hover": {
            color: "goldenrod",
            transform: "translateY(5px)",
            transition: "all 400ms",
          },
        }}
      >
        <Instagram />
        <Twitter />
        <GitHub />
        <YouTube />
      </Box>
      <Typography variant="body1">
        All Rights Reserved &copy; MyRestaurant YT
      </Typography>
    </Box>
  );
}

export default Footer;
