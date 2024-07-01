import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import Appbar from "./Appbar";
import ProductCard from "./ProductCard";

function AllProducts() {
  return (
    <Box>
      <Stack direction="row" spacing={2} p={5}>
        <ProductCard
          id={1}
          price={100}
          title="Mouse"
          image="https://us.v-cdn.net/6036147/uploads/67SAKXLFNL4I/l-10-8-1-1200x675.jpg"
          qty={1}
        ></ProductCard>
        <ProductCard
          id={2}
          price={150}
          qty={1}
          title="Keyboard"
          image="https://media.wired.com/photos/65b0438c22aa647640de5c75/191:100/w_1280,c_limit/Mechanical-Keyboard-Guide-Gear-Gettyimages-1313504623.jpg"
        ></ProductCard>
        <ProductCard
          id={3}
          price={900}
          qty={1}
          title="Laptop"
          image="https://cdn.mos.cms.futurecdn.net/Ajc3ezCTN4FGz2vF4LpQn9-1200-80.jpg"
        ></ProductCard>
        <ProductCard
          id={4}
          price={350}
          qty={1}
          title="Headphones"
          image="https://img.freepik.com/free-photo/shiny-black-headphones-reflect-golden-nightclub-lights-generated-by-ai_188544-10148.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1719792000&semt=sph"
        ></ProductCard>
        <ProductCard
          id={5}
          price={500}
          qty={1}
          title="Printer"
          image="https://imageio.forbes.com/blogs-images/davidhochman/files/2018/01/6042206_rd-1200x938.jpg?height=555&width=711&fit=bounds"
        ></ProductCard>
      </Stack>
    </Box>
  );
}

export default AllProducts;
