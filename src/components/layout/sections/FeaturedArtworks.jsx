import { GridWrapper, GridCard } from 'components/layout/Layout';
import { Link } from 'react-router-dom';
import { formatImageUrl } from 'utils/helpers';
import placeholder from 'images/placeholder.svg';
import { BouncyEllipsis } from '../loaders';

const FeaturedArtworks = ({ artworks, columns = 3 }) => {
  return (
    <GridWrapper
      columns={columns}
      css={`
        padding-top: 1.5rem;
      `}
    >
      {artworks.map((artwork, index) =>
        artwork.id ? (
          <Link to={`/gallery/artwork/${artwork.id}`}>
            <GridCard key={artwork.id}>
              <img
                src={
                  artwork.image_id
                    ? formatImageUrl(artwork.image_id)
                    : placeholder
                }
                alt={
                  artwork.thumbnail ? artwork.thumbnail.alt_text : artwork.title
                }
              />
              <figcaption>
                <p className='title'>{artwork.title}</p>
                <p className='secondary'>
                  {artwork.artist_title ? artwork.artist_title : 'Unknown'}
                </p>
                <p className='secondary'>{artwork.medium_display}</p>
                <p className='secondary'>{artwork.date_display}</p>
              </figcaption>
            </GridCard>
          </Link>
        ) : (
          <GridCard key={index}>
            <img
              src={
                artwork.image_id
                  ? formatImageUrl(artwork.image_id)
                  : placeholder
              }
              alt={artwork.alt_text}
            />
            <figcaption>
              <BouncyEllipsis />
            </figcaption>
          </GridCard>
        )
      )}
    </GridWrapper>
  );
};

export default FeaturedArtworks;
