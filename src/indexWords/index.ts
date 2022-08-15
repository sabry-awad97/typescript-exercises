export function* indexWords(text: string) {
  if (text) yield 0;

  for (const [index, letter] of Object.values(text).entries()) {
    if (letter === " ") yield index + 1;
  }
}
