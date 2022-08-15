import { describe, it, expect } from 'vitest';
import { indexOfImproved } from '.';

describe('indexOf', () => {
  const testArray = [0, NaN, 2];

  it('Array.prototype.indexOf cannot find NaN', () => {
    const expectedResult = -1;
    const index = testArray.indexOf(NaN);
    expect(index).toEqual(expectedResult);
  });

  it('Object.is(NaN, NaN) === true', () => {
    const expectedResult = true;
    const result = Object.is(NaN, NaN);
    expect(result).toEqual(expectedResult);
  });

  it('With indexOf improved by Object.is, NaN can be found', () => {
    const expectedResult = 1;
    const index = indexOfImproved(testArray, NaN);
    expect(index).toEqual(expectedResult);
  });
});
