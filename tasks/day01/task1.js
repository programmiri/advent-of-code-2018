function calcFrequency(input) {
  return input.reduce((accumulator, currVal) => accumulator + currVal);
}


function returnFirstRepeatingFrequency(input) {

  const reachedFrequencies = new Set([0]);
  let frequency  = 0;

  while(true) {
    for (let i = 0; i < input.length; i++) {
      frequency += input[i];
      if (reachedFrequencies.has(frequency)) {
          return frequency;
      }
      reachedFrequencies.add(frequency);
    }
  }
}

export default calcFrequency;


