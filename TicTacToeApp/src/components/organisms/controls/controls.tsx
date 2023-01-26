import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { checkWinner } from '../../../logic/gameLogic';
import { reset, setWinner } from '../../../store/reducer/gameReducer';
import { checkWinnerString, resetString, tieString } from '../../../utils/global';
import CustomText from '../../atoms/texts/CustomText';
import { CombinedButtons } from '../../molecules/CombinedButtons/CombinedButtons';
import styles from './style';

export interface ControlProps {
    board: string[][],
    currentPlayer: 'X' | 'O';
}

export const Controls = ({ board, currentPlayer }: ControlProps) => {

    const dispatch = useDispatch();
    function handleCheckWinner() {
        const winner = checkWinner(board)
        if (winner) {
            if (winner === tieString) {
                dispatch(setWinner(tieString))
            } else {
                dispatch(setWinner(winner));
            }
        }
    }

    function handleReset() {
        dispatch(reset());
    }

    return (

        <View style={styles.controlsContainer}>
            <CustomText style={styles.currentPlayerText}>
                {currentPlayer} is playing!
            </CustomText>
            <CombinedButtons winnerTitle={checkWinnerString} resetTitle={resetString} onPressWinner={handleCheckWinner} onPressReset={handleReset} />
        </View>

    );
}
