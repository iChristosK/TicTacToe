import { Text, View } from 'react-native';
import style from './style';

export interface WinnerProps {
    winner: string | null
}

export const WinnerBox = ({ winner }: WinnerProps) => {
    return (
        <View style={style.container}>
            {winner !== null && winner !== 'TIE' ? <Text style={style.winnerText}>{winner} WON THE GAME!</Text> :
                winner === 'TIE' &&
                <Text style={style.winnerText}> IT IS A {winner} ! </Text>}
        </View>

    );
}
