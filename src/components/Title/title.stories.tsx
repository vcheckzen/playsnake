import React from 'react';
import Title from '.';
import 'story.css';
import { GameTitle } from 'types';

export default {
  title: 'Components/Title',
  component: Title,
};

export const Default = () => <Title>{GameTitle.Go}</Title>;
export const Large = () => <Title size="large">{GameTitle.Go}</Title>;
