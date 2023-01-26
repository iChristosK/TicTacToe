import { GestureResponderEvent, Pressable, Text, View } from 'react-native';
import style from './style';

export interface ButtonProps {
    title: string;
    onPress: ((event: GestureResponderEvent) => void);
}
export const CustomButton = ({ title, onPress }: ButtonProps) => {

    return (
        <View style={style.container}>
            <Pressable
                onPress={onPress}
                style={[style.customButtonContainer]}>
                <Text style={style.customButtonText}>{title}</Text>
            </Pressable>
        </View>

    );
}
