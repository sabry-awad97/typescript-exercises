export const isPrime = (num: number) => {
  if (num <= 1) return false; // negatives
  if (num % 2 == 0 && num > 2) return false; // even numbers
  const s = Math.sqrt(num); // store the square to loop faster
  for (let i = 3; i <= s; i += 2) {
    if (num % i === 0) return false; 
  }
  return true;
};
