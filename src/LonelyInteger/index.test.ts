import { describe, it, expect } from 'vitest';
import { findLonely } from '.';

describe('Find Lonely Integers', () => {
  it('should find lonely integer', () => {
    // Arrange
    const input = [2, 2, 1, 3, 4, 3, 4];
    const expectedResult = 1;

    // Act
    const result = findLonely(input);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
