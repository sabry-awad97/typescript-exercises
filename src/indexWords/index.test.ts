import { describe, it, expect } from 'vitest';
import { indexWords } from '.';

describe('indexWords test', () => {
  it('should call indexWords function', function () {
    // Arrange
    const sentence = 'Four score and seven years ago...';
    const expectedResult = {
      first: 0,
      rest: [5, 11, 15, 21, 27],
    };

    // Act
    const generator = indexWords(sentence);
    const first = generator.next().value;
    const rest = [...generator];

    // ASSERT
    expect(first).toBe(expectedResult.first);
    expect(rest).toEqual(expectedResult.rest);
  });
});
