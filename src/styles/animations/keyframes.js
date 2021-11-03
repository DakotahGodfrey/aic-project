import { keyframes } from 'styled-components';

const slideInFromRight = keyframes`
  from{
    transform: translateX(-100vw);
  }
  to{
    transform: translateX(0);
  }
`;
const spin = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(720deg);
  }
`;
const fadeIn = keyframes`
  from{
    opacity 0
  }
  to{
    opacity:1
  }
`;
const scaleUp = keyframes`
from{
  transform: scale(0);
}
to{
  transform: scale(1)
}
`;
export { slideInFromRight, spin, fadeIn, scaleUp };
