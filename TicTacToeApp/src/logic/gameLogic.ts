
export const checkWinner = (board: string[][]): string => {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            return board[i][0];
        }
    }
    // Check columns
    for (let i = 0; i < 3; i++) {
        if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            return board[0][i];
        }
    }
    // Check diagonals
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return board[0][0];
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return board[0][2];
    }
    // Check for tie
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                return '';
            }
        }
    }
    return 'TIE';
}

/*This logic checks a 3x3 board (as a 2D array) to determine if there is a winner. It checks the rows, columns, and diagonals of the board for three consecutive matching symbols. If there is a winner, it returns the symbol of the winning player. If there are no matches, it checks for any empty spaces on the board and returns an empty string if there are any. If all spaces are filled and there is no winner, it returns TIE */