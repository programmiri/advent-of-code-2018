import { calcSizeOfLargestArea } from './task1';
import { testInput, puzzleInput } from './task1-input';

describe('calcSizeOfLargestArea', () => {
  it('finds the size of the largest area', () => {
    expect(calcSizeOfLargestArea(testInput)).toBe(17);
  });
});
