import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from 'api/requestUrls';
import { getArtworks } from 'api/requestHelpers';

const fetchArtistData = createAsyncThunk(
  'artist/fetchArtistData',
  async (id) => {
    const response = await fetch(`${BASE_URL}web-artists/${id}`);
    const data = await response.json();
    const artist = data.data;
    const artworks = await getArtworks(`q=${artist.title}`, 6);
    return { artist, artworks };
  }
);

const getMoreArtworksByArtist = createAsyncThunk(
  'artist/getMoreArtworksByArtist',
  async ({ artist, page }) => {
    const artworks = await getArtworks(`q=${artist}&page=${page}`, 6);
    return artworks;
  }
);

const initialArtistState = {
  artistData: {},
  artistArtworks: [],
  status: 'idle',
  currentPage: 0,
};

const artistSlice = createSlice({
  name: 'artist',
  initialState: initialArtistState,
  reducers: {},
  extraReducers: {
    [fetchArtistData.pending]: (state) => {
      state.artistArtworks = [];
      state.status = 'pending';
    },
    [fetchArtistData.fulfilled]: (state, action) => {
      state.artistData = action.payload.artist;
      state.artistArtworks = action.payload.artworks;
      state.currentPage++;
      state.status = 'resolved';
    },
    [fetchArtistData.rejected]: (state) => {
      state.status = 'rejected';
    },
    [getMoreArtworksByArtist.pending]: (state) => {
      state.status = 'pending';
    },
    [getMoreArtworksByArtist.fulfilled]: (state, action) => {
      state.artistArtworks = state.artistArtworks.concat(action.payload);
      state.currentPage++;
      state.status = 'resolved';
    },
    [getMoreArtworksByArtist.rejected]: (state) => {
      state.status = 'rejected';
    },
  },
});

const selectArtist = (state) => state.artist;

export { fetchArtistData, getMoreArtworksByArtist, selectArtist };
export default artistSlice.reducer;
