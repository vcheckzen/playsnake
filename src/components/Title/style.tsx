import styled from 'styled-components';

const StyledTitle = styled.h2.attrs<{ $size: string }>(({ $size }) => ({
  style: {
    fontSize: $size === 'large' ? '184px' : '120px',
  },
}))<{ $size: string }>`
  font-weight: 400;
  text-align: center;
  line-height: 0.95;
  width: 100%;
  margin: 18px 0 0 7px;
  user-select: none;
`;

export default StyledTitle;
