import { getSquareInches, parseInput } from './task1';

describe('getSquareInches', () => {
  it('returns square inces of fabric overlapping within two or more claims', () => {
    const input = ['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'];
    expect(getSquareInches(input)).toBe(4);
  });
});

describe('parseInput', () => {
  it('returns square inces of fabric overlapping within two or more claims', () => {
    const input = [
      '#1 @ 1,3: 4x4',
      '#2 @ 3,1: 4x4',
      '#3 @ 5,5: 2x2',
      '#3 @ 5,5: 2x1'
    ];

    const parsedInput = [
      {
        id: 1,
        x: 1,
        y: 3,
        width: 4,
        height: 4
      },
      {
        id: 2,
        x: 3,
        y: 1,
        width: 4,
        height: 4
      },
      {
        id: 3,
        x: 5,
        y: 5,
        width: 2,
        height: 2
      },
      {
        id: 3,
        x: 5,
        y: 5,
        width: 2,
        height: 1
      }
    ];

    expect(parseInput(input)).toEqual(parsedInput);
  });
});
