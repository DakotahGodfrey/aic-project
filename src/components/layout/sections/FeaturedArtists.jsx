import { CarouselWrapper, CarouselCard } from 'components/layout/Layout';
import { Link } from 'react-router-dom';
import { formatImageUrl } from 'utils/helpers';
import placeholder from 'images/placeholder.svg';

const FeaturedArtists = ({ artists, coverImages }) => {
  return (
    <CarouselWrapper>
      {artists.map((artist, index) =>
        artist.id ? (
          <Link to={`/artists/${artist.id}`} key={artist.id}>
            <CarouselCard isArtist>
              <img
                src={formatImageUrl(coverImages[index].image_id)}
                alt={coverImages[index].thumbnail.alt_text ?? ''}
              />
              <figcaption>
                <p>{artist.title}</p>
              </figcaption>
            </CarouselCard>
          </Link>
        ) : (
          <CarouselCard isArtist key={index}>
            <img src={placeholder} alt='loading' />
            <figcaption>
              <p>Loading...</p>
            </figcaption>
          </CarouselCard>
        )
      )}
    </CarouselWrapper>
  );
};
export default FeaturedArtists;
