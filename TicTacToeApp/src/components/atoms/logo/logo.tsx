import { Image, StyleSheet, View } from 'react-native';
import { LogoUrl } from '../../../utils/global';
import style from './style';

export const Logo = () => {
    return (
        <View style={style.imageContainer}>
            <Image style={style.image} source={{ uri: LogoUrl }} />
        </View>

    );
}
