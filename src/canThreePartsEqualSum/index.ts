export function canThreePartsEqualSum(numbers: number[]): boolean {
  let total = numbers.reduce((a, b) => a + b, 0);

  if (total % 3 != 0) return false;

  let partitions = 0;

  let indvidualSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    indvidualSum += numbers[i];
    if (indvidualSum == total / 3) {
      partitions++;
      indvidualSum = 0;
    }
  }

  return partitions >= 3;
}
