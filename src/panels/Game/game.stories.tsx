import React from 'react';
import Game from '.';
import 'story.css';
import { GameState } from 'types';

export default {
  title: 'Panels/Game',
  component: Game,
};

export const Initial = () => <Game />;
export const Paused = () => (
  <Game
    state={GameState.Pausing}
    food={[8]}
    snake={[68, 69, 70, 71, 50]}
    score={325}
  />
);
export const Over = () => (
  <Game
    state={GameState.End}
    food={[8]}
    snake={[68, 69, 70, 71, 50]}
    score={325}
  />
);
