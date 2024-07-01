import { Stack } from "@mui/material";
import React from "react";
import CartProducts from "./CartProducts";
import Cartbill from "./Cartbill";

function Cart() {
  return (
    <Stack direction="row" spacing={2} sx={{ height: "100vh" }}>
      <CartProducts></CartProducts>
      <Cartbill></Cartbill>
    </Stack>
  );
}

export default Cart;
