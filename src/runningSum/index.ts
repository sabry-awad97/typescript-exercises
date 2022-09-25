function* sumGenerator(nums: number[]) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
    yield sum;
  }
}

export function runningSum(nums: number[]): number[] {
  return [...sumGenerator(nums)];
}
