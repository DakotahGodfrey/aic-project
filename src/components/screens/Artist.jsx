import {
  fetchArtistData,
  getMoreArtworksByArtist,
  selectArtist,
} from 'app/slices/artistSlice';
import SectionHeader from 'components/layout/headers/SectionHeader';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generatePlaceholderArray } from 'utils/helpers';
import Bio from 'components/layout/sections/Bio';
import Feed from 'components/layout/Feed';
import ReactHtmlParser from 'react-html-parser';
import FeaturedArtworks from 'components/layout/sections/FeaturedArtworks';
import useViewport from 'utils/hooks/useViewport';
import { mediaQueries } from 'utils/data';
import LoadMoreButton from 'components/layout/buttons/LoadMoreButton';
import BigImageHero from 'components/layout/headers/BigImageHero';

const Artist = ({ match }) => {
  const dispatch = useDispatch();
  const artist = useSelector(selectArtist);
  const { artistData, artistArtworks, status, currentPage } = artist;
  document.title = `AIC Explorer | ${artistData.title}`;

  React.useEffect(() => {
    dispatch(fetchArtistData(match.params.id));
  }, [dispatch, match.params.id]);

  const handleLoadMoreClick = () => {
    const nextPage = currentPage + 1;
    console.log(nextPage);
    dispatch(
      getMoreArtworksByArtist({ artist: artistData.title, page: nextPage })
    );
  };

  const { width } = useViewport();
  const { small, large } = mediaQueries;
  const isSmall = width < small;
  const isNarrow = width < large;
  return (
    <>
      <BigImageHero
        image={artistArtworks[0] ?? generatePlaceholderArray(1)[0]}
      />
      <Feed>
        {artistData.intro_copy && (
          <>
            <SectionHeader
              css={`
                padding: 0;
              `}
              children={
                <h2>About {artistData.title ? artistData.title : ''}</h2>
              }
            />{' '}
            <Bio>{ReactHtmlParser(artistData.intro_copy)}</Bio>
          </>
        )}
        <SectionHeader children={<h3>Related Artworks</h3>} />
        {status === 'resolved' ? (
          <FeaturedArtworks
            artworks={artistArtworks}
            columns={isSmall ? 1 : isNarrow ? 2 : 3}
          />
        ) : (
          <FeaturedArtworks
            artworks={generatePlaceholderArray(6)}
            columns={isSmall ? 1 : isNarrow ? 2 : 3}
          />
        )}
        <LoadMoreButton
          onClick={() => {
            handleLoadMoreClick();
          }}
          disabled={status === 'pending'}
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

export default Artist;
