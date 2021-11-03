import { GridWrapper, GridCard } from 'components/layout/Layout';
import { formatImageUrl } from 'utils/helpers';
import placeholder from 'images/placeholder.svg';
import { Link } from 'react-router-dom';
import { BouncyEllipsis } from '../loaders';
const ArtistsGalleryView = ({ artists, coverImages, columns = 3 }) => {
  return (
    <GridWrapper columns={columns}>
      {artists.map((artist, index) =>
        artist.id ? (
          <Link to={`/artists/${artist.id}`} key={artist.id}>
            <GridCard>
              <img
                src={
                  coverImages[index].image_id
                    ? formatImageUrl(coverImages[index].image_id)
                    : placeholder
                }
                alt={
                  coverImages[index].thumbnail
                    ? coverImages[index].thumbnail.alt_text
                    : artist.title
                }
              />
              <figcaption>
                <p className='title'>{artist.title}</p>
              </figcaption>
            </GridCard>
          </Link>
        ) : (
          <GridCard key={index}>
            <img src={placeholder} alt={'loading'} />
            <figcaption>
              <BouncyEllipsis />
            </figcaption>
          </GridCard>
        )
      )}
    </GridWrapper>
  );
};

export default ArtistsGalleryView;
