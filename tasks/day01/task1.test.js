import calcFrequency from './task1'

describe('calcFrequency', ()=>{
  it('gives back the frequency 3', () => {
    const inputExample = [+1, -2, +3, +1]
    expect(calcFrequency(inputExample)).toBe(3);
  });

  it('gives back the frequency 3', () => {
    const inputExample = [+1, +1, +1]
    expect(calcFrequency(inputExample)).toBe(3);
  });


  it('gives back the frequency 0', () => {
    const inputExample = [+1, +1, -2]
    expect(calcFrequency(inputExample)).toBe(0);
  });


  it('gives back the frequency -6', () => {
    const inputExample = [-1, -2, -3]
    expect(calcFrequency(inputExample)).toBe(-6);
  });
})

