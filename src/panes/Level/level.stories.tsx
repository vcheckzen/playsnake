import React from 'react';
import Level from '.';
import 'story.css';

export default {
  title: 'Panes/Level',
  component: Level,
};

export const Default = () => <Level onClick={(level) => console.log(level)} />;
