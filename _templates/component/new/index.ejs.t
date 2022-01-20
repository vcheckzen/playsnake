---
to: src/components/<%= name %>/index.tsx
---

import React from 'react'
import { CompProps } from 'types';
import Styled<%= name %> from './style';

const <%= name %> = ({children, ...rest }: CompProps) => {
  return (
    <Styled<%= name %> {...rest}>
      {children}
    </Styled<%= name %> >
  );
}

export default <%= name %>;
