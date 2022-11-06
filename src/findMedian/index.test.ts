import { describe, it, expect } from 'vitest';
import { findMedian } from '.';

describe('canary test', () => {
  it('should pass this canary test', () => {
    // Arrange
    const numbers = [4, 5, 7, 1, 33];
    const expectedResult = 5;

    // Act
    const result = findMedian(numbers);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
