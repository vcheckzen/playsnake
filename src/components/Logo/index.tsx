import React from 'react';
import { SvgProps, defaultSvgProps } from 'types';
import StyledLogo, { StyledLink, StyledDisk } from './style';

const Logo = (props: SvgProps) => {
  return (
    <StyledLink href="/" $size={props}>
      <StyledDisk $size={props} />
      <StyledLogo {...props} />
    </StyledLink>
  );
};

Logo.defaultProps = defaultSvgProps;
export default Logo;
