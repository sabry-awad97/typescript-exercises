import { describe, it, expect } from 'vitest';
import { romanToInteger } from '.';

describe('pivotIndex', () => {
  it('should return 1994 if input is MCMXCVII', () => {
    // M = 1000, CM = 900, XC = 90, V = 5 and II = 2.

    // arrange
    const input = 'MCMXCVII';
    const expectedResult = 1997;

    // act
    const result = romanToInteger(input);

    // assert
    expect(result).toEqual(expectedResult);
  });
});
