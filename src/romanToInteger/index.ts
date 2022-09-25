const ROMAN_MAP = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
type Keys = keyof typeof ROMAN_MAP;

export function romanToInteger(s: string): number {
  const n = s.length;

  let num = ROMAN_MAP[s[n - 1] as Keys];

  for (let i = n - 2; i >= 0; i--) {
    const currentLetter = s[i] as Keys;
    const nextLetter = s[i + 1] as Keys;

    const currentRomanNumeral = ROMAN_MAP[currentLetter];
    const nextRomanNumeral = ROMAN_MAP[nextLetter];

    if (currentRomanNumeral >= nextRomanNumeral) {
      num += currentRomanNumeral;
    } else {
      num -= currentRomanNumeral;
    }
  }

  return num;
}
