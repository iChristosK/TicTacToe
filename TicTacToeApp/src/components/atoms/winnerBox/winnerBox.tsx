import React from 'react';
import { View } from 'react-native';

import { CustomText } from '../texts/CustomText';
import { style } from './style';

export interface WinnerProps {
  winner: string | null;
}

export const WinnerBox = ({ winner }: WinnerProps) => {
  const absoluteWin = winner === 'TIE' ? winner : winner;
  return (
    <View style={style.container}>
      {winner ? (
        <CustomText text={`Winner: ${absoluteWin}!`} style={style.winnerText} />
      ) : null}
    </View>
  );
};
