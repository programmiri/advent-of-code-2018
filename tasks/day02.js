function getCheckSum(input) {
  let twoMatches = 0;
  let threeMatches = 0;

  input.forEach((str) => {
    const found = str.split('').reduce((acc, char) => {
      acc[char] =  acc[char] ? acc[char] + 1 : 1;
      return acc;
    }, {})
    const foundTwo = Object.keys(found).find( (key) => found[key] == 2)
    const foundThree = Object.keys(found).find( (key) => found[key] == 3)

    if(foundTwo) {
      twoMatches++
    }

    if(foundThree) {
      threeMatches++
    }
  })
  return twoMatches * threeMatches;
}

export {getCheckSum}

