import getCommonLetters from './task2';

describe('getCommonLetters', () => {
  it('returns the reoccurring letters', () => {
    const inputExample = [
      'abcde',
      'fghij',
      'klmno',
      'pqrst',
      'fguij',
      'axcye',
      'wvxyz'
    ];
    expect(getCommonLetters(inputExample)).toBe('fgij');
  });
});
