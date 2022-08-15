export function addPrefix(prefix: string, ...words: string[]) {
    const prefixedWords = [];
    for (const word of words) {
        prefixedWords.push(prefix + word);
    }
    return prefixedWords;
}
