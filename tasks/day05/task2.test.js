import { getShortestPolymerLength } from './task2';

describe('getShortestPolymerLength', () => {
  it('returns the resulting Polymer', () => {
    const testInput = 'dabAcCaCBAcCcaDA';
    expect(getShortestPolymerLength(testInput)).toBe(4);
  });
});
