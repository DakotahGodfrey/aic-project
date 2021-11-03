import React, { useState, useEffect } from 'react';

import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { getFromTheme } from 'styles/themes';
import useViewport from 'utils/hooks/useViewport';
import { mediaQueries } from 'utils/data';
import { slideInFromRight } from 'styles/animations/keyframes';
import MenuButton from '../buttons/MenuButtton';
import ThemeToggle from '../buttons/ThemeToggle';

const PageNav = styled.nav`
  position: sticky;
  top: 0;
  padding: 2rem 3rem;
  background: ${getFromTheme('navBG')};
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 13rem;
  box-shadow: 0 2px 4px ${getFromTheme('secondaryColor')};
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.8rem;
    li:not(:first-child) {
      margin-left: 1.4rem;
    }
    a {
      display: block;
      padding: 0.75rem 1.5rem;
      color: ${getFromTheme('lightColor')};
      border-radius: 1rem;
      transition: background-color 0.4s ease-out;
      &:hover,
      &:focus {
        background-color: ${getFromTheme('brandColor')};
      }
    }
  }
`;

const Logo = styled.div`
  height: 4.4rem;
  width: 4.4rem;
  font-size: 1.4rem;
  a {
    transition: all 0.4s ease-out;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    color: ${getFromTheme('lightColor')};
    padding: 0.75rem 0.75rem;
    border-radius: 50%;
    span {
      font-size: 3.4rem;
    }
  }
  a:hover,
  a:focus {
    background-color: ${getFromTheme('brandColor')};
    border-color: transparent;
  }
`;

const MobileMenu = styled.ul.attrs((props) => ({
  id: 'navMenu',
}))`
  position: fixed;
  top: 13rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  font-size: 1.8rem;
  text-align: center;
  padding: 1rem 0;
  background: rgba(17, 17, 17, 0.9);
  z-index: 3;
  animation: ${slideInFromRight} 1s ease-out forwards;
  li {
    width: 100%;
  }
  a {
    text-transform: capitalize;
    color: ${getFromTheme('lightColor')};
    display: flex;
    width: 100%;
    min-height: 4.4rem;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    border-radius: 1rem;
    transition: background-color 0.4s ease-out;
    &:hover {
      color: ${getFromTheme('lightColor')};
      background-color: ${getFromTheme('brandColor')};
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  button:not(:first-child) {
    margin-left: 1.6rem;
  }
`;

const SiteNav = ({ links, toggleTheme, theme }) => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };
  const handleHomeClick = () => {
    if (isActive) {
      setIsActive(false);
    }
  };
  const { width } = useViewport();
  const { small } = mediaQueries;
  const isSmall = width < small;
  useEffect(() => {
    if (isActive) {
      document.getElementById('1').focus();
    }
  }, [isActive]);
  return (
    <>
      <PageNav>
        <Logo>
          <Link onClick={() => handleHomeClick()} to={'/'} id='home'>
            <span className='material-icons'>home</span>
          </Link>
        </Logo>
        {isSmall ? (
          <ButtonContainer>
            <MenuButton
              isActive={isActive}
              handleClick={() => handleMenuClick()}
              children={isActive ? 'close' : 'menu'}
            />
            <ThemeToggle
              handleClick={() => toggleTheme()}
              isPressed={theme !== 'default'}
            >
              <i className='material-icons'>
                {theme === 'default' ? 'mode_night' : 'light_mode'}
              </i>
            </ThemeToggle>
          </ButtonContainer>
        ) : (
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <Link to={link.path} children={link.display} />
              </li>
            ))}
            <li>
              <ThemeToggle
                handleClick={() => toggleTheme()}
                isPressed={theme !== 'default'}
                aria-label='toggle theme'
              >
                <i className='material-icons'>
                  {theme === 'default' ? 'mode_night' : 'light_mode'}
                </i>
              </ThemeToggle>
            </li>
          </ul>
        )}
      </PageNav>
      {isActive && isSmall && (
        <MobileMenu>
          {links.map((link) => (
            <li key={link.id}>
              <Link
                onClick={handleMenuClick}
                to={link.path}
                id={link.id}
                children={link.display}
              />
            </li>
          ))}
        </MobileMenu>
      )}
    </>
  );
};

export default SiteNav;
