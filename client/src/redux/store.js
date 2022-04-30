import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth';

export default configureStore({
    reducer: {
        auth: authReducer,
    },
});
