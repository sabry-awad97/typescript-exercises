interface IBruteForceArguments {
  f: (x: number) => number;
  start: number;
  end: number;
}

type BruteForce = (arg: IBruteForceArguments) => Set<number>;

export const bruteForce: BruteForce = ({ f, start, end }) => {
  const soln = new Set<number>();
  for (let x = start; x <= end; x++) f(x) === 0 && soln.add(x);
  return soln;
};
