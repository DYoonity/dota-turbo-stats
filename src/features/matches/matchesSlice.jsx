import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  matchesList: [],
  loading: false,
  // status: 'idle',
  // error: null,
};

export const getMatches = createAsyncThunk('posts/fetchPosts', async heroId => {
  try {
    const response = await axios.get(
      `https://api.opendota.com/api/heroes/${heroId}/matches`,
    );
    return response.data;
  } catch (err) {
    return `Error: getMatches - ${err}`;
  }
});

export const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {},
  extraReducers: {
    [getMatches.pending]: state => {
      state.loading = true;
    },
    [getMatches.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.matchesList = payload;
    },
    [getMatches.rejected]: state => {
      state.loading = false;
    },
  },
});

export const { addMatches } = matchesSlice.actions;

export default matchesSlice.reducer;
