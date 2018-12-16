function buildRec(x, y) {
  return {
    x: x,
    y: y,
    claim: 0
  };
}

function setClaimOnRec(rec) {
  rec.claim = rec.claim + 1;
}

function claimSquares(claim, grid) {
  const { x, y, width, height } = claim;
  [...Array(width)].forEach((val, i) => {
    [...Array(height)].forEach((val, j) => {
      const key = x + i + '.' + (y + j);
      if (!grid[key]) {
        const rec = buildRec(x + i, y + j);
        grid[key] = rec;
      }
      setClaimOnRec(grid[key]);
    });
  });
}

function parseInput(input) {
  return input
    .map(val => {
      return val
        .replace('#', '')
        .replace('@ ', '')
        .replace(':', '')
        .replace(',', ' ')
        .replace('x', ' ')
        .split(' ');
    })
    .reduce((acc, curr) => {
      acc.push({
        id: parseInt(curr[0]),
        x: parseInt(curr[1]),
        y: parseInt(curr[2]),
        width: parseInt(curr[3]),
        height: parseInt(curr[4])
      });

      return acc;
    }, []);
}

function getSquareInches(input) {
  const grid = {};
  const parsedInput = parseInput(input);

  parsedInput.forEach(val => {
    claimSquares(val, grid);
  });

  const keys = Object.keys(grid);

  return keys.reduce((acc, curr) => {
    if (grid[curr].claim >= 2) acc++;
    return acc;
  }, 0);
}

export { parseInput, getSquareInches };
