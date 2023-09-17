import { Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDispatch } from 'react-redux';
import { placeMark } from '../../../store/reducer/gameReducer';
import { style } from './style';
import React from 'react';

export interface BoardProps {
  board: string[][];
  winner: string | null;
}

export const Board = ({ board, winner }: BoardProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  function handlePlaceMark(row: number, col: number) {
    if (!winner && !board[row][col]) {
      dispatch(placeMark({ row, col }));
    }
  }

  return (
    <View
      style={[
        style.board,
        { backgroundColor: backgroundStyle.backgroundColor },
      ]}>
      {board.map((row, rowIndex) => (
        <View
          key={rowIndex}
          style={[
            style.row,
            { backgroundColor: backgroundStyle.backgroundColor },
          ]}>
          {row.map((col, colIndex) => (
            <View key={colIndex} style={style.cell}>
              <TouchableOpacity
                style={[style.cellButton]}
                onPress={() => handlePlaceMark(rowIndex, colIndex)}>
                <Text style={style.cellText}>{col || ''}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};
