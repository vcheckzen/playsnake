import React from 'react';
import Speaker from '.';
import 'story.css';

export default {
  title: 'Components/Speaker',
  component: Speaker,
};

export const Default = () => <Speaker />;
export const Large = () => <Speaker width={80} height={80} />;
