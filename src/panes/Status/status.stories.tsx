import React from 'react';
import 'story.css';
import Status from '.';
import { GameLevel } from 'types';

export default {
  title: 'Panes/Status',
  component: Status,
};

export const Default = () => <Status />;
export const WithScore = () => (
  <Status level={GameLevel.Python} score={25} bestScore={425} />
);
