import styled from 'styled-components';
import { scaleUp, fadeIn } from 'styles/animations/keyframes';
import { getFromTheme } from 'styles/themes';

const Bio = styled.section`
  animation: ${scaleUp} 1s ease-out, ${fadeIn} 1s ease-out;
  color: ${getFromTheme('textColor')};
  p {
    margin: 1rem 0.5rem;
    padding: 0.5rem;
    font-size: 1.6rem;
    font-family: ${getFromTheme('sansSerifFonts')};
    line-height: 1.35;
  }
  a {
    color: lightseagreen;
    font-weight: 600;
  }
`;

export default Bio;
