import React from 'react';
import { GameTitle } from 'types';
import StyledTitle from './style';

interface TitleProps {
  children: React.ReactNode;
  size: 'normal' | 'large';
}
const Title = ({ children, size }: TitleProps) => {
  return <StyledTitle $size={size}>{children}!</StyledTitle>;
};

Title.defaultProps = {
  children: GameTitle.BestScore,
  size: 'normal',
} as TitleProps;
export default Title;
