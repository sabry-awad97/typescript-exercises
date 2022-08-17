export function isPalindrome(phrase: string): boolean {
  phrase = phrase.toLowerCase().trim().replace(/[\W_]/g, '');
  if (!phrase.length) return false;

  let left = 0;
  let right = phrase.length - 1;

  while (left < right) {
    if (phrase[left] !== phrase[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
