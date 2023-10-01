export interface TicTacToeState {
  board: string[][];
  currentPlayer: PlayerType;
  winner: string | null;
}

export interface PlaceMark {
  payload: {
    row: number;
    col: number;
  };
}

export interface SetWinner {
  payload: PlayerType;
}

export type PlayerType = 'X' | 'O';
