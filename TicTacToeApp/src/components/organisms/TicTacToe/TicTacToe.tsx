import { useColorScheme, View } from 'react-native';
import { useSelector } from 'react-redux';
import { TicTacToeState } from '../../../store/reducer/gameReducer';
import { Logo } from '../../atoms/logo/logo';
import { Board } from '../../molecules/board/Board';
import { styles } from './style';
import DarkMode from '../../../utils/darkmode';
import { WinnerBox } from '../../atoms/winnerBox/winnerBox';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Controls } from '../controls/controls';
import React from 'react';

export const TicTacToe = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const gameState = useSelector((state: TicTacToeState) => state);
  const { board, currentPlayer, winner } = gameState;
  return (
    <DarkMode>
      <View
        style={[
          styles.container,
          { backgroundColor: backgroundStyle.backgroundColor },
        ]}>
        <Logo />
        <WinnerBox winner={winner} />
        <Board board={board} winner={winner} />
        <Controls board={board} currentPlayer={currentPlayer} />
      </View>
    </DarkMode>
  );
};

/*
Here, we're using the useSelector hook to access the board, currentPlayer, and winner state from the store.

We pass a function to useSelector that takes the state as an argument and returns the specific piece of state we want to access.

We also import the TicTacToeState interface from the reducer file, to access the state shape.

We then use these state values to render the Tic Tac Toe board, showing the current mark on each button and indicating the winner of the game if there is one.
*/
