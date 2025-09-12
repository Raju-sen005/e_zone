import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../utils/instance';
import { toast } from 'react-toastify';

export const fetchWishlist = createAsyncThunk('wishlist/fetchWishlist', async (_, { rejectWithValue }) => {
  try {
    const res = await instance.get('/wishlist');
    return res.data.wishlist;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Failed to fetch wishlist');
  }
});

export const addToWishlist = createAsyncThunk('wishlist/addToWishlist', async (data, { rejectWithValue }) => {
  try {
    const res = await instance.post('/wishlist/add', data);
    toast.success('Item added to wishlist');
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Failed to add item');
  }
});

export const removeFromWishlist = createAsyncThunk('wishlist/removeFromWishlist', async (itemId, { rejectWithValue }) => {
  try {
    const res = await instance.delete(`/wishlist/remove/${itemId}`);
    toast.success('Item removed');
    return res.data.wishlist;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Failed to remove item');
  }
});

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })

      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  },
});

export default wishlistSlice.reducer;
