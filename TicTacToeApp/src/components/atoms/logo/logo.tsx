import React from 'react';
import { View } from 'react-native';

import { CustomText } from '../texts/CustomText';
import { styles } from './styles';

export const Logo = () => {
  return (
    <View style={styles.imageContainer}>
      <CustomText style={styles.text} text={'Tic Tac Toe '} />
    </View>
  );
};
