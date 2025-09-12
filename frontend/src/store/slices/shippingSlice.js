import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../utils/instance';
import { toast } from 'react-toastify';

export const saveShipping = createAsyncThunk('shipping/saveShipping', async (shippingData, { rejectWithValue }) => {
    try {
        const res = await instance.post('/shipping/add', shippingData);
        toast.success('Shipping info saved');
        return res.data.shipping;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || 'Failed to save shipping');
    }
});

export const fetchShipping = createAsyncThunk('shipping/fetchShipping', async (_, { rejectWithValue }) => {
    try {
        const res = await instance.get('/shipping');
        return res.data.shipping;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || 'Failed to fetch shipping');
    }
});

const shippingSlice = createSlice({
    name: 'shipping',
    initialState: {
        info: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(saveShipping.pending, (state) => {
                state.loading = true;
            })
            .addCase(saveShipping.fulfilled, (state, action) => {
                state.loading = false;
                state.info = action.payload;
            })
            .addCase(saveShipping.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload);
            })
            .addCase(fetchShipping.fulfilled, (state, action) => {
                state.info = action.payload;
            });
    },
});

export default shippingSlice.reducer;
