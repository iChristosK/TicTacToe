import { checkWinner } from './gameLogic';

describe('checkWinner', () => {
  it('should return the correct winner for a row', () => {
    const board = [
      ['X', 'X', 'X'],
      ['', '', ''],
      ['', '', ''],
    ];
    expect(checkWinner(board)).toBe('X');
  });

  it('should return the  winner X for 1st column', () => {
    const board = [
      ['X', '', ''],
      ['X', '', ''],
      ['X', '', ''],
    ];
    expect(checkWinner(board)).toBe('X');
  });

  it('should return the  winner X for 2nd column', () => {
    const board = [
      ['', 'X', ''],
      ['', 'X', ''],
      ['', 'X', ''],
    ];
    expect(checkWinner(board)).toBe('X');
  });

  it('should return the  winner for 3rd column', () => {
    const board = [
      ['', '', 'X'],
      ['', '', 'X'],
      ['', '', 'X'],
    ];
    expect(checkWinner(board)).toBe('X');
  });

  // COLUMN WINNER O

  it('should return the  winner O for 1st column', () => {
    const board = [
      ['O', '', ''],
      ['O', '', ''],
      ['O', '', ''],
    ];
    expect(checkWinner(board)).toBe('O');
  });

  it('should return the winner O for 2nd column', () => {
    const board = [
      ['', 'O', ''],
      ['', 'O', ''],
      ['', 'O', ''],
    ];
    expect(checkWinner(board)).toBe('O');
  });

  it('should return the  winner O for 3rd column', () => {
    const board = [
      ['', '', 'O'],
      ['', '', 'O'],
      ['', '', 'O'],
    ];
    expect(checkWinner(board)).toBe('O');
  });

  // CHECK DIAGONAL

  it('should return the  winner X for diagonal', () => {
    const board = [
      ['X', '', ''],
      ['', 'X', ''],
      ['', '', 'X'],
    ];
    expect(checkWinner(board)).toBe('X');
  });

  it('should return the  winner X for a reverse diagonal', () => {
    const board = [
      ['', '', 'X'],
      ['', 'X', ''],
      ['X', '', ''],
    ];
    expect(checkWinner(board)).toBe('X');
  });

  it('should return "TIE" for a tied game', () => {
    const board = [
      ['X', 'O', 'X'],
      ['X', 'O', 'X'],
      ['O', 'X', 'O'],
    ];
    expect(checkWinner(board)).toBe('TIE');
  });

  it('should return an empty string for an ongoing game', () => {
    const board = [
      ['X', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    expect(checkWinner(board)).toBe('');
  });

  it('should return an empty string for an ongoing game that has empty strings', () => {
    const board = [
      ['X', 'O', 'X'],
      ['X', '', 'X'],
      ['O', 'X', 'O'],
    ];
    expect(checkWinner(board)).toBe('');
  });
});
