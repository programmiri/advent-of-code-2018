import { testRecords } from './task1-input';
import { formatInput, multipleIdWithMinute } from './task1';

describe('formatInput', () => {
  it('sorts the record data chronological', () => {
    const unsortedInput = testRecords;
    const sortedInput = [
      {
        date: '1518-11-01',
        guardId: '10',
        sleepEnd: false,
        sleepStart: false,
        time: '00:00',
        timestamp: '1518-11-01 00:00'
      },
      {
        date: '1518-11-01',
        guardId: '10',
        sleepEnd: false,
        sleepStart: true,
        time: '00:05',
        timestamp: '1518-11-01 00:05'
      },
      {
        date: '1518-11-01',
        guardId: '10',
        sleepEnd: true,
        sleepStart: false,
        time: '00:25',
        timestamp: '1518-11-01 00:25'
      },
      {
        date: '1518-11-01',
        guardId: '10',
        sleepEnd: false,
        sleepStart: true,
        time: '00:30',
        timestamp: '1518-11-01 00:30'
      },
      {
        date: '1518-11-01',
        guardId: '10',
        sleepEnd: true,
        sleepStart: false,
        time: '00:55',
        timestamp: '1518-11-01 00:55'
      },
      {
        date: '1518-11-01',
        guardId: '99',
        sleepEnd: false,
        sleepStart: false,
        time: '23:58',
        timestamp: '1518-11-01 23:58'
      },
      {
        date: '1518-11-02',
        guardId: '99',
        sleepEnd: false,
        sleepStart: true,
        time: '00:40',
        timestamp: '1518-11-02 00:40'
      },
      {
        date: '1518-11-02',
        guardId: '99',
        sleepEnd: true,
        sleepStart: false,
        time: '00:50',
        timestamp: '1518-11-02 00:50'
      },
      {
        date: '1518-11-03',
        guardId: '10',
        sleepEnd: false,
        sleepStart: false,
        time: '00:05',
        timestamp: '1518-11-03 00:05'
      },
      {
        date: '1518-11-03',
        guardId: '10',
        sleepEnd: false,
        sleepStart: true,
        time: '00:24',
        timestamp: '1518-11-03 00:24'
      },
      {
        date: '1518-11-03',
        guardId: '10',
        sleepEnd: true,
        sleepStart: false,
        time: '00:29',
        timestamp: '1518-11-03 00:29'
      },
      {
        date: '1518-11-04',
        guardId: '99',
        sleepEnd: false,
        sleepStart: false,
        time: '00:02',
        timestamp: '1518-11-04 00:02'
      },
      {
        date: '1518-11-04',
        guardId: '99',
        sleepEnd: false,
        sleepStart: true,
        time: '00:36',
        timestamp: '1518-11-04 00:36'
      },
      {
        date: '1518-11-04',
        guardId: '99',
        sleepEnd: true,
        sleepStart: false,
        time: '00:46',
        timestamp: '1518-11-04 00:46'
      },
      {
        date: '1518-11-05',
        guardId: '99',
        sleepEnd: false,
        sleepStart: false,
        time: '00:03',
        timestamp: '1518-11-05 00:03'
      },
      {
        date: '1518-11-05',
        guardId: '99',
        sleepEnd: false,
        sleepStart: true,
        time: '00:45',
        timestamp: '1518-11-05 00:45'
      },
      {
        date: '1518-11-05',
        guardId: '99',
        sleepEnd: true,
        sleepStart: false,
        time: '00:55',
        timestamp: '1518-11-05 00:55'
      }
    ];
    expect(formatInput(unsortedInput)).toEqual(sortedInput);
  });
});

it('multiplies the guardId with the minute the guard is most asleep', () => {
  expect(multipleIdWithMinute(testRecords)).toBe(240);
});
