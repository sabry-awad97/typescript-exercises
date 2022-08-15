import { describe, it, expect } from 'vitest';
import { f2c } from '.';

describe('fahrenheit to celesius test', () => {
  it('should pass if f2c returns 0\u00b0C for 32F', () => {
    const fahrenheit = 32;
    const celsius = f2c(fahrenheit);
    expect(celsius).toEqual(0);
  });

  it('should pass if f2c returns 10\u00b0C for 50F', () => {
    const fahrenheit = 50;
    const celsius = f2c(fahrenheit);
    expect(celsius).toEqual(10);
  });
});
