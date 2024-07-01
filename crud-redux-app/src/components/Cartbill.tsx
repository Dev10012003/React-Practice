import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

interface ICartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  qty: number;
}
interface RootState {
  cart: {
    cart: ICartItem[];
  };
}
function Cartbill() {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  console.log(cartItems.length);
  let totalPrice = 0;
  let gstPrice = 0;
  let finalPrice = 0;
  if (cartItems.length > 0) {
    for (const item of cartItems) {
      totalPrice += item.price * item.qty;
    }
  }

  gstPrice = 0.18 * totalPrice;
  finalPrice = totalPrice + gstPrice;

  return (
    <Box
      flex={1}
      p={4}
      sx={{
        display: {
          xs: "none",
          sm: "block",
          backgroundColor: "lightgray",
        },
      }}
    >
      <Box position="fixed">
        <Typography variant="h4">Total Bill</Typography>

        {totalPrice !== 0 ? (
          <>
            <Typography variant="h6" color="text.secondary" m={2}>
              Bill : $ {totalPrice}
            </Typography>
            <Typography variant="h6" color="text.secondary" m={2}>
              GST : $ {gstPrice}
            </Typography>
            <hr />
            <Typography variant="h6" color="text.secondary" m={2}>
              Total : $ {finalPrice}
            </Typography>
          </>
        ) : (
          <Typography variant="h6" color="text.secondary" m={2}>
            No Products Added !
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default Cartbill;
