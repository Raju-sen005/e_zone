import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/instance';


// Fetch all products
export const fetchProducts = createAsyncThunk('products/fetchAll', async (_, thunkAPI) => {
    try {
        const res = await axiosInstance.get("/products");
        return res.data.products;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || 'Failed to fetch products');
    }
});

// Fetch single product detail
export const fetchProductDetail = createAsyncThunk('products/fetchDetail', async (id, thunkAPI) => {
    try {
        const res = await axiosInstance.get(`products/${id}`);
        return res.data.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || 'Failed to fetch product detail');
    }
});

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        productDetail: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearProductDetail: (state) => {
            state.productDetail = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch All Products
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Fetch Single Product
            .addCase(fetchProductDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductDetail.fulfilled, (state, action) => {
                state.loading = false;
                state.productDetail = action.payload;
            })
            .addCase(fetchProductDetail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearProductDetail } = productSlice.actions;
export default productSlice.reducer;
