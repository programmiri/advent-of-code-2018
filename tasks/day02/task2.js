function getMatchingChars(string1, string2) {
  const firstString = string1.split('');
  const secondString = string2.split('');

  const sameCharAtSamePosition = firstString.filter((element, index) => {
    return element === secondString[index];
  });
  return sameCharAtSamePosition;
}

function getCommonLetters(input) {
  let chars = [];

  input.forEach(element => {
    const stringToCheck = element;
    const lengthOfString = stringToCheck.length;
    input.forEach(element => {
      if (element === stringToCheck) {
        return;
      }
      const matchingChars = getMatchingChars(element, stringToCheck);

      if (matchingChars.length > lengthOfString - 2) {
        chars.push(matchingChars);
      }
    });
  });
  return chars[0].join('');
}

export default getCommonLetters;
