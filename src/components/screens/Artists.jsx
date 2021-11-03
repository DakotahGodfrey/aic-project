import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generatePlaceholderArray } from 'utils/helpers';
import { Loader } from 'components/layout/loaders';
import LoadMoreButton from 'components/layout/buttons/LoadMoreButton';
import ArtistsGalleryView from 'components/layout/sections/ArtistsGalleryView';
import Feed from 'components/layout/Feed';
import TextHero from 'components/layout/headers/TextHero';
import SectionHeader from 'components/layout/headers/SectionHeader';
import {
  clearArtistsAndArtworks,
  clearNoResults,
  fetchArtistsData,
  fetchArtistsDataByTerm,
  selectArtists,
} from 'app/slices/artistsSlice';
import SearchBar from 'components/layout/Search';
import { ErrorMessage } from 'components/layout/ErrorMessage';
import useViewport from 'utils/hooks/useViewport';
import { mediaQueries } from 'utils/data';

const Artists = () => {
  const dispatch = useDispatch();
  const artistsSlice = useSelector(selectArtists);
  const { artists, coverImages, status, currentPage, noResults } = artistsSlice;
  const [term, setTerm] = useState('');

  document.title = 'AIC Explorer | Artists Catalog';
  useEffect(() => {
    if (artists.length === 0 && status === 'idle') {
      dispatch(fetchArtistsData());
    }
  }, [dispatch, artists.length, status, term]);

  const handleTermUpdate = (e) => {
    e.preventDefault();

    if (noResults) {
      dispatch(clearNoResults());
      dispatch(fetchArtistsData());
    }
    setTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(clearArtistsAndArtworks());
    dispatch(fetchArtistsDataByTerm(`q=${term}&limit=6`));
  };

  const handleLoadMoreClick = () => {
    const nextPage = currentPage + 1;
    if (term) {
      dispatch(fetchArtistsDataByTerm(`q=${term}&page=${nextPage}`));
    } else {
      dispatch(fetchArtistsData(`fields=title,id,api_link&page=${nextPage}`));
    }
  };

  const { width } = useViewport();
  const { small, large } = mediaQueries;
  const isNarrow = width < large;
  const isSmall = width < small;
  return (
    <>
      <TextHero
        heading={'The Artists'}
        message={
          'From the Renaissance to Pop Art, here are some of the most famous artists of all time.'
        }
      />
      <Feed paddingTopNone>
        <SectionHeader children={<h2>Search Artists</h2>} />
        {noResults && term !== '' && (
          <ErrorMessage>
            Your search for <span aria-hidden='true'>"</span>
            {term}
            <span aria-hidden='true'>"</span> returned no results. Try again?
          </ErrorMessage>
        )}

        <SearchBar
          placeholder={'Search all artists'}
          value={term}
          changeHandler={handleTermUpdate}
          searchHandler={handleSearch}
        />
        {artists.length > 0 || coverImages.length > 0 ? (
          <ArtistsGalleryView
            artists={artists}
            coverImages={coverImages}
            columns={isSmall ? 1 : isNarrow ? 2 : 3}
          />
        ) : (
          <ArtistsGalleryView
            artists={generatePlaceholderArray(6)}
            columns={isSmall ? 1 : isNarrow ? 2 : 3}
          />
        )}
        {status === 'pending' && artists.length > 1 && (
          <>
            <ArtistsGalleryView
              artists={generatePlaceholderArray(6)}
              columns={isSmall ? 1 : isNarrow ? 2 : 3}
            />
            <Loader />
          </>
        )}
        <LoadMoreButton
          onClick={() => handleLoadMoreClick()}
          disabled={status === 'pending' || status === 'searching' || noResults}
        />
      </Feed>
    </>
  );
};

export default Artists;
