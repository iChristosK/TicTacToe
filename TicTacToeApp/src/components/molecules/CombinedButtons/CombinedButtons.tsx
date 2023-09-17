import { GestureResponderEvent, StyleSheet, View } from 'react-native';
import { CustomButton } from '../../atoms/buttons/customButton';
import React from 'react';

export interface WinnerProps {
  winnerTitle: string;
  resetTitle: string;
  onPressWinner: (event: GestureResponderEvent) => void;
  onPressReset: (event: GestureResponderEvent) => void;
}

export const CombinedButtons = ({
  winnerTitle,
  resetTitle,
  onPressReset,
  onPressWinner,
}: WinnerProps) => {
  return (
    <View style={style.controlsRow}>
      <CustomButton title={winnerTitle} onPress={onPressWinner} />
      <CustomButton title={resetTitle} onPress={onPressReset} />
    </View>
  );
};

const style = StyleSheet.create({
  controlsRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    margin: 10,
  },
});
