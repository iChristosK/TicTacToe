import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { checkWinner } from '../../../logic/gameLogic';
import { reset, setWinner } from '../../../store/reducer/gameReducer';
import {
  checkWinnerString,
  resetString,
  tieString,
} from '../../../utils/global';
import CustomText from '../../atoms/texts/CustomText';
import { CombinedButtons } from '../../molecules/CombinedButtons/CombinedButtons';
import { style } from './style';
import React from 'react';

export interface ControlProps {
  board: string[][];
  currentPlayer: string;
}

export const Controls = ({ board, currentPlayer }: ControlProps) => {
  const dispatch = useDispatch();
  function handleCheckWinner() {
    const winner = checkWinner(board);
    if (winner) {
      if (winner === tieString) {
        dispatch(setWinner(tieString));
      } else {
        dispatch(setWinner(winner));
      }
    }
  }

  function handleReset() {
    dispatch(reset());
  }

  return (
    <View style={style.controlsContainer}>
      <CustomText style={style.currentPlayerText}>
        {currentPlayer} is playing!
      </CustomText>
      <CombinedButtons
        winnerTitle={checkWinnerString}
        resetTitle={resetString}
        onPressWinner={handleCheckWinner}
        onPressReset={handleReset}
      />
    </View>
  );
};
