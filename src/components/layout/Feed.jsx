import styled from 'styled-components';
import { getFromTheme } from 'styles/themes';

const Feed = styled.main`
  max-width: 150rem;
  margin-inline: auto;
  padding: 3rem 2rem 4rem;
  background-color: ${getFromTheme('secondaryColor')};
`;

export default Feed;
