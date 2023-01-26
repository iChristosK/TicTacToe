import { checkWinner } from './gameLogic';

describe('checkWinner', () => {
    it('should return the correct winner for a row', () => {
        const board =
            [['X', 'X', 'X'],
            ['', '', ''],
            ['', '', ''],];
        expect(checkWinner(board)).toBe('X');
    });

    // COLUMN WINNER X

    it('should return the correct winner for a column', () => {
        const board =
            [['X', '', ''],
            ['X', '', ''],
            ['X', '', ''],];
        expect(checkWinner(board)).toBe('X');
    });

    it('should return the correct winner for a column', () => {
        const board =
            [['', 'X', ''],
            ['', 'X', ''],
            ['', 'X', ''],];
        expect(checkWinner(board)).toBe('X');
    });

    it('should return the correct winner for a column', () => {
        const board =
            [['', '', 'X'],
            ['', '', 'X'],
            ['', '', 'X'],];
        expect(checkWinner(board)).toBe('X');
    });

    // COLUMN WINNER O


    it('should return the correct winner for a column', () => {
        const board =
            [['O', '', ''],
            ['O', '', ''],
            ['O', '', ''],];
        expect(checkWinner(board)).toBe('O');
    });

    it('should return the correct winner for a column', () => {
        const board =
            [['', 'O', ''],
            ['', 'O', ''],
            ['', 'O', ''],];
        expect(checkWinner(board)).toBe('O');
    });

    it('should return the correct winner for a column', () => {
        const board =
            [['', '', 'O'],
            ['', '', 'O'],
            ['', '', 'O'],];
        expect(checkWinner(board)).toBe('O');
    });

    // CHECK DIAGONAL

    it('should return the correct winner for a diagonal', () => {
        const board =
            [['X', '', ''],
            ['', 'X', ''],
            ['', '', 'X'],
            ];
        expect(checkWinner(board)).toBe('X');
    });

    it('should return the correct winner for a diagonal', () => {
        const board =
            [['', '', 'X'],
            ['', 'X', ''],
            ['X', '', ''],
            ];
        expect(checkWinner(board)).toBe('X');
    });

    it('should return "TIE" for a tied game', () => {
        const board =
            [['X', 'O', 'X'],
            ['X', 'O', 'X'],
            ['O', 'X', 'O'],
            ];
        expect(checkWinner(board)).toBe('TIE');
    });

    it('should return an empty string for an ongoing game', () => {
        const board =
            [['X', '', ''],
            ['', '', ''],
            ['', '', ''],
            ];
        expect(checkWinner(board)).toBe('');
    });

    it('should return an empty string for an ongoing game', () => {
        const board = [
            ['X', 'O', 'X'],
            ['X', '', 'X'],
            ['O', 'X', 'O'],
        ];
        expect(checkWinner(board)).toBe('');
    });


});
