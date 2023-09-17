import { Image, View } from 'react-native';
import { LogoUrl } from '../../../utils/global';
import { styles } from './styles';
import React from 'react';

export const Logo = () => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: LogoUrl }} />
    </View>
  );
};
