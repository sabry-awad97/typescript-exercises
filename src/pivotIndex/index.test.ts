import { describe, it, expect } from 'vitest';
import { pivotIndex } from '.';

describe('pivotIndex', () => {
  it('should return index correctly;', () => {
    const numbers = [1, 7, 3, 6, 5, 6];
    const expectedResult = 3;

    const result = pivotIndex(numbers);

    expect(result).toEqual(expectedResult);
  });

  it('should return 0 when there is no elements to the left of index 0', () => {
    // arrange
    const numbers = [2, 1, -1];
    const expectedResult = 0;

    // act
    const result = pivotIndex(numbers);

    // assert
    expect(result).toEqual(expectedResult);
  });

  it('should return -1 when there is no index that satisfies the condition', () => {
    const numbers = [1, 2, 3];
    const expectedResult = -1;

    const result = pivotIndex(numbers);

    expect(result).toEqual(expectedResult);
  });
});
