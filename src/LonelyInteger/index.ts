export const findLonely = (arr: number[]) => {
  for (const num of arr) {
    if (arr.indexOf(num) === arr.lastIndexOf(num)) return num;
  }
  return 'No lonely integers.';
};
