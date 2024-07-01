import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

interface ICartItem {
  id: number;
  title: string;
  image: string;
  price: number;
}
interface RootState {
  cart: {
    cart: ICartItem[];
  };
}
function Appbar() {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" color="yellow">
          Flipkart
        </Typography>
        <Link to="/cart" style={{ color: "#FFF" }}>
          <Badge badgeContent={cartItems.length} color="secondary">
            <ShoppingCart color="inherit" />
          </Badge>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
