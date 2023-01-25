import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { checkWinner } from '../logic/gameLogic';
import { placeMark, reset, setWinner, TicTacToeState } from '../store/reducer/gameReducer';

export const TicTacToe = () => {
    const board = useSelector((state: TicTacToeState) => state.board)
    const currentPlayer = useSelector((state: TicTacToeState) => state.currentPlayer)
    const winner = useSelector((state: TicTacToeState) => state.winner)
    const dispatch = useDispatch();
    // render the Tic Tac Toe board using the board, currentPlayer, and winner state


    function handlePlaceMark(row: number, col: number) {
        if (!winner && !board[row][col]) {
            dispatch(placeMark({ row, col }));
        }
    }

    function handleTie() {

        // Code to handle a tie
        // Example: display a message "It's a tie"
    }

    function handleCheckWinner() {
        const winner = checkWinner(board)
        // check if there is a winner and dispatch the setWinner action
        // with the winner as the payload
        if (winner) {
            if (winner === 'TIE') {
                handleTie();
            } else {
                dispatch(setWinner(winner));
            }
        }
    }

    function handleReset() {
        dispatch(reset());
    }
    return (

        <SafeAreaView style={[styles.container]}>
            <View style={styles.board} >
                {board.map((row: any, rowIndex: any) => (
                    <View key={rowIndex}>
                        {row.map((col: any, colIndex: any) => (
                            // TODO: Make smaller component

                            <Button
                                key={colIndex}
                                title={col || `${rowIndex}, ${colIndex}`}
                                onPress={() => handlePlaceMark(rowIndex, colIndex)}
                            />
                        ))}
                    </View>
                ))}
                {winner && <Text>{winner} won the game!</Text>}
                {currentPlayer && <Text>{currentPlayer} is playing!</Text>}
                <Button title="Check Winner" onPress={handleCheckWinner} />
                <Button title="Reset" onPress={handleReset} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 1
    },
    board: {
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 10,
    }

})

/* 
Here, we're using the useSelector hook to access the board, currentPlayer, and winner state from the store.

We pass a function to useSelector that takes the state as an argument and returns the specific piece of state we want to access.

We also import the TicTacToeState interface from the reducer file, to access the state shape.

We then use these state values to render the Tic Tac Toe board, showing the current mark on each button and indicating the winner of the game if there is one.
*/ 