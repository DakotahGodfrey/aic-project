import styled from 'styled-components';
import { getFromTheme } from 'styles/themes';
import { spin } from 'styles/animations/keyframes';
const ThemeToggle = styled.button.attrs((props) => ({
  children: props.children,
  onClick: props.handleClick,
  'aria-pressed': props.isPressed,
  'aria-label': props.ariaLabel,
}))`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  background-color: ${(props) => getFromTheme('brandColor')};
  color: white;
  &:active {
    animation: ${spin} 1.5s ease-out;
  }
`;

export default ThemeToggle;
