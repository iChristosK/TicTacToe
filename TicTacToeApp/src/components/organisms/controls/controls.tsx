import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import { checkWinner } from '../../../logic/gameLogic';
import { reset } from '../../../store/reducer/gameReducer';
import { resetString } from '../../../utils/global';
import { CustomText } from '../../atoms/texts/CustomText';
import { ResetButton } from '../../molecules/CombinedButtons/CombinedButtons';
import { style } from './style';

export interface ControlProps {
  board: string[][];
  currentPlayer: string;
}

export const Controls = ({ board, currentPlayer }: ControlProps) => {
  const dispatch = useDispatch();
  const winner = checkWinner(board);

  function handleReset() {
    dispatch(reset());
  }

  return (
    <View style={style.controlsContainer}>
      {!winner ? (
        <CustomText
          text={`${currentPlayer} is playing!`}
          style={style.currentPlayerText}
        />
      ) : null}
      <ResetButton resetTitle={resetString} onPressReset={handleReset} />
    </View>
  );
};
