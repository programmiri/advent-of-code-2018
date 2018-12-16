import { parseInput, getClaimId } from './task2';

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
        height: 4,
        squares: 16
      },
      {
        id: 2,
        x: 3,
        y: 1,
        width: 4,
        height: 4,
        squares: 16
      },
      {
        id: 3,
        x: 5,
        y: 5,
        width: 2,
        height: 2,
        squares: 4
      },
      {
        id: 3,
        x: 5,
        y: 5,
        width: 2,
        height: 1,
        squares: 2
      }
    ];

    expect(parseInput(input)).toEqual(parsedInput);
  });
});

describe('getClaimId', () => {
  it('returns the claim that is not overlapped by any of the others', () => {
    const input = ['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'];
    expect(getClaimId(input)).toBe(3);
  });
});
