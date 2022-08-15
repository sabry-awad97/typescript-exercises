import { describe, it, expect } from 'vitest';
import { bruteForce } from '.';

// test suite (group of test cases)
describe('A brute force algorithm', () => {
  // spec (test) case
  it('should solve linear equation (2 * x - 8 = 0)', () => {
    // Arrange
    const f = (x: number) => 2 * x - 8;
    const start = -5;
    const end = 5;
    const expectedResult = true;

    // Act
    const linear = bruteForce({ f, start, end });
    const result = linear.has(4);

    // Assert (expectation)
    expect(result).toEqual(expectedResult);
  });
});
