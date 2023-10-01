export interface TicTacToeState {
  board: string[][];
  currentPlayer: PlayerType;
  winner: string | null;
}

export type PlayerType = 'X' | 'O';

export type PlaceMark = {
  payload: {
    row: number;
    col: number;
  };
};

export type SetWinner = {
  payload: PlayerType;
};
