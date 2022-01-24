import styled from 'styled-components';
import { invertColor } from 'utils/mixins';

/* 
const displayMixin = (display: boolean) => css`
  opacity: ${display ? '1' : '0'};
  pointer-events: ${display ? '' : 'none'};
`;
*/

const StyledShareButton = styled.p.attrs<{ $stopped: boolean }>(
  ({ $stopped }) => ({
    style: {
      visibility: $stopped ? '' : 'hidden',
    },
  })
)<{ $stopped: boolean }>`
  cursor: pointer;
  width: 145px;
  margin-left: 34px;

  :hover {
    ${({ theme }) => invertColor(theme)}
  }
`;

const StyledStatus = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  user-select: none;

  > p {
    margin: 0;
    border-radius: 6px;
    text-align: center;
    font-size: 34px;
    line-height: 64px;
    height: 55px;
  }

  /* Score */
  > :first-child {
    text-align: start;
  }

  /* Level Score */
  > :last-child {
    text-align: end;
  }

  /* First and Last */
  > p:nth-child(2n + 1) {
    pointer-events: none;
  }
`;

export default StyledStatus;
export { StyledShareButton };
