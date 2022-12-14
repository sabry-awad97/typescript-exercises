export function findMedian(values: number[]): number {
  if (values.length === 0) throw new Error('No inputs');

  values.sort((a, b) => a - b);

  const half = Math.floor(values.length / 2);

  if (values.length % 2) return values[half];

  return (values[half - 1] + values[half]) / 2.0;
}
