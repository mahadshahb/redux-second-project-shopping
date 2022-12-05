import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const ProductSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUS.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUS.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUS.ERROR;
            })
    }
});

export const { setProducts, setStatus } = ProductSlice.actions;
export default ProductSlice.reducer;


// ...Thunk...

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch('http://fakestoreapi.com/products');
    const data = await res.json();
    return data;
});

// export function fetchProducts() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUS.LOADING));
//         try {
//             const res = await fetch('http://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUS.IDLE));
//         } catch (error) {
//             console.log(error);
//             // alert('Sorry something went wrong');
//             dispatch(setStatus(STATUS.ERROR));
//         }
//     }
// }

