import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getArtistsAndCoverImages } from 'api/requestHelpers';

const fetchArtistsData = createAsyncThunk(
  'artists/fetchArtistsData',
  async (query = 'fields=title,id,api_link') => {
    const { artists, coverImages } = await getArtistsAndCoverImages(query);
    return { artists, coverImages };
  }
);

const fetchArtistsDataByTerm = createAsyncThunk(
  'artists/fetchArtistsDataByTerm',
  async (query) => {
    const { artists, coverImages } = await getArtistsAndCoverImages(query);
    return { artists, coverImages };
  }
);

const initialArtistState = {
  artists: [],
  coverImages: [],
  status: 'idle',
  currentPage: 1,
  noResults: false,
};

const artistsSlice = createSlice({
  name: 'artists',
  initialState: initialArtistState,
  reducers: {
    clearNoResults: (state) => {
      state.noResults = false;
    },
    clearArtistsAndArtworks: (state) => {
      state.artists = [];
      state.status = 'idle';
      state.coverImages = [];
    },
  },
  extraReducers: {
    [fetchArtistsData.pending]: (state) => {
      state.status = 'pending';
    },
    [fetchArtistsData.fulfilled]: (state, action) => {
      state.artists = state.artists.concat(action.payload.artists);
      state.coverImages = state.coverImages.concat(action.payload.coverImages);
      state.currentPage++;
      state.status = 'resolved';
    },
    [fetchArtistsData.rejected]: (state) => {
      state.status = 'error';
    },

    [fetchArtistsDataByTerm.pending]: (state) => {
      state.noResults = false;
      state.status = 'searching';
    },
    [fetchArtistsDataByTerm.fulfilled]: (state, action) => {
      state.noResults = action.payload.artists.length === 0;
      state.artists = state.artists.concat(action.payload.artists);
      state.coverImages = state.coverImages.concat(action.payload.coverImages);
      state.currentPage++;
      state.status = 'resolved';
    },
    [fetchArtistsDataByTerm.rejected]: (state) => {
      state.status = 'error';
    },
  },
});
const { clearNoResults, clearArtistsAndArtworks } = artistsSlice.actions;
const selectArtists = (state) => state.artists;
export {
  fetchArtistsData,
  fetchArtistsDataByTerm,
  selectArtists,
  clearNoResults,
  clearArtistsAndArtworks,
};
export default artistsSlice.reducer;
