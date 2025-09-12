import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/instance";

export const creatOrder = createAsyncThunk(
    'payment/createOrder', async (orderData, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/order/create-order', orderData)

            const data = response.data;
            if (data.success) {
                window.location.href = data.url;
            } else {
                return rejectWithValue(data.message || 'Order creation failed');
            }

        } catch (error) {
            return rejectWithValue(error.message || 'Something went wrong');
        }
    }
);

const initialState = {
    order: null,
    loading: false,
    error: null,
}


const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(creatOrder.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(creatOrder.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(creatOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})

export default orderSlice.reducer;