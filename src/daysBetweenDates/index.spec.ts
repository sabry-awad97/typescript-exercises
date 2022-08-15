import { describe, it, expect } from 'vitest';

import { daysBetweenDates } from '.';

type Tuple6 = [number, number, number, number, number, number];

// test suite (group of test cases )
describe('days between dates', () => {
  // spec (test) case
  it('number of days between 1/1/2013 to 1/1/2014 is 365', () => {
    const args: Tuple6 = [2013, 1, 1, 2014, 1, 1];
    const result = daysBetweenDates(...args);
    expect(result).toEqual(365);
  });

  it('number of days between 1/1/2012 to 1/1/2013 is 366', () => {
    const args: Tuple6 = [2012, 1, 1, 2013, 1, 1];
    const result = daysBetweenDates(...args);
    expect(result).toEqual(366);
  });

  it('number of days between 1/9/2012 to 4/9/2012 is 3', () => {
    const args: Tuple6 = [2012, 9, 1, 2012, 9, 4];
    const result = daysBetweenDates(...args);
    expect(result).toEqual(3);
  });

  it('number of days between 30/6/2011 to 30/6/2012 is 366', () => {
    const args: Tuple6 = [2011, 6, 30, 2012, 6, 30];
    const result = daysBetweenDates(...args);
    expect(result).toEqual(366);
  });

  it('number of days between 1/1/2011 to 8/8/2012 is 585', () => {
    const args: Tuple6 = [2011, 1, 1, 2012, 8, 8];
    const result = daysBetweenDates(...args);
    expect(result).toEqual(585);
  });

  it('number of days between 1/1/1900 to 31/12/1999 is not 585', () => {
    const args: Tuple6 = [1900, 1, 1, 1999, 12, 31];
    const result = daysBetweenDates(...args);
    expect(result).not.toEqual(585);
  });
});
