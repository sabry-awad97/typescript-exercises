import { describe, it, expect } from 'vitest';
import { timeConversion } from '.';

describe('canary test', () => {
  it('should pass the test', () => {
    // Arrange
    const input = '07:05:45PM';
    const expectedResult = '19:05:45';

    // Act
    const result = timeConversion(input);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
