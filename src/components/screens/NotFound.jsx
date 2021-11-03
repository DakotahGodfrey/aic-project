import React from 'react';
import Feed from 'components/layout/Feed';
import src from 'images/not_found.svg';
//eslint-disable-next-line
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <Feed
      css={`
        min-height: calc(100vh - 13rem);
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: Helvetica, 'sans-serif';
        h1 {
          font-size: 3.2rem;
          font-weight: 200;
          padding-bottom: 1rem;
        }
        p {
          font-size: 2.4rem;
        }
        a {
          color: #b50938;
        }
        img {
          display: block;
          margin-inline: auto;
          max-width: 100%;
          object-fit: contain;
        }
      `}
    >
      {' '}
      <h1>Page Not Found</h1>
      <p>
        Uh-oh there's been an error. <Link to={'/'}>Return home?</Link>
      </p>
      <img src={src} alt='page not found' />
    </Feed>
  );
};

export default NotFound;
