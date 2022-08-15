import { describe, it, expect } from 'vitest';
import { linesCountPromised } from '.';
import path from 'path';

describe('lines count promise', () => {
  it('should return correct lines count for a valid file', () => {
    const fileName = path.join(__dirname, 'test-file.txt');
    const expectedResult = 40;

    const result = linesCountPromised(fileName);
    return expect(result).resolves.toBe(expectedResult);
  });

  it('should report error for an invalid file name', () => {
    const fileName = path.join(__dirname, 'test-flie.txt');

    const result = linesCountPromised(fileName);

    expect.assertions(1);
    return expect(result).rejects.toMatch(`unable to open file ${fileName}`);
  });
});
