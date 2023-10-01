export interface TicTacToeState {
  board: string[][];
  currentPlayer: PlayerType;
  winner: string | null;
}

export interface PlaceMark {
  row: number;
  col: number;
}

export type PlayerType = 'X' | 'O';
