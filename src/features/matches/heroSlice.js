import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     selectedHeroId: null,
// };

export const heroSlice = createSlice({
    name: 'hero',
    initialState: {
        selectedHeroId: null,
    },
    reducers: {
        selectHero: (state, action) => {
            state.selectedHeroId = action.payload;
        }
    },

});

export const { selectHero } = heroSlice.actions;

export default heroSlice.reducer;
