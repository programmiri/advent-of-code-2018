import { getResultingPolymerUnits, removeUnitsReacting } from './task1';

describe('getResultingPolymerUnits', () => {
  it('returns the resulting Polymer', () => {
    const testInput = 'dabAcCaCBAcCcaDA';
    expect(getResultingPolymerUnits(testInput)).toBe(10);
  });
});
