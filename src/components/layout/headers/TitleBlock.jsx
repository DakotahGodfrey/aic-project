import styled from 'styled-components';
import { getFromTheme } from 'styles/themes';
import { scaleUp, fadeIn } from 'styles/animations/keyframes';

const TitleBlock = styled.div`
  color: ${getFromTheme('textColor')};
  animation: ${scaleUp} 0.5s ease-out, ${fadeIn} 2s ease-out;
  h1 {
    font-size: 3.8rem;
    font-family: ${(props) => props.theme.sansSerifFonts};
    font-weight: 200;
  }
  p {
    margin-top: 1.5rem;
    font-size: 2.2rem;
  }
  .artist-display {
    white-space: pre-wrap;
  }
`;

export default TitleBlock;
