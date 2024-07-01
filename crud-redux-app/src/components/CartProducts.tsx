import { Delete } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./CartReducer";
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
function CartProducts() {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <Box flex={4} p={2} width={600}>
      <Typography variant="h4" p={4} color="blue">
        Cart Items
      </Typography>
      <Stack direction="row" flexWrap="wrap">
        {cartItems.map((item) => (
          <Card sx={{ maxWidth: 300, margin: 1 }} key={item.id}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="250"
              image={item.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
              <Typography variant="body1" mt={1}>
                $ {item.price}
              </Typography>
              <Typography variant="body1" mt={1}>
                Unit : {item.qty}
              </Typography>
            </CardContent>
            <CardActions sx={{ paddingBottom: 2 }}>
              <Button
                variant="outlined"
                color="info"
                startIcon={<Delete />}
                onClick={() => dispatch(removeFromCart({ id: item.id }))}
              >
                Remove from Cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}

export default CartProducts;
