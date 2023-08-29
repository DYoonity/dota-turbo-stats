import { configureStore } from '@reduxjs/toolkit';
import matchesReducer from '../features/matches/matchesSlice';

export default configureStore({
    reducer: {
        matches: matchesReducer,
    },
});
