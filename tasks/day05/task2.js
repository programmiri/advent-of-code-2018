import { getResultingPolymerUnits } from './task1';

function createListOfUniqueUnits(input) {
  const list = input.toLowerCase().split('');
  const setOfLetters = new Set(list);
  const listOfUniqueUnits = [];
  setOfLetters.forEach(val => {
    listOfUniqueUnits.push(val);
  });

  return listOfUniqueUnits;
}

function removeUnitFromPolymer(input, unit) {
  return input.split('').filter(val => {
    return val.toLowerCase() !== unit;
  });
}

function getShortestPolymerLength(input) {
  const uniqueUnits = createListOfUniqueUnits(input);
  const test1 = removeUnitFromPolymer(input, 'a');

  return uniqueUnits.reduce((acc, curr) => {
    const inputWithoutUnit = removeUnitFromPolymer(input, curr).join('');
    const currLength = getResultingPolymerUnits(inputWithoutUnit);
    if (!acc || currLength < acc) {
      acc = currLength;
    }
    return acc;
  }, null);
}

export { getShortestPolymerLength };
