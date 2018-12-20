function buildLocation(x, y) {
  const id = x + '.' + y;
  return {
    id: id,
    x: x,
    y: y,
    isLocation: true
  };
}

function buildGridItem(x, y) {
  const id = x + '.' + y;
  return {
    id: id,
    x: x,
    y: y,
    closestTo: null
  };
}

function buildListOfLocations(input) {
  const locations = {};
  input.forEach(val => {
    defineInputItem(locations, val);
  });
  return locations;
}

function defineInputItem(locations, item) {
  const [x, y] = item;
  const location = buildLocation(x, y);
  locations[location.id] = location;
}

function calcDimensionsOfGrid(locations) {
  return Object.keys(locations).reduce(
    (acc, curr) => {
      if (acc.x || locations[curr].x > acc.x) {
        acc.x = locations[curr].x;
      }
      if (acc.y || locations[curr].y > acc.y) {
        acc.y = locations[curr].y;
      }
      return acc;
    },
    { x: null, y: null }
  );
}

function buildGrid(locations) {
  const locationCoordinates = calcDimensionsOfGrid(locations);
  const locationsMax = Math.max(locationCoordinates.x, locationCoordinates.y);
  const grid = [];
  [...Array(locationsMax + 1)].forEach((val, i) => {
    const currX = i;
    [...Array(locationsMax + 1)].forEach((val, j) => {
      const item = buildGridItem(currX, j);
      grid.push(item);
    });
  });
  return grid;
}

function addLocationsToGrid(grid, locations) {
  return grid.map(val => {
    return locations[val.id] || val;
  });
}

function calcDistance(location1, location2) {
  const [x1, y1] = location1;
  const [x2, y2] = location2;
  return Math.abs(x2 - x1) + Math.abs(y2 - y1);
}

function updateWithClosestLocation(gridItem, locations, iteratorHere) {
  const gridItemCoord = [gridItem.x, gridItem.y];

  const result = Object.keys(locations).reduce(
    (acc, curr) => {
      const currLocation = locations[curr];
      const currDistance = calcDistance(gridItemCoord, [
        currLocation.x,
        currLocation.y
      ]);
      if (!acc.distance || acc.distance > currDistance) {
        acc.distance = currDistance;
        acc.locationId = curr;
      } else if (currDistance === acc.distance) {
        acc.locationId = 'none';
      }
      return acc;
    },
    { distance: null, locationId: null }
  );
  return { ...gridItem, closestTo: result.locationId };
}

function findInfinitLocations(grid) {
  return grid.reduce((acc, curr) => {
    const maxX = grid[grid.length - 1].x;
    const maxY = grid[grid.length - 1].x;
    if (curr.x === 0 || curr.y === 0 || curr.x === maxX || curr.y === maxY) {
      acc.push(curr.closestTo);
    }
    return acc;
  }, []);
}

function countClosestLocations(grid, location) {
  return (
    grid.filter(val => {
      return val.closestTo === location;
    }).length + 1
  );
}

function calcSizeOfLargestArea(input) {
  const locations = buildListOfLocations(input);
  const grid = buildGrid(locations);
  const updatedGrid = addLocationsToGrid(grid, locations);

  const gridWithDistance = updatedGrid.map(val => {
    if (val.isLocation === true) {
      return val;
    } else {
      return updateWithClosestLocation(val, locations);
    }
  });

  const infinitLocation = findInfinitLocations(gridWithDistance);

  infinitLocation.forEach(val => {
    delete locations[val];
  });

  return Object.keys(locations).reduce((acc, curr) => {
    const currCountClosestTo = countClosestLocations(gridWithDistance, curr);
    if (!acc || currCountClosestTo > acc) {
      acc = currCountClosestTo;
    }
    return acc;
  }, null);
}

export { calcSizeOfLargestArea };
