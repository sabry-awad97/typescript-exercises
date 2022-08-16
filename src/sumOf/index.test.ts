import { expect, describe, it } from 'vitest';
import { sumOf } from '.';

interface CustomMatchers {
  toBeSumOf(x: number, y: number): void;
  toBeSumOf(x: string, y: string): void;
}

declare global {
  namespace Vi {
    interface Assertion extends CustomMatchers {}
    interface AsymmetricMatchersContaining extends CustomMatchers {}
  }
}

expect.extend({
  toBeSumOf(received, first, second) {
    const pass = received === sumOf(first, second);

    return pass
      ? {
          pass: true,
          message: () =>
            `expected ${received} not to be sum of ${first} and ${second}`,
        }
      : {
          pass: false,
          message: () =>
            `expected ${received} to be sum of ${first} and ${second}`,
        };
  },
});

describe('Testing toBeSumOf custom matcher', () => {
  it('should be able to calculate the sum of two numbers', () => {
    expect(10).toBeSumOf(7, 3);
  });

  it('should be able to concatenate two strings', () => {
    expect('FirstSecond').toBeSumOf('First', 'Second');
  });
});
