import styled from 'styled-components';
import { getFromTheme } from 'styles/themes';
import useViewport from 'utils/hooks/useViewport';
import { Link } from 'react-router-dom';
import { mediaQueries } from 'utils/data';

const SectionNav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  align-items: center;
  border-bottom: ${getFromTheme('mutedText')} 1px solid;

  h2 {
    margin-top: 2rem;
    font-size: 2.4rem;
    font-family: Helvetica, sans-serif;
    font-weight: 200;
    color: ${getFromTheme('textColor')};
  }
  a {
    margin-top: 2rem;
    font-size: 2rem;
    color: ${getFromTheme('textColor')};
    &:hover {
      text-decoration: underline;
      color: ${getFromTheme('linkHover')};
    }
  }
`;

const SectionLink = ({ heading, link }) => {
  const { width } = useViewport();
  const { xSmall } = mediaQueries;
  const isXSmall = width < xSmall;
  return (
    <SectionNav>
      <h2>{heading}</h2>
      {link && !isXSmall && <Link to={link.path}>{link.text} &gt;</Link>}
    </SectionNav>
  );
};

export default SectionLink;
