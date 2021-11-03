import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearArtworks,
  clearNoResults,
  fetchArtworks,
  fetchArtworksByTerm,
  selectGallery,
} from 'app/slices/gallerySlice';
import { generatePlaceholderArray } from 'utils/helpers';
import TextHero from 'components/layout/headers/TextHero';
import Feed from 'components/layout/Feed';
import FeaturedArtworks from 'components/layout/sections/FeaturedArtworks';
import SectionHeader from 'components/layout/headers/SectionHeader';
import LoadMoreButton from 'components/layout/buttons/LoadMoreButton';
import { Loader } from 'components/layout/loaders';
import SearchBar from 'components/layout/Search';
import { ErrorMessage } from 'components/layout/ErrorMessage';
import { mediaQueries } from 'utils/data';
import useViewport from 'utils/hooks/useViewport';
import { BouncyEllipsis } from 'components/layout/loaders';

const Gallery = () => {
  const dispatch = useDispatch();
  const gallery = useSelector(selectGallery);
  const { status, artworks, currentPage, noResults } = gallery;
  const [term, setTerm] = useState('');

  React.useEffect(() => {
    document.title = 'AIC Explorer | The Gallery';
    if (
      artworks.length === 0 &&
      status !== 'searching' &&
      status !== 'pending'
    ) {
      dispatch(fetchArtworks());
    }
  }, [dispatch, artworks, status]);

  const handleLoadMoreClick = () => {
    const nextPage = currentPage + 1;
    if (term) {
      dispatch(fetchArtworksByTerm(`q=${term}&page=${nextPage}`));
    } else {
      dispatch(
        fetchArtworks(
          `[term][is_boosted]=true&fields=api_link&page=${nextPage}`
        )
      );
    }
  };
  const handleTermUpdate = (e) => {
    e.preventDefault();
    if (noResults) {
      dispatch(clearNoResults());
    }
    setTerm(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(clearArtworks());
    dispatch(fetchArtworksByTerm(`q=${term}`));
  };

  const { width } = useViewport();
  const { small, large } = mediaQueries;
  const isSmall = width < small;
  const isNarrow = width < large;

  return (
    <>
      <TextHero
        heading={'The Gallery'}
        message={
          'Explore thousands of artworks in the museum’s wide-ranging collection—from our world-renowned icons to lesser-known gems from every corner of the globe.'
        }
      />
      <Feed>
        <SectionHeader
          children={
            <>
              <h2>Search The Gallery</h2>
              <p>Search by title, artist, or medium</p>
            </>
          }
        />
        {noResults && (
          <ErrorMessage>
            Your search "{term}" returned no results. Try again?
          </ErrorMessage>
        )}
        <SearchBar
          placeholder={'Search the catalog'}
          value={term}
          changeHandler={handleTermUpdate}
          searchHandler={handleSearch}
        />
        {artworks.length > 0 ? (
          <FeaturedArtworks
            artworks={artworks}
            columns={isSmall ? 1 : isNarrow ? 2 : 3}
          />
        ) : (
          <FeaturedArtworks
            artworks={generatePlaceholderArray(6)}
            columns={isSmall ? 1 : isNarrow ? 2 : 3}
          />
        )}
        {status !== 'resolved' &&
          status !== 'idle' &&
          status !== 'rejected' &&
          artworks.length > 1 && (
            <>
              <FeaturedArtworks
                artworks={generatePlaceholderArray(6)}
                columns={isSmall ? 1 : isNarrow ? 2 : 3}
              />
              <Loader />
            </>
          )}
        <LoadMoreButton
          onClick={() => {
            handleLoadMoreClick();
          }}
          disabled={status === 'pending' || status === 'searching' || noResults}
          children={
            <>
              Load More <i className='material-icons'>keyboard_arrow_down</i>
            </>
          }
        />
      </Feed>
    </>
  );
};

export default Gallery;
