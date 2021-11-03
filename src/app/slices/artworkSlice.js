import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from 'api/requestUrls';
import { getArtworks } from 'api/requestHelpers';

const fetchArtworkData = createAsyncThunk(
  'artwork/fetchArtworkData',
  async (id) => {
    try {
      const response = await fetch(`${BASE_URL}artworks/${id}`);
      const data = await response.json();
      const artwork = data.data;
      const related = await getArtworks(
        `[term][is_boosted]=true&fields=api_link&q=${artwork.title} ${artwork.artist_title}`,
        7
      );
      return { artwork, related };
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const artworkInitialState = {
  artworkData: {},
  status: 'idle',
  related: [],
};
const artworkSlice = createSlice({
  name: 'artwork',
  initialState: artworkInitialState,
  reducers: {},
  extraReducers: {
    [fetchArtworkData.pending]: (state) => {
      state.artworkData = {};
      state.related = [];
      state.status = 'pending';
    },
    [fetchArtworkData.fulfilled]: (state, action) => {
      state.artworkData = action.payload.artwork;
      state.related = action.payload.related;
      state.status = 'resolved';
    },
    [fetchArtworkData.rejected]: (state) => {
      state.status = 'rejected';
    },
  },
});

const selectArtwork = (state) => state.artwork;
export { fetchArtworkData, selectArtwork };
export default artworkSlice.reducer;
