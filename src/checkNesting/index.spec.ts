import { describe, it, expect } from 'vitest';
import { checkNesting } from '.';

// test suite (group of test cases)
describe('checkNesting', () => {
  // spec (test) case
  it('should pass with (())', () => {
    const result = checkNesting('(())');
    expect(result).toEqual(true);
  });

  it('should pass with ()()', () => {
    const result = checkNesting('()()');
    expect(result).toEqual(true);
  });

  it('should pass with (()())', () => {
    const result = checkNesting('(()())');
    expect(result).toEqual(true);
  });

  it('should fail with )(', () => {
    const result = checkNesting(')(');
    expect(result).toEqual(false);
  });

  it('should fail with ()()(', () => {
    const result = checkNesting('()()(');
    expect(result).toEqual(false);
  });
});
