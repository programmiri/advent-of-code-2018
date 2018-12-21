import { calcLocationsWithinRegion } from './task2';
import { testInput, puzzleInput } from './task1-and-task2-input';

describe('calcLocationsWithinRegion', () => {
  it('gets the amount of locations within the region with a specific distance', () => {
    expect(calcLocationsWithinRegion(testInput)).toBe(16);
  });
});
