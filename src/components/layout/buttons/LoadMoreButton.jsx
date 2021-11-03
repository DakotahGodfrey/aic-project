import styled from 'styled-components';
import { getFromTheme } from 'styles/themes';

const loadMoreText = (
  <>
    Load More{' '}
    <i className='material-icons' aria-hidden={true}>
      keyboard_arrow_down
    </i>
  </>
);

const LoadMoreButton = styled.button.attrs((props) => ({
  children: loadMoreText,
  'aria-label': 'Load More',
}))`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: max-content;
  font-size: 1.8rem;
  color: #fff;
  padding: 1rem 3rem;
  border-radius: 50px;
  margin-inline: auto;
  background-color: ${getFromTheme('brandColor')};
  &:disabled {
    opacity: 0.4;
  }
  span {
    margin-left: 1rem;
  }
`;

export default LoadMoreButton;
