import styled from 'styled-components';

const StyledGame = styled.div`
  width: 597px;
`;

const MainWrapper = styled.div<{ $clickable: boolean }>`
  position: relative;
  height: 422px;
  border: 4px solid rgb(39, 47, 23);

  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : '')};
  pointer-events: ${({ $clickable }) => ($clickable ? '' : 'none')};

  > * {
    position: absolute;
    pointer-events: initial;
  }

  > :last-child {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StatusWrapper = styled.div`
  margin-top: 6px;
  height: 55px;
`;

export default StyledGame;
export { MainWrapper, StatusWrapper };
