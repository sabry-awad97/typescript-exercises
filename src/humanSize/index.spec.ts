import { describe, it, expect } from 'vitest';
import { humanSize } from '.';

// test suite (group of test cases )
describe('human size', () => {
  // spec (test) case
  it('should return size format readable by human', () => {
    // arrange
    const filesize = 57585755454;
    const expectedResult = '57.59 Gigabyte';

    // act
    const result = humanSize(filesize);

    // assert
    expect(result).toEqual(expectedResult);
  });
});
