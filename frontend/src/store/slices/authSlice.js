// src/store/slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../utils/instance';
import { toast } from 'react-toastify';

// Async thunk
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password, navigate }, { rejectWithValue }) => {
    try {
      const res = await instance.post('/auth/login', { email, password });
      const data = res.data;

      if (data.success) {
        localStorage.setItem('token', data.token);
        toast.success('Login successful!');
        navigate('/');
        return data.user; // Send user to fulfilled reducer
      } else {
        return rejectWithValue(data.message || 'Login failed');
      }
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || 'Login failed. Please try again.'
      );
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async ({ registerData, navigate }, { rejectWithValue }) => {
    try {
      const res = await instance.post('/auth/register', registerData);
      const data = res.data;


      if (data.success) {
        toast.success(data?.message);
        navigate('/login');
        return data.user;
      } else {
        return rejectWithValue(data.message || 'Login failed');
      }
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || 'Login failed. Please try again.'
      );
    }
  }
);

const initialState = {
  isLoggedIn: false,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
