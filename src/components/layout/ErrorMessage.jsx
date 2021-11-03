import styled from 'styled-components/macro';

const ErrorMessage = styled.span.attrs((props) => ({
  role: 'alert',
}))`
  font-size: 1.6rem;
  margin-left: 1rem;
  color: red;
  font-weight: 700;
`;

export { ErrorMessage };
