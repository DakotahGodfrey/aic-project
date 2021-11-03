import React from 'react';
import SectionLink from 'components/layout/navigation/SectionLink';
import { useDispatch, useSelector } from 'react-redux';
import { generatePlaceholderArray } from 'utils/helpers';
import Feed from 'components/layout/Feed';
import FeaturedArtworks from 'components/layout/sections/FeaturedArtworks';
import FeaturedArtists from 'components/layout/sections/FeaturedArtists';
import {
  selectHome,
  fetchArtworks,
  fetchArtistsAndCoverImages,
} from 'app/slices/homeSlice';
import useViewport from 'utils/hooks/useViewport';
import { mediaQueries } from 'utils/data';
import BigImageHero from 'components/layout/headers/BigImageHero';

const Home = () => {
  document.title = 'AIC Explorer | Home';
  const dispatch = useDispatch();
  const home = useSelector(selectHome);

  React.useEffect(() => {
    dispatch(fetchArtworks());
    dispatch(fetchArtistsAndCoverImages());
  }, [dispatch]);

  const { artworks, artists, coverImages } = home;
  const { width } = useViewport();
  const { large, small } = mediaQueries;
  const isNarrow = width < large;
  const isSmall = width < small;
  return (
    <>
      <BigImageHero
        cover
        image={artworks[0] ?? generatePlaceholderArray(1)[0]}
      />
      <Feed>
        <SectionLink
          heading={'From The Gallery'}
          link={{ path: '/gallery', text: 'Explore The Gallery' }}
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

        <SectionLink
          heading={'Featured Artists'}
          link={{ path: '/artists', text: 'Find your favorite' }}
        />
        {artists.length > 0 || coverImages > 0 ? (
          <FeaturedArtists artists={artists} coverImages={coverImages} />
        ) : (
          <FeaturedArtists artists={generatePlaceholderArray(6)} />
        )}
      </Feed>
    </>
  );
};

export default Home;
