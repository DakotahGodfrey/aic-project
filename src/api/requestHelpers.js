import { BASE_URL } from './requestUrls';

const fetchContentByApiLink = async (content, params) => {
  try {
    const newArray = [];
    for (let i = 0; i < content.length; i++) {
      const response = await fetch(
        `${content[i].api_link}?${params && params}`
      );
      const data = await response.json();
      newArray.push(data.data);
    }
    return newArray;
  } catch (error) {
    throw new Error(error.message);
  }
};

const searchArtworks = async (query, limit = 6) => {
  try {
    const response = await fetch(
      `${BASE_URL}artworks/search?${query ? `${query}` : ''}&limit=${limit}`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getArtworks = async (query, limit = 6) => {
  try {
    const artworks = await searchArtworks(query, limit);
    const params =
      'fields=title,id,thumbnail,artist_title,image_id,medium_display,date_display';
    const detailedResults = await fetchContentByApiLink(artworks, params);
    return detailedResults;
  } catch (error) {
    throw new Error(error.message);
  }
};

const searchArtists = async (query, limit = 6) => {
  try {
    const response = await fetch(
      `${BASE_URL}web-artists/search?${query}&limit=${limit}`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
const fetchOneArtworkForArtists = async (artists) => {
  try {
    const artworks = [];
    for (let index = 0; index < artists.length; index++) {
      const results = await searchArtworks(`q=${artists[index].title}`, 1);
      artworks.push(results[0]);
    }
    const artworkData = fetchContentByApiLink(artworks);
    return artworkData;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getArtistsAndCoverImages = async (query) => {
  try {
    const artists = await searchArtists(query);
    const coverImages = await fetchOneArtworkForArtists(artists);
    return { artists, coverImages };
  } catch (error) {
    throw new Error(error.message);
  }
};
export { searchArtworks, getArtworks, getArtistsAndCoverImages };
