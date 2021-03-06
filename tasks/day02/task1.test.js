import getCheckSum from './task1';

describe('getCheckSum', () => {
  it('returns the checksum 12', () => {
    const inputExample = [
      'abcdef',
      'bababc',
      'abbcde',
      'abcccd',
      'aabcdd',
      'abcdee',
      'ababab'
    ];
    expect(getCheckSum(inputExample)).toBe(12);
  });
});
