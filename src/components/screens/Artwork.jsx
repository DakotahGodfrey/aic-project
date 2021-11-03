import { selectArtwork, fetchArtworkData } from 'app/slices/artworkSlice';
import Feed from 'components/layout/Feed';
import FeaturedArtworks from 'components/layout/sections/FeaturedArtworks';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generatePlaceholderArray } from 'utils/helpers';
import ArtworkInfo from 'components/layout/sections/ArtworkInfo';
import SectionLink from 'components/layout/navigation/SectionLink';
import useViewport from 'utils/hooks/useViewport';
import { mediaQueries } from 'utils/data';
import BigImageHero from 'components/layout/headers/BigImageHero';

const Artwork = ({ match }) => {
  const dispatch = useDispatch();
  const artwork = useSelector(selectArtwork);
  const { status, artworkData, related } = artwork;

  React.useEffect(() => {
    dispatch(fetchArtworkData(match.params.id));
  }, [match.params.id, dispatch]);

  document.title = `AIC Explorer | ${artworkData.title}`;
  const { width } = useViewport();
  const { small } = mediaQueries;
  const isSmall = width < small;

  return (
    <>
      <BigImageHero
        isFullPage={true}
        image={artworkData ?? generatePlaceholderArray(1)[0]}
      />
      <Feed paddingTopNone>
        <ArtworkInfo artworkData={artworkData} />
        <SectionLink
          heading={`Related to ${artworkData.title ? artworkData.title : ' '}`}
        />
        {related.length > 0 || status === 'resolved' ? (
          <FeaturedArtworks
            columns={isSmall ? 1 : 2}
            artworks={related.filter(
              (artwork) => artwork.id !== artworkData.id
            )}
          />
        ) : (
          <FeaturedArtworks
            columns={isSmall ? 1 : 2}
            artworks={generatePlaceholderArray(6)}
          />
        )}
      </Feed>
    </>
  );
};

export default Artwork;
