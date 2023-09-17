import React from 'react';
import { StyleSheet, Text, useColorScheme } from 'react-native';

const CustomText = (props: any) => {
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    text: {
      color: colorScheme === 'dark' ? 'white' : 'black',
    },
  });

  return <Text style={[props.style, styles.text]}> {props.children}</Text>;
};

export default CustomText;
