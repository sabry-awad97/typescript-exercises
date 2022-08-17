import { describe, it, expect } from 'vitest';
import { isPalindrome } from '.';

describe('palindrome test', () => {
  it('should return true for argument mom', () => {
    const aWord = '_m_o_m';
    const result = isPalindrome(aWord);
    expect(result).toEqual(true);
  });

  it('should return false for argument mom', () => {
    const phrase = 'A man, a plan, a canal: Panama';
    const result = isPalindrome(phrase);
    expect(result).toEqual(true);
  });

  it('should return false for argument love', () => {
    const aWord = 'love';
    const result = isPalindrome(aWord);
    expect(result).toEqual(false);
  });

  it('should return false when argument is an empty string', () => {
    const phrase = '';
    const result = isPalindrome(phrase);
    expect(result).toEqual(false);
  });

  it('should return false for argument with only two spaces', () => {
    const phrase = '  ';
    const result = isPalindrome(phrase);
    expect(result).toEqual(false);
  });
});
