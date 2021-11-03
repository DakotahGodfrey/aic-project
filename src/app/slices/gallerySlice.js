import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getArtworks } from 'api/requestHelpers';

const fetchArtworks = createAsyncThunk(
  'gallery/fetchArtworks',
  async (query = '[term][is_boosted]=true&fields=api_link') => {
    const artworks = await getArtworks(query);
    return artworks;
  }
);

const fetchArtworksByTerm = createAsyncThunk(
  'gallery/fetchArtworksByTerm',
  async (query) => {
    const artworks = await getArtworks(query);
    return artworks;
  }
);

const initialGalleryState = {
  status: 'idle',
  artworks: [],
  currentPage: 1,
  noResults: false,
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: initialGalleryState,
  reducers: {
    clearArtworks: (state) => {
      state.artworks = [];
    },
    clearNoResults: (state) => {
      state.noResults = false;
    },
  },
  extraReducers: {
    [fetchArtworks.pending]: (state) => {
      state.status = 'pending';
    },
    [fetchArtworks.fulfilled]: (state, action) => {
      state.artworks = state.artworks.concat(action.payload);
      state.currentPage++;
      state.status = 'resolved';
    },
    [fetchArtworks.rejected]: (state) => {
      state.status = 'rejected';
    },
    [fetchArtworksByTerm.pending]: (state) => {
      state.noResults = false;
      state.status = 'searching';
    },
    [fetchArtworksByTerm.fulfilled]: (state, action) => {
      state.noResults = action.payload.length === 0;
      state.artworks = state.artworks.concat(action.payload);
      state.currentPage++;
      state.status = 'resolved';
    },
    [fetchArtworksByTerm.rejected]: (state) => {
      state.status = 'rejected';
    },
  },
});

const selectGallery = (state) => state.gallery;

const { clearArtworks, clearNoResults, resetGallery } = gallerySlice.actions;

export {
  fetchArtworks,
  fetchArtworksByTerm,
  selectGallery,
  clearArtworks,
  clearNoResults,
  resetGallery,
};
export default gallerySlice.reducer;
