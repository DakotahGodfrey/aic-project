import styled from 'styled-components';
import { getFromTheme } from 'styles/themes';
import React from 'react';

const AccordionWrapper = styled.div`
  font-size: 1.7rem;
  button {
    font-size: inherit;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    background-color: transparent;
    color: ${getFromTheme('textColor')};
    width: 100%;
    margin: 2rem 0 0 0;
    &:hover {
      color: ${getFromTheme('brandColor')};
    }
  }
  .body {
    padding: 0 2.2rem;
    overflow-y: scroll;
    overflow-x: hidden;
    color: ${getFromTheme('textColor')};
    border-left: 1px solid ${getFromTheme('mutedText')};
    max-height: ${(props) => (props.isActive ? '120rem' : 0)};
    list-style-type: disc;
    li {
      margin-bottom: 1rem;
    }
  }
  p {
    padding: 1rem;
  }
`;

const AccordionCard = ({ heading, body, isArray }) => {
  const [isActive, setIsActive] = React.useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <AccordionWrapper isActive={isActive} handleClick={handleClick}>
      <button onClick={handleClick} aria-expanded={isActive}>
        {heading}
        <span className='material-icons'>{isActive ? 'remove' : 'add'}</span>
      </button>

      {isArray ? (
        <ul className='body'>
          {body
            .filter((str) => /\S/.test(str))
            .map((str, index) => (
              <li key={index}>{str}</li>
            ))}
        </ul>
      ) : (
        <div className='body' role='dialog'>
          <p>{body}</p>
        </div>
      )}
    </AccordionWrapper>
  );
};

export default AccordionCard;
