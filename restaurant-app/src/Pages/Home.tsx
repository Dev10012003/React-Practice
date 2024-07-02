import React from "react";
import Layout from "../components/Layout";
import { Box, Button, Card, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { url } from "inspector";
import Banner from "../images/banner.jpeg";

function Home() {
  return (
    <Layout>
      <Box
        sx={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh", // Example: Set a minimum height if needed
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Box sx={{ marginLeft: 1, display: { xs: "none", sm: "block" } }}>
          <Typography variant="h1" sx={{ fontWeight: 700 }}>
            Food Website
          </Typography>
          <Typography variant="h3">Best Food In India</Typography>
          <Link to="/menu">
            <Button
              variant="contained"
              sx={{
                bgcolor: "black",
                color: "white",
                marginTop: 3,
                fontSize: 20,
                "&:hover": {
                  backgroundColor: "black",
                  borderColor: "black",
                  boxShadow: "none",
                },
              }}
            >
              Order now
            </Button>
          </Link>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Card sx={{ bgcolor: "black", textAlign: "center", padding: 5 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, color: "white" }}>
              Food Website
            </Typography>
            <Typography variant="h5" color="white" mt={2}>
              Best Food In India
            </Typography>
            <Link to="/menu">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "white",
                  color: "black",
                  marginTop: 3,
                  fontSize: 20,
                  mt: 4,
                  "&:hover": {
                    backgroundColor: "white",
                    borderColor: "white",
                    boxShadow: "none",
                  },
                }}
              >
                Order now
              </Button>
            </Link>
          </Card>
        </Box>
      </Box>
    </Layout>
  );
}

export default Home;
