// PivotIndex ot MiddleIndex
export function pivotIndex(numbers: number[]): number {
  const totalSum = numbers.reduce((a, b) => a + b, 0);

  let leftSum = 0;

  for (const [index, number] of numbers.entries()) {
    if (totalSum - number === 2 * leftSum) return index;
    leftSum += number;
  }

  return -1;
}
