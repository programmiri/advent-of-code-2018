import returnFirstRepeatingFrequency from './task2';

describe('returnFirstRepeatingFrequency', () => {
  it('gives "0" back as the first frequency twice reached', () => {
    const inputExample = [+1, -1];
    expect(returnFirstRepeatingFrequency(inputExample)).toBe(0);
  });

  it('gives "10" back as the first frequency twice reached', () => {
    const inputExample = [+3, +3, +4, -2, -4];
    expect(returnFirstRepeatingFrequency(inputExample)).toBe(10);
  });

  it('gives "5" back as the first frequency twice reached', () => {
    const inputExample = [-6, +3, +8, +5, -6];
    expect(returnFirstRepeatingFrequency(inputExample)).toBe(5);
  });

  it('gives "14" back as the first frequency twice reached', () => {
    const inputExample = [+7, +7, -2, -7, -4];
    expect(returnFirstRepeatingFrequency(inputExample)).toBe(14);
  });
});
