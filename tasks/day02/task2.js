function getMatchingChars(string1, string2) {
  const firstString = string1.split('');
  const secondString = string2.split('');
  return firstString.filter((element, index) => {
    return element === secondString[index];
  });
}

function findMatchingStrings(string1, string2) {
  if (string1 === string2) return;
  const matchingChars = getMatchingChars(string1, string2);
  if (matchingChars.length > string1.length - 2) {
    return matchingChars.join('');
  }
}

function getCommonLetters(input) {
  const chars = [];
  input.forEach(element => {
    const stringToCheck = element;

    const strings = input.reduce((acc, element) => {
      const matchingString = findMatchingStrings(element, stringToCheck);
      if (matchingString) acc.push(matchingString);
      return acc;
    }, []);

    strings.length > 0 ? chars.push(strings[0]) : null;
  });
  return chars[0];
}

export default getCommonLetters;
