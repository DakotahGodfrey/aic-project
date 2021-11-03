import styled, { keyframes } from 'styled-components';
import { getFromTheme } from 'styles/themes';

const bounce = keyframes`
0%,
  100% {
    transform: scale(0.25);
  }
  25% {
    transform: scale(0.1);
  }
  50% {
    transform: scale(1);
    background: coral;
  }`;

const inlineBouncing = keyframes`
0%, 100%{
  transform: translateY(0px);
}
50%{
  transform: translateY(-4px);
}
`;

const BouncyLoading = styled.div`
  width: 100%;
  display: flex;
  gap: 3rem;
  justify-content: center;
  margin: 3rem 0;
  div {
    height: 3vh;
    width: 3vh;
    border-radius: 50%;
    background-color: ${getFromTheme('brandColor')};
    animation: ${bounce} 2s ease-in-out infinite;
  }
  div:nth-child(1) {
    animation-delay: 0s;
  }
  div:nth-child(2) {
    animation-delay: 0.2s;
  }
  div:nth-child(3) {
    animation-delay: 0.4s;
  }
  div:nth-child(4) {
    animation-delay: 0.6s;
  }
  div:nth-child(5) {
    animation-delay: 0.8s;
  }
  div:nth-child(6) {
    animation-delay: 1s;
  }
`;
const InlineBounce = styled.div`
  font-size: 1.6rem;
  text-align: center;
  font-family: ${getFromTheme('sansSerifFonts')};
  color: ${(props) => props.isSecondary && getFromTheme('textColor')};
  div {
    display: inline-block;
    font-size: 2.2rem;
    animation: ${inlineBouncing} 1s ease-out infinite;
  }

  div:nth-child(1) {
    animation-delay: 0.2s;
  }
  div:nth-child(2) {
    animation-delay: 0.4s;
  }
  div:nth-child(3) {
    animation-delay: 0.5s;
  }
`;
export const BouncyEllipsis = ({ isSecondary }) => {
  return (
    <InlineBounce isSecondary>
      Loading
      <div>.</div>
      <div>.</div>
      <div>.</div>
    </InlineBounce>
  );
};
export const Loader = () => {
  return (
    <BouncyLoading>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </BouncyLoading>
  );
};
