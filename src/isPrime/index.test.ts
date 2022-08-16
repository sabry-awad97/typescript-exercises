import { describe, it, expect } from 'vitest';
import { isPrime } from '.';

interface CustomMatchers<R = unknown> {
  toBePrimeNumber(): R;
}

declare global {
  namespace Vi {
    interface Assertion extends CustomMatchers {}
  }
}

expect.extend({
  toBePrimeNumber(received) {
    const pass = isPrime(received);

    if (pass) {
      return {
        pass: true,
        message: () => `expected ${received} not to be prime number`,
      };
    }
    return {
      pass: false,
      message: () => `expected ${received} to be prime number`,
    };
  },
});

describe('Testing toBePrimeNumber custom matcher', () => {
  it('should be able to know prime number', () => {
    const number = 13;
    expect(number).toBePrimeNumber();
  });

  it('should be able to know non-prime number', () => {
    expect(4).not.toBePrimeNumber();
  });
});
