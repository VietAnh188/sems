import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isFetching: false,
    isSuccess: false,
    isError: false,
};

export const loginCall = createAsyncThunk('auth/loginCall', async request => {
    const res = await axios.post('/auth/login', request);
    return res.data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder.addCase(loginCall.pending, (state, action) => {
            state.user = null;
            state.isFetching = true;
            state.isSuccess = false;
            state.isError = false;
        });
        builder.addCase(loginCall.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isFetching = false;
            state.isSuccess = true;
            state.isError = false;
            localStorage.setItem('user', JSON.stringify(state.user));
        });
        builder.addCase(loginCall.rejected, (state, action) => {
            state.user = null;
            state.isFetching = false;
            state.isSuccess = false;
            state.isError = true;
        });
    },
});

export const authSelector = state => state.auth;

export default authSlice.reducer;
