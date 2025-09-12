// src/store/slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/instance';
import { toast } from 'react-toastify';

export const fetchGalleries = createAsyncThunk('gallery/fetchgallery', async (_, thunkAPI) => {
    try {
        const res = await axiosInstance.get("/gallery");
        return res.data.gallery;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || 'Failed to fetch blogs');
    }
});

const initialState = {
    galleries: [],
    loading: false,
    error: null,
};

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGalleries.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGalleries.fulfilled, (state, action) => {
                state.loading = false;
                state.galleries = action.payload;
                state.error = null;
            })
            .addCase(fetchGalleries.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload);
            })
    },
});

export default gallerySlice.reducer;
