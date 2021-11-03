import styled from 'styled-components';
import { spin } from 'styles/animations/keyframes';
import { getFromTheme } from 'styles/themes';

const MenuButton = styled.button.attrs((props) => ({
  className: 'material-icons',
  onClick: props.handleClick,
  children: props.children,
  'aria-expanded': props.isActive,
  'aria-haspopup': 'menu',
}))`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  background-color: ${(props) => getFromTheme('brandColor')};
  color: white;
  &:active {
    animation: ${spin} 1s ease-out;
  }
`;

export default MenuButton;
