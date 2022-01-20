import React from 'react';
import Logo from '.';
import 'story.css';

export default {
  title: 'Components/Logo',
  component: Logo,
};

export const Default = () => <Logo />;
export const Large = () => <Logo width={80} height={80} />;
