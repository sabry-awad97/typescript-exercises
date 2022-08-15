import { describe, it, expect } from 'vitest';
import { isPalindrome } from '.';

describe('palindrome test', () => {
  it('should return true for argument mom', () => {
    const aWord = 'mom';
    const result = isPalindrome(aWord);
    expect(result).toEqual(true);
  });

  it('should return true for argument dad', () => {
    const aWord = 'dad';
    const result = isPalindrome(aWord);
    expect(result).toEqual(true);
  });

  it('should return false for argument dude', () => {
    const aWord = 'dude';
    const result = isPalindrome(aWord);
    expect(result).toEqual(false);
  });

  it('should return true for argument mom mom', () => {
    const phrase = 'mom mom';
    const result = isPalindrome(phrase);
    expect(result).toEqual(true);
  });

  it('should return true for argument dad dad', () => {
    const phrase = 'dad dad';
    const result = isPalindrome(phrase);
    expect(result).toEqual(true);
  });

  it('should return false for argument mom dad', () => {
    const phrase = 'mom dad';
    const result = isPalindrome(phrase);
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
