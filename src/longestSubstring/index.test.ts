import { describe, expect, it } from 'vitest';
import { lengthOfLongestSubstring } from '.';

describe('lengthOfLongestSubstring', () => {
  it("should return 3 if arg is 'abcabcbb'", () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
  });

  it("should return 3 if arg is 'pwwkew'", () => {
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
  });

  it("should return 3 if arg is 'dvdf'", () => {
    expect(lengthOfLongestSubstring('dvdf')).toEqual(3);
  });

  it("should return 1 if arg is 'bbb'", () => {
    expect(lengthOfLongestSubstring('bbb')).toEqual(1);
  });
});
