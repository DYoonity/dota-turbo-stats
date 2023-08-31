import { configureStore } from '@reduxjs/toolkit';
import { openDotaApiSlice } from '../features/matches/openDotaApiSlice';
import { heroSlice } from '../features/matches/heroSlice';

export default configureStore({
    reducer: {
        [openDotaApiSlice.reducerPath]: openDotaApiSlice.reducer,
        heroesSl: heroSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(openDotaApiSlice.middleware),
    devTools: true
});
