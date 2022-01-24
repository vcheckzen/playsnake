import { TransientSvgProps } from 'types';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as LogoSvg } from 'assets/logo-inner.svg';
import { expand } from 'utils/mixins';

const uprise = keyframes`
    to {
        background-position: 0 400%;
    }
`;

const StyledLink = styled.a<TransientSvgProps>`
  display: block;
  ${(props) => expand(props, 4)}

  :active {
    padding-top: 1px;
  }
`;

const StyledDisk = styled.span<TransientSvgProps>`
  position: absolute;
  ${(props) => expand(props, 4)}
  display: block;
  border-radius: 50%;
  background-color: #9fc;
  background-image: linear-gradient(
    to bottom,
    #9fc 0%,
    #9cf 25%,
    #f9c 50%,
    #fc9 75%,
    #9fc 100%
  );
  background-size: 100% 400%;
  animation: ${uprise} 8s infinite linear;
  opacity: 0;
  will-change: opacity;
  transition: opacity 0.2s ease-out;

  :hover {
    opacity: 1;
  }

  @media (max-width: 940px), (max-height: 530px) {
    opacity: 0.75;
  }
`;

const StyledLogo = styled(LogoSvg).attrs(({ fill }) => ({
  style: { borderColor: fill },
}))`
  position: absolute;
  z-index: 100;
  pointer-events: none;
  box-sizing: content-box;
  border: 2px solid;
  border-radius: 50%;

  @media (max-width: 940px), (max-height: 530px) {
    opacity: 0.75;
  }
`;

export default StyledLogo;
export { StyledLink, StyledDisk };
