import styled from 'styled-components';
import { getFromTheme } from 'styles/themes';
import React from 'react';

const SearchWrapper = styled.form`
  position: relative;
  margin-top: 1.5rem;
  input{
    width: 100%;
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
    background: ${getFromTheme('lightGrey')};
    font-size: 1.8rem;
    height: 5rem;
  }
  button {
    position: absolute;
    top: 0;
    right: 0;
    width: 5rem;
    height: 100%;
    display: flex;
    background-color: ${getFromTheme('brandColor')};
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    color: #fff;
    &:disabled{
      opacity 0.4;
    }
  }
`;

const SearchBar = ({
  placeholder,
  searchHandler,
  value = '',
  changeHandler,
}) => {
  return (
    <SearchWrapper>
      <input
        type='search'
        placeholder={placeholder}
        value={value}
        onChange={(e) => changeHandler(e)}
        required
      />
      <button
        onClick={(e) => searchHandler(e)}
        type='submit'
        disabled={!value}
        className='material-icons'
      >
        search
      </button>
    </SearchWrapper>
  );
};

export default SearchBar;
