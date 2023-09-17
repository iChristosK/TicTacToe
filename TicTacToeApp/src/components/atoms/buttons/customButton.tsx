import { GestureResponderEvent, Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import React from 'react';

export interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}
export const CustomButton = ({ title, onPress }: ButtonProps) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.customButtonContainer}>
        <Text style={styles.customButtonText}>{title}</Text>
      </Pressable>
    </View>
  );
};
