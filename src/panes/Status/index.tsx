import React from 'react';
import { GameConfig, defaultGameConfig } from 'types';
import StyledStatus, { StyledShareButton } from './style';

interface StatusProps extends GameConfig {
  stopped: boolean;
}

const Status = ({ score, bestScore, level, stopped }: StatusProps) => {
  const sharable = typeof window.navigator.share === 'function' && stopped;
  const handleShare = () => {
    sharable &&
      window.navigator.share({
        title: 'Snake',
        text: `I scored ${score} in Snake!`,
        url: window.location.href,
      });
  };

  return (
    <StyledStatus>
      <p>{score}</p>
      <StyledShareButton onClick={handleShare} $stopped={sharable}>
        share!
      </StyledShareButton>
      <p>{`${level} ${bestScore}`}</p>
    </StyledStatus>
  );
};

Status.defaultProps = {
  stopped: false,
  ...defaultGameConfig,
} as StatusProps;
export default Status;
