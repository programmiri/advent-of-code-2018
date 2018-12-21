function buildListOfLocations(input) {
  const locations = [];
  input.forEach(val => {
    locations.push({ x: val[0], y: val[1] });
  });
  return locations;
}

function calcDimensionsOfGrid(locations) {
  return locations.reduce(
    (acc, curr) => {
      if (!acc.x || curr.x > acc.x) {
        acc.x = curr.x;
      }
      if (!acc.y || curr.y > acc.y) {
        acc.y = curr.y;
      }
      return acc;
    },
    { x: null, y: null }
  );
}

function buildGrid(locations) {
  const grid = [];
  const dimensions = calcDimensionsOfGrid(locations);

  [...Array(dimensions.x)].forEach((val, i) => {
    const currX = i;
    [...Array(dimensions.y)].forEach((val, j) => {
      grid.push([i, j]);
    });
  });
  return grid;
}

function calcDistance(location1, location2) {
  const [x1, y1] = location1;
  const [x2, y2] = location2;
  return Math.abs(x2 - x1) + Math.abs(y2 - y1);
}

function calcDistanceToAllLocations(gridItem, locations) {
  return locations.reduce((acc, curr) => {
    const distance = calcDistance(gridItem, [curr.x, curr.y]);
    acc = acc + distance;
    return acc;
  }, 0);
}

function calcLocationsWithinRegion(input) {
  const locations = buildListOfLocations(input);
  const grid = buildGrid(locations);
  const test = grid.filter(val => {
    const distance = calcDistanceToAllLocations(val, locations);
    return distance < 32;
  });
  return test.length;
}

export { calcLocationsWithinRegion };
