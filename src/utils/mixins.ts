import { css, DefaultTheme } from 'styled-components';
import { TransientSvgProps } from 'types';

export const invertColor = (theme: DefaultTheme) => css`
  color: ${theme.secondaryColor};
  background-color: ${theme.primaryColor};
`;

export const expand = (
  { $size: { width, height } }: TransientSvgProps,
  add: number
) => css`
  width: ${width! + add}px;
  height: ${height! + add}px;
`;
