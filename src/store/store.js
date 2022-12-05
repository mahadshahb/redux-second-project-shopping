import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cartSlice";
import ProductSlice from "./productSlice";

const store = configureStore({
    reducer: {
        cart: CartSlice,
        product: ProductSlice
    }
});

export default store;