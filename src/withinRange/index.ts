export const withinRange = (num: number, range: [number, number]) => {
  const [floor, ceil] = range;
  return num >= floor && num <= ceil;
};
