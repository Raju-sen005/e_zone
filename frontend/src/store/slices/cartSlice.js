import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../utils/instance';
import { toast } from 'react-toastify';

export const fetchCart = createAsyncThunk('cart/fetchCart', async (_, { rejectWithValue }) => {
    try {
        const res = await instance.get('/cart');
        return res.data.cart;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || 'Failed to fetch cart');
    }
});

export const addToCart = createAsyncThunk('cart/addToCart', async (data, { rejectWithValue }) => {
    try {
        const res = await instance.post('/cart/add', data);
        toast.success('Item added to cart');
        return res.data.cart;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || 'Failed to add item');
    }
});

export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (itemId, { rejectWithValue }) => {
    try {
        const res = await instance.delete(`/cart/remove/${itemId}`);
        toast.success('Item removed');
        return res.data.cart;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || 'Failed to remove item');
    }
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        clearCart: (state) => {
            state.items = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload);
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.items = action.payload;
            });
    },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
