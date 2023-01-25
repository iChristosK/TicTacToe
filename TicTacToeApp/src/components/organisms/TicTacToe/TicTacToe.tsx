import { Button, GestureResponderEvent, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { checkWinner } from '../../../logic/gameLogic';
import { placeMark, reset, setWinner, TicTacToeState } from '../../../store/reducer/gameReducer';
import DarkMode from '../../../utils/darkmode';
import { Logo } from '../../atoms/logo/logo';
import CustomText from '../../atoms/texts/CustomText';
import { Board } from '../../molecules/board/Board';
import { CombinedButtons } from '../../molecules/CombinedButtons/CombinedButtons';
import styles from './style'
import { WinnerBox } from '../../atoms/winnerBox/winnerBox';

export const TicTacToe = () => {
    const game = useSelector((state: TicTacToeState) => state)
    const board = game.board
    const winner = game.winner
    const currentPlayer = game.currentPlayer
    const dispatch = useDispatch();

    function handleCheckWinner() {
        const winner = checkWinner(board)
        if (winner) {
            if (winner === 'TIE') {
                dispatch(setWinner("TIE"))
            } else {
                dispatch(setWinner(winner));
            }
        }
    }

    function handleReset() {
        dispatch(reset());
    }
    return (

        <DarkMode>
            <View style={styles.container}>
                <Logo />
                <Board board={board} winner={winner} />
                <WinnerBox winner={winner} />

                <View style={styles.controlsContainer}>
                    <CustomText style={styles.currentPlayerText}>
                        {currentPlayer} is playing!
                    </CustomText>
                    <CombinedButtons winnerTitle={'Check Winner'} resetTitle={'Reset'} onPressWinner={handleCheckWinner} onPressReset={handleReset} />
                </View>
            </View>

        </DarkMode >


    );
};


/* 
Here, we're using the useSelector hook to access the board, currentPlayer, and winner state from the store.

We pass a function to useSelector that takes the state as an argument and returns the specific piece of state we want to access.

We also import the TicTacToeState interface from the reducer file, to access the state shape.

We then use these state values to render the Tic Tac Toe board, showing the current mark on each button and indicating the winner of the game if there is one.
*/ 