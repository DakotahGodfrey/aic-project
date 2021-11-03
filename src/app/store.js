import { configureStore } from '@reduxjs/toolkit';
import homeReducer from 'app/slices/homeSlice';
import galleryReducer from 'app/slices/gallerySlice';
import artistsReducer from 'app/slices/artistsSlice';
import artworksReducer from 'app/slices/artworkSlice';
import artistReducer from 'app/slices/artistSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    gallery: galleryReducer,
    artists: artistsReducer,
    artwork: artworksReducer,
    artist: artistReducer,
  },
});
