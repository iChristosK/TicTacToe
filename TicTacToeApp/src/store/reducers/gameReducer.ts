import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { checkWinner } from '../../logic/gameLogic';
import { PlaceMark, PlayerType, TicTacToeState } from '../types/types';

const initialState: TicTacToeState = {
  board: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  currentPlayer: 'X',
  winner: null,
};

const gameSlice = createSlice({
  name: 'TicTacToe',
  initialState: initialState,
  reducers: {
    placeMark: (state, action: PayloadAction<PlaceMark>) => {
      const { row, col } = action.payload;
      state.board[row][col] = state.currentPlayer;
      state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
      state.winner = checkWinner(state.board);
    },
    // TODO: Find a way to add an async action to the gameSlice
    // https://medium.com/@ozantekindev/async-operations-in-redux-with-the-redux-toolkit-thunk-e7d024cbf875

    // TODO: LEARN THIS https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#redux-application-data-flow
    setWinner: (state, action: PayloadAction<PlayerType>) => {
      state.winner = action.payload;
    },
    reset: state => {
      state.board = initialState.board;
      state.currentPlayer = initialState.currentPlayer;
      state.winner = initialState.winner;
    },
  },
});

export const { placeMark, setWinner, reset } = gameSlice.actions;

export const gameReducer = gameSlice.reducer;

/* I am using createSlice from redux-toolkit to create the gameReducer.

I have define an interface TicTacToeState that describes the shape of the state, which includes a 2D array board to represent the Tic Tac Toe board, a string currentPlayer to represent the current player, and a string winner to represent the winner of the game.

I then have set the initial state, which is an empty Tic Tac Toe board and current player is X.

IMPORTANT: The placeMark action,  updates the board at the specified row and column with the current player's mark and switches the current player.

The setWinner action, which sets the winner of the game.

The reset action, which resets the board, current player and winner */
