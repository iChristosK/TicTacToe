import { GestureResponderEvent, StyleSheet, View } from 'react-native';
import { CustomButton } from '../../atoms/buttons/customButton';
import React from 'react';

export interface WinnerProps {
  resetTitle: string;
  onPressReset: (event: GestureResponderEvent) => void;
}

export const ResetButton = ({ resetTitle, onPressReset }: WinnerProps) => {
  return (
    <View style={style.controlsRow}>
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
