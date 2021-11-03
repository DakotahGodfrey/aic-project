import styled from 'styled-components/macro';
import { getFromTheme } from 'styles/themes';

const SectionHeader = styled.header`
  padding: 2rem 1.5rem;
  color: ${getFromTheme('textColor')};
  h1 {
    font-size: 3.6rem;
    font-weight: 200;
    text-transform: uppercase;
    color: #222;
  }
  h2 {
    font-size: 2.8rem;
    font-weight: 200;
  }
  h3 {
    font-size: 2.4rem;
    font-weight: 200;
  }
  p {
    font-size: 2rem;
    margin-top: 1.2rem;
  }
`;

export default SectionHeader;
