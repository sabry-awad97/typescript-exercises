export function lengthOfLongestSubstring(str: string): number {
  const windowCharsMap = new Map<string, number>();
  let windowStart = 0;
  let maxLength = 0;

  for (let i = 0; i < str.length; i++) {
    const endChar = str[i];

    if (windowCharsMap.get(endChar)! >= windowStart) {
      windowStart = windowCharsMap.get(endChar)! + 1;
    }

    windowCharsMap.set(endChar, i);

    maxLength = Math.max(maxLength, i - windowStart + 1);
  }

  return maxLength;
}
