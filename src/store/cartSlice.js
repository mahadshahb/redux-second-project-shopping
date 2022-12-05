import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            state = state.filter(item => item.id !== action.payload);
            return state;
        }
    }
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;

