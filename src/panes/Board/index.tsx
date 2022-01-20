import React from 'react';
import { BoardCell, GameState } from 'types';
import StyledBoard, {
  StyledSnake,
  StyledAppearFood,
  StyledSpinFood,
  StyledStaticFood,
} from './style';

interface BoardProps {
  cellCount: number;
  food: number[];
  snake: number[];
  state: GameState;
  debug: boolean;
}

const Board = ({ cellCount, food, snake, state, debug }: BoardProps) => {
  const opacity =
    state === GameState.End || state === GameState.Pausing ? '0.3' : '0.75';
  const animationState = state === GameState.Pausing ? 'paused' : 'running';

  const selectFood = (key: number) => {
    switch (state) {
      case GameState.Initial:
        return <StyledSpinFood key={key} $opacity={opacity} />;
      case GameState.End:
        return <StyledStaticFood key={key} $opacity={opacity} />;
      default:
        return (
          <StyledAppearFood
            key={key}
            $opacity={opacity}
            $state={animationState}
          />
        );
    }
  };

  return (
    <StyledBoard $debug={debug}>
      {Array.from({ length: cellCount }, (_, n) => n).map((n) =>
        snake.includes(n + 1) ? (
          <StyledSnake key={n} $opacity={opacity} />
        ) : food.includes(n + 1) ? (
          selectFood(n)
        ) : (
          <div key={n}></div>
        )
      )}
    </StyledBoard>
  );
};

Board.defaultProps = {
  cellCount: BoardCell.column * BoardCell.row,
  food: [87, 103],
  snake: [],
  state: GameState.Initial,
  debug: false,
};
export default Board;
export type { BoardProps };
