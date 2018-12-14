function buildRec(x, y) {
  return {
    x: x,
    y: y,
    claim: 0
  };
}

function createGrid(num) {
  const grid = {};
  [...Array(num)].forEach((val, i) => {
    let x = i++;
    [...Array(num)].forEach((val, i) => {
      let y = i++;
      let rec = buildRec(x, y);
      let key = x + '.' + y;
      grid[key] = rec;
    });
  });
  return grid;
}

function findRec(x, y, grid) {
  const key = x + '.' + y;
  return grid[key];
}

function setClaimOnRec(rec) {
  rec.claim = rec.claim + 1;
}

function claimSquares(x, y, width, height, grid) {
  [...Array(width)].forEach((val, i) => {
    [...Array(height)].forEach((val, j) => {
      const rec = findRec(x + i, y + j, grid);
      setClaimOnRec(rec);
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
  const grid = createGrid(1000);
  const parsedInput = parseInput(input);

  parsedInput.forEach(val => {
    claimSquares(val.x, val.y, val.width, val.height, grid);
  });

  const keys = Object.keys(grid);

  return keys.reduce((acc, curr) => {
    if (grid[curr].claim >= 2) acc++;
    return acc;
  }, 0);
}

export { parseInput, getSquareInches };
