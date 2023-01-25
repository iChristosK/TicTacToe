import { Button, GestureResponderEvent, Pressable, TouchableOpacity, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CustomText from '../texts/CustomText';
import style from './style';

export interface ButtonProps {
    title: string;
    onPress: ((event: GestureResponderEvent) => void);
}

export const CustomButton = ({ title, onPress }: ButtonProps) => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <View style={style.container}>
            <Pressable
                onPress={onPress}
                style={[style.customButtonContainer, { backgroundColor: backgroundStyle.backgroundColor }]}>
                <CustomText style={style.customButtonText}>{title}</CustomText>
            </Pressable>
        </View>

    );
}
