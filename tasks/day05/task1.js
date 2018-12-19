function unitsReacting(a, b) {
  return (
    (a.toLowerCase() === b && b.toUpperCase() === a) ||
    (a.toUpperCase() === b && b.toLowerCase() === a)
  );
}

function removeUnitsReacting(string) {
  const listOfLetters = string.split('');
  const newListOfLetters = listOfLetters;

  let i = 0;

  while (!!listOfLetters[i + 1]) {
    let currLetter = listOfLetters[i];
    let nextLetter = listOfLetters[i + 1];

    if (unitsReacting(currLetter, nextLetter)) {
      newListOfLetters.splice(i, 2);
      i > 0 ? i-- : i;
    } else {
      i++;
    }
  }
  return newListOfLetters.join('');
}

function getResultingPolymerUnits(input) {
  const remainingUnits = removeUnitsReacting(input);
  return remainingUnits.length;
}

export { getResultingPolymerUnits, removeUnitsReacting };
