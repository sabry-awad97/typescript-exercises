import { describe, it, expect } from 'vitest';
import { canThreePartsEqualSum } from '.';

describe('pivotIndex', () => {
  it('should return true if the array can be partitioned into three non-empty parts with equal sums.', () => {
    // arrange
    const numbers = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1];
    const expectedResult = true;

    // act
    const result = canThreePartsEqualSum(numbers);

    // assert
    expect(result).toEqual(expectedResult);
  });

  it('should return false if the array can not be partitioned with equal sums.', () => {
    // arrange
    const numbers = [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1];
    const expectedResult = false;

    // act
    const result = canThreePartsEqualSum(numbers);

    // assert
    expect(result).toEqual(expectedResult);
  });
});
