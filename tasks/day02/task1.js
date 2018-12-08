function countChars(ids) {
  return ids.split('').reduce((acc, char) => {
    acc[char] =  acc[char] ? acc[char] + 1 : 1;
    return acc;
  }, {})
}

function findMultiples(charsPerId) {
  const filterBy = (filter, key) => charsPerId[key] == filter

  return {
    foundTwo: Object.keys(charsPerId).find(filterBy.bind(null, 2)),
    foundThree: Object.keys(charsPerId).find(filterBy.bind(null, 3))
  }
}

function sumUpMultiple(acc, curr) {
    if(curr.foundTwo) {
      acc.twoMatches += 1
    }

    if(curr.foundThree) {
      acc.threeMatches += 1
    }

    return acc;
}

function getCheckSum(input) {
  const r = input
    .map(countChars)
    .map(findMultiples)
    .reduce(sumUpMultiple, { twoMatches: 0, threeMatches: 0 });

  return r.twoMatches * r.threeMatches;
}

export default getCheckSum;

