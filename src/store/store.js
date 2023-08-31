import { configureStore } from '@reduxjs/toolkit';
import { openDotaApiSlice } from '../features/matches/openDotaApiSlice';
import { heroSlice } from '../features/matches/heroSlice';

export default configureStore({
    reducer: {
        hero: heroSlice,
        [openDotaApiSlice.reducerPath]: openDotaApiSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(openDotaApiSlice.middleware),
    devTools: true
});
