import styled from 'styled-components';
import { getFromTheme } from 'styles/themes';

const scrollButtonText = (
  <i className={'material-icons'} aria-hidden={'true'}>
    keyboard_arrow_up
  </i>
);
const ScrollUpButton = styled.button.attrs((props) => ({
  onClick: () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    document.getElementById('home').focus();
  },
  children: scrollButtonText,
  'aria-label': 'scroll to the top',
}))`
  height: 4.4rem;
  width: 4.4rem;
  border-radius: 50%;
  background-color: ${getFromTheme('brandColorFaded')};
  color: white;
  position: fixed;
  bottom: 5rem;
  right: 3rem;
  transition: all 0.5s ease-out;
  &:hover {
    background-color: ${getFromTheme('brandColor')};
  }
`;

export default ScrollUpButton;
