import React from 'react';
import Board from '.';
import 'story.css';
import { GameState } from 'types';

export default {
  title: 'Panes/Board',
  component: Board,
};

export const Default = () => (
  <Board food={[8]} snake={[68, 69, 70, 71, 50]} state={GameState.Playing} />
);
export const Debug = () => <Board debug={true} />;
