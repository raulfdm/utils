import decimalCounter from '../lib/index';

describe('fn: decimalCounter', () => {
  it('should return the correct number of decimal cases', () => {
    expect(decimalCounter('1.23')).toBe(2);
    expect(decimalCounter(1.23)).toBe(2);
    expect(decimalCounter(1)).toBe(0);
  });

  it('should also accept number separated by comma', () => {
    expect(decimalCounter('1,23')).toBe(2);
    expect(decimalCounter('1,2355')).toBe(4);
  });

  it('should return 0 when does not receive a number after comma/dot', () => {
    expect(decimalCounter('1,')).toBe(0);
    expect(decimalCounter('1.')).toBe(0);
  });
});
