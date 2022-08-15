export function checkNesting(stringIn: string) {
  let count = 0;
  for (const char of stringIn) {
    if (char === '(') count++;
    if (char === ')' && --count < 0) return false;
  }
  return count === 0;
}
