import { Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDispatch } from 'react-redux';
import { placeMark } from '../../../store/reducer/gameReducer';
import styles from './style';

export interface BoardProps {
    board: string[][],
    winner: string | null;
}

export const Board = ({ board, winner }: BoardProps) => {
    const isDarkMode = useColorScheme() === 'dark';
    const dispatch = useDispatch();

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    function handlePlaceMark(row: number, col: number) {
        if (!winner && !board[row][col]) {
            dispatch(placeMark({ row, col }));
        }
    }

    return (

        <View style={[styles.board, { backgroundColor: backgroundStyle.backgroundColor }]}>
            {board.map((row, rowIndex) => (
                <View key={rowIndex} style={[styles.row, { backgroundColor: backgroundStyle.backgroundColor }]}>
                    {row.map((col, colIndex) => (
                        <View key={colIndex} style={styles.cell}>
                            <TouchableOpacity
                                style={[styles.cellButton]}
                                onPress={() => handlePlaceMark(rowIndex, colIndex)}
                            >
                                <Text style={styles.cellText}>{col || ''}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            ))}
        </View>

    );
}
