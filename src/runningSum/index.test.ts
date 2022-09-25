import { describe, it, expect } from 'vitest';
import { runningSum } from '.';

describe('pivotIndex', () => {
  it('should calculate sum correctly;', () => {
    const numbers = [1, 2, 3, 4];
    const expectedResult = [1, 3, 6, 10];

    const result = runningSum(numbers);

    expect(result).toEqual(expectedResult);
  });
});
