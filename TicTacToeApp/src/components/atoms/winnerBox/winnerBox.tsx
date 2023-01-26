import { Text, View } from 'react-native';
import { tieString } from '../../../utils/global';
import CustomText from '../texts/CustomText';
import { style } from './style';

export interface WinnerProps {
    winner: string | null
}

export const WinnerBox = ({ winner }: WinnerProps) => {
    return (
        <View style={style.container}>
            {winner !== null && winner !== tieString ? <CustomText style={style.winnerText}>{winner} WON !</CustomText> :
                winner === tieString &&
                <CustomText style={style.winnerText}> IT IS A {winner} ! </CustomText>}
        </View>

    );
}
