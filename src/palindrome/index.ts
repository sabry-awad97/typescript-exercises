export function isPalindrome(phrase: string) {
  return (
    phrase.trim().length > 0 && phrase.split('').reverse().join('') === phrase
  );
}
