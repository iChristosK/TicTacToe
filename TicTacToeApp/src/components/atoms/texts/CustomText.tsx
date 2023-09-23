import React from 'react';
import { StyleSheet, Text, TextStyle, useColorScheme } from 'react-native';

interface CustomTextProps {
  text: string;
  style?: TextStyle;
}
export function CustomText({ text, style }: CustomTextProps) {
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    text: {
      color: colorScheme === 'dark' ? 'white' : 'black',
    },
  });

  return <Text style={[style, styles.text]}> {text}</Text>;
}
