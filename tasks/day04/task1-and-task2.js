function parseInputRow(data, currGuard) {
  const guardId = data.match(/Guard #([0-9]+)/);
  if (guardId) {
    currGuard = guardId[1];
  }

  const timestamp = data.match(/\[(.*?)\]|/)[1];
  const date = timestamp.split(' ')[0];
  const time = timestamp.split(' ')[1];
  const sleepStart = data.match('falls asleep');
  const sleepEnd = data.match('wakes up');

  return {
    timestamp: timestamp,
    date: date,
    time: time,
    guardId: currGuard,
    sleepStart: !!sleepStart,
    sleepEnd: !!sleepEnd
  };
}

function formatInput(records) {
  records.sort();

  let currGuard = null;
  return records.map(val => {
    const row = parseInputRow(val, currGuard);
    if (row.guardId) {
      currGuard = row.guardId;
    }
    return row;
  });
}

function calcSleepTime(records) {
  const sortedRecords = formatInput(records);
  return sortedRecords
    .filter(val => {
      return val.sleepStart || val.sleepEnd;
    })
    .reduce((acc, curr) => {
      if (!acc[curr.guardId]) {
        acc[curr.guardId] = {};
      }
      if (!acc[curr.guardId][curr.date]) {
        acc[curr.guardId][curr.date] = [];
      }

      const sleep = {};
      if (curr.sleepStart) {
        sleep.start = curr.time;
      }

      if (curr.sleepEnd) {
        sleep.end = curr.time;
      }

      acc[curr.guardId][curr.date].push(sleep);
      return acc;
    }, {});
}

function calcMinutesFromTime(string) {
  return parseInt(string.split(':')[1], 10);
}

function calcTimeAsleep(sleepTime) {
  return sleepTime.reduceRight((acc, curr) => {
    if (curr.end) {
      acc = acc + calcMinutesFromTime(curr.end);
    } else {
      acc = acc - calcMinutesFromTime(curr.start);
    }
    return acc;
  }, 0);
}

function calcSleepPerMinute(sleepTime, sleepMinutes) {
  return sleepTime.reduceRight((acc, curr) => {
    if (curr.end) {
      const endMinute = calcMinutesFromTime(curr.end);
      [...Array(endMinute)].forEach((val, i) => {
        acc[i] = acc[i] + 1;
      });
    } else {
      const startMinute = calcMinutesFromTime(curr.start);
      [...Array(startMinute)].forEach((val, i) => {
        acc[i] = acc[i] - 1;
      });
    }
    return acc;
  }, sleepMinutes);
}

function listWithMinutes(num) {
  const list = {};

  [...Array(num)].forEach((val, i) => {
    list[i] = 0;
  });
  return list;
}

function createGuardList(records) {
  const sleepTimes = calcSleepTime(records);

  const guards = {};
  Object.keys(sleepTimes).forEach(val => {
    const currGuard = val;
    const sleepMinutes = listWithMinutes(59);

    guards[currGuard] = Object.keys(sleepTimes[val]).reduce(
      (acc, curr) => {
        const guard = sleepTimes[currGuard][curr];

        const sleep = calcTimeAsleep(guard);
        const minutes = calcSleepPerMinute(guard, sleepMinutes);

        acc.timeAsleep = acc.timeAsleep + sleep;
        acc.sleepMinutes = minutes;

        return acc;
      },
      { timeAsleep: 0, sleepMinutes: sleepMinutes }
    );
  });

  return guards;
}

function findGuardAsleepTheMost(guardList) {
  return Object.keys(guardList).reduce(
    (acc, curr) => {
      const timeAsleep = guardList[curr].timeAsleep;
      if (timeAsleep > acc.timeAsleep) {
        acc.timeAsleep = timeAsleep;
        acc.guardId = curr;
      }
      return acc;
    },
    { timeAsleep: 0, guardId: 0 }
  ).guardId;
}

function findMinuteGuardIsAsleepMost(guardList, id) {
  const minuteList = guardList[id].sleepMinutes;
  return Object.keys(minuteList).reduce(
    (acc, curr) => {
      const count = minuteList[curr];
      if (count > acc.count) {
        acc.count = count;
        acc.minute = curr;
      }
      return acc;
    },
    { minute: 0, count: 0 }
  );
}

function multipleIdWithMinuteStrategyOne(records) {
  const guardList = createGuardList(records);
  const id = parseInt(findGuardAsleepTheMost(guardList));
  const minute = parseInt(findMinuteGuardIsAsleepMost(guardList, id).minute);

  return id * minute;
}

function multipleIdWithMinuteStrategyTwo(records) {
  const guardList = createGuardList(records);

  const result = Object.keys(guardList).reduce(
    (acc, curr) => {
      const listAsleepOnMinutes = findMinuteGuardIsAsleepMost(guardList, curr);
      const currCount = listAsleepOnMinutes.count;
      const currMinute = listAsleepOnMinutes.minute;

      if (currCount > acc.count) {
        acc.count = currCount;
        acc.minute = currMinute;
        acc.guardId = parseInt(curr, 10);
      }

      return acc;
    },
    { count: 0, minute: 0, guardId: 0 }
  );
  return result.guardId * result.minute;
}

export {
  formatInput,
  multipleIdWithMinuteStrategyOne,
  multipleIdWithMinuteStrategyTwo
};
