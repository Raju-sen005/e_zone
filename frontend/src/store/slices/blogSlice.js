// src/store/slices/blogSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/instance';
import { toast } from 'react-toastify';

// ✅ fetchBlogs now matches the backend response
export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async (_, thunkAPI) => {
    try {
        const res = await axiosInstance.get("/blogs");
        return res.data; // directly return array
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || 'Failed to fetch blogs');
    }
});

const initialState = {
    blogs: [],
    loading: false,
    error: null,
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.loading = false;
                state.blogs = action.payload; // array now works correctly
                state.error = null;
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload);
            });
    },
});

export default blogSlice.reducer;
