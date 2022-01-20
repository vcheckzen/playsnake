import React from 'react';
import Level from 'panes/Level';
import StyledWelcome from './style';
import { GameLevel } from 'types';

interface WelcomeProps {
  onClick: (level: GameLevel) => void;
}

const Welcome = ({ onClick }: WelcomeProps) => {
  return (
    <StyledWelcome>
      <h1>Snake</h1>
      <p>Choose level:</p>
      <Level onClick={onClick} />
    </StyledWelcome>
  );
};

Welcome.defaultProps = {
  onClick: () => {},
};
export default Welcome;
