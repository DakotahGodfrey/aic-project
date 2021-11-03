import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getArtworks, getArtistsAndCoverImages } from 'api/requestHelpers';

const fetchArtworks = createAsyncThunk('home/fetchArtworks', async () => {
  const artworks = await getArtworks();
  return artworks;
});

const fetchArtistsAndCoverImages = createAsyncThunk(
  'home/fetchArtistsAndCoverImage',
  async () => {
    const { artists, coverImages } = await getArtistsAndCoverImages(
      'fields=title,id,api_link'
    );
    return { artists, coverImages };
  }
);

const homeState = {
  artworks: [],
  exhibits: [],
  artists: [],
  coverImages: [],
  status: 'idle',
  error: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState: homeState,
  reducers: {},
  extraReducers: {
    [fetchArtworks.pending]: (state) => {
      state.status = 'pending';
    },
    [fetchArtworks.fulfilled]: (state, action) => {
      state.artworks = action.payload;
      state.status = 'idle';
    },
    [fetchArtworks.rejected]: (state) => {
      state.status = 'error';
    },

    [fetchArtistsAndCoverImages.pending]: (state) => {
      state.status = 'pending';
    },
    [fetchArtistsAndCoverImages.fulfilled]: (state, action) => {
      state.artists = action.payload.artists;
      state.coverImages = action.payload.coverImages;
      state.status = 'idle';
    },
    [fetchArtistsAndCoverImages.rejected]: (state, action) => {
      state.status = 'error';
    },
  },
});

const selectHome = (state) => state.home;
export { fetchArtworks, fetchArtistsAndCoverImages, selectHome };
export default homeSlice.reducer;
