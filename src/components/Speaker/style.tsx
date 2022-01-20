import styled from 'styled-components';
import { TransientSvgProps } from 'types';

interface TransientProps extends TransientSvgProps {
  $mute: boolean;
}

const StyledSpeaker = styled.div<TransientProps>`
  width: ${({ $size: { width } }) => width}px;
  height: ${({ $size: { height } }) => height}px;
  cursor: pointer;
  user-select: none;
  opacity: 0.5;
  transition: opacity 0.1s linear;

  :hover {
    opacity: 1;
  }

  path {
    display: ${({ $mute }) => ($mute ? 'none' : '')};
  }
`;

export default StyledSpeaker;
