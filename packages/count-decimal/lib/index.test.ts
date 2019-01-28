import countDecimal from './index';

describe('fn: countDecimal', () => {
  it('should return the correct number of decimal cases', () => {
    expect(countDecimal('1.23')).toBe(2);
    expect(countDecimal(1.23)).toBe(2);
    expect(countDecimal(1)).toBe(0);
  });

  it('should also accept number separated by comma', () => {
    expect(countDecimal('1,23')).toBe(2);
    expect(countDecimal('1,2355')).toBe(4);
  });

  it('should return 0 when does not receive a number after comma/dot', () => {
    expect(countDecimal('1,')).toBe(0);
    expect(countDecimal('1.')).toBe(0);
  });
});
