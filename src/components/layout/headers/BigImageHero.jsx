import styled from 'styled-components';
import { slideInFromRight, fadeIn } from 'styles/animations/keyframes';
import { getFromTheme } from 'styles/themes';
import { formatImageUrl } from 'utils/helpers';
import placeholder from 'images/placeholder.svg';
import { BouncyEllipsis } from '../loaders';

const ImageHero = styled.header`
  position: relative;
  height: ${(props) => (props.isFullPage ? 80 : 50)}vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    object-fit: ${(props) => (props.cover ? 'cover' : 'contain')};
  }
  aside {
    animation: ${fadeIn} 1s ease-out, ${slideInFromRight} 1s ease-out;
    z-index: 1;
    align-self: flex-end;
    margin: 1.6rem;
    padding: 1rem 2rem;
    background-color: ${getFromTheme('brandColor')};
    border-radius: 0.5rem;
    font-size: 1.8rem;
    font-family: ${getFromTheme('sansSerifFonts')};
    color: #f4f4f4;
    text-transform: capitalize;
    p {
      &:first-child {
        font-weight: 800;
      }
    }
  
`;
const BigImageHero = ({ image, isFullPage, cover }) => {
  const { image_id, thumbnail, title, artist_title, image_url } = image;
  return (
    <ImageHero isFullPage cover>
      <img
        src={
          image_id
            ? formatImageUrl(image_id)
            : image_url
            ? image_url
            : placeholder
        }
        alt={thumbnail ? thumbnail.alt_text : title}
      />

      <aside>
        <p>{title ?? <BouncyEllipsis isSecondary />}</p>
        <p>{artist_title ?? ''}</p>
      </aside>
    </ImageHero>
  );
};

export default BigImageHero;
