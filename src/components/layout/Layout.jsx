import styled from 'styled-components';
import { fadeIn, scaleUp } from 'styles/animations/keyframes';
import { getFromTheme } from 'styles/themes';

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: ${(props) =>
    props.columnSize ? props.columnSize : `repeat(${props.columns}, 1fr)`};
  grid-gap: ${(props) => (props.bigGap ? 3 : 1.5)}rem;
  padding-top: 3rem;
`;

const GridCard = styled.figure`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-color: transparent;
  transition: all 0.4s ease-out;
  height: 100%;
  animation: ${fadeIn} 1500ms ease-out;
  &:hover {
    border-color: ${getFromTheme('mutedText')};
    border-radius: 50px;
  }
  img {
    animation: ${scaleUp} 1s ease-out;
    max-width: 100%;
    padding: 3rem 1rem 0 1rem;
    flex-grow: 2;
    margin: 1rem;
    object-fit: cover;
  }
  figcaption {
    padding: 1rem 0 2rem 1rem;
    margin: 1.5rem;
    max-height: 25rem;
    animation: ${fadeIn} 1500ms ease-out;
    overflow-y: scroll;
  }
  p {
    line-height: 1.6;
    padding-top: 1.4rem;
    &.title {
      font-size: 2rem;
      font-weight: 700;
      color: ${getFromTheme('textColor')};
    }
    &.secondary {
      font-family: ${getFromTheme('serifFonts')};
      font-size: 1.8rem;
      color: ${getFromTheme('textColor')};
    }
  }
`;

const CarouselWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: nowrap;
  overflow-x: scroll;

  border-top: 1px solid ${(props) => props.theme.mutedText};
  padding: 3rem 1.5rem;
`;
const CarouselCard = styled.figure`
  height: 33vh;
  animation: ${scaleUp} 1s ease-out;
  width: ${(props) => (props.isArtist ? '250px' : '300px')};
  flex-shrink: 0;
  position: relative;
  padding: 0;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  figcaption {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease-out;
    background-color: rgba(0, 0, 0, 0.4);
    &:hover {
      background-color: rgba(0, 0, 0, 0.4);
      p {
        opacity: 1;
      }
    }
    p {
      color: #fff;
      transition: all 0.4s ease-out;
      text-align: center;
      font-size: 1.7rem;
      font-weight: 700;
      padding: 1.5rem;
      font-family: ${getFromTheme('sansSerifFonts')};
      text-transform: uppercase;
    }
  }
`;

export { GridWrapper, GridCard, CarouselWrapper, CarouselCard };
