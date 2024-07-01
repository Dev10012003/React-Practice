import { Add } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCart } from "./CartReducer";

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
function ProductCard(props: ICartItem) {
  const cartItems = useSelector((state: RootState) => state.cart.cart);

  const dispatch = useDispatch();
  let quantity = 1;
  const handleAddToCart = () => {
    let item = cartItems.find((x) => x.id === props.id);
    if (item) {
      console.log(item);
      quantity = item.qty + 1;
      dispatch(
        updateCart({
          id: props.id,
          qty: quantity,
        })
      );
    } else {
      dispatch(
        addToCart({
          title: props.title,
          image: props.image,
          id: props.id,
          price: props.price,
          qty: quantity,
        })
      );
    }
  };
  return (
    <Card sx={{ maxWidth: 345 }} key={props.id}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Typography variant="body1" mt={1}>
          $ {props.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ paddingBottom: 2 }}>
        <Button
          variant="outlined"
          color="info"
          startIcon={<Add />}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
