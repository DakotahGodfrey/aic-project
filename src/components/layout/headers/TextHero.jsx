import styled from 'styled-components';
import { getFromTheme } from 'styles/themes';

const Hero = styled.header`
  min-height: 33vh;
  position: relative;
  padding: 3rem 0;
  max-width: 140rem;
  margin-inline: auto;
  color: ${getFromTheme('textColor')};
  div {
    position: absolute;
    bottom: 0;
    flex-direction: column;
    display: flex;
    justify-content: center;
  }
  h1 {
    width: max-content;
    padding: 3rem 0;
    font-size: 3.6rem;
    font-weight: 200;
  }
  p {
    border-top: 2px solid ${getFromTheme('mutedText')};
    padding-top: 1.5rem;
    color: ${getFromTheme('mutedText')};
    font-size: 2.8rem;
    font-family: ${getFromTheme('serifFonts')};
  }
  video {
    height: 33vh;
    width: 100%;
    object-fit: cover;
  }
`;

const TextHero = ({ heading, message }) => {
  return (
    <Hero>
      <h1>{heading}</h1>
      <p>{message}</p>
    </Hero>
  );
};

export default TextHero;
