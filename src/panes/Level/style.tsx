import styled from 'styled-components';
import { invertColor } from 'utils/mixins';

const StyledLevel = styled.div`
  display: flex;
  justify-content: space-between;
  user-select: none;

  > p {
    border-radius: 8px;
    font-size: 46px;
    height: 91px;
    line-height: 102px;
    text-align: center;
    padding: 0 14px 0 20px;
    cursor: pointer;
  }

  > p:hover {
    ${({ theme }) => invertColor(theme)}
  }
`;

export default StyledLevel;
