import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  qty: number;
}
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [] as CartItem[],
  },
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((x) => x.id !== action.payload.id);
    },
    updateCart: (state, action: PayloadAction<Partial<CartItem>>) => {
      const updatedItem = action.payload;
      state.cart = state.cart.map((item) =>
        item.id === updatedItem.id ? { ...item, ...updatedItem } : item
      );
      console.log(state.cart);
    },
  },
});

export const { addToCart, removeFromCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
