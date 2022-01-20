import styled from 'styled-components';

const StyledApp = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  > * {
    position: absolute;
  }

  /* Logo */
  > :first-child {
    left: 15px;
    left: calc(15px + env(safe-area-inset-right));
    top: 15px;
    top: calc(15px + env(safe-area-inset-top));
  }

  /* Speaker */
  > :nth-child(2) {
    right: 15px;
    right: calc(15px + env(safe-area-inset-right));
    top: 15px;
    top: calc(15px + env(safe-area-inset-top));
  }

  /* GamePanel */
  > :last-child {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 597px;

    @media (max-width: 940px), (max-height: 530px) {
      transform: translate(-50%, -50%) scale(0.5);
    }
  }
`;

export default StyledApp;
