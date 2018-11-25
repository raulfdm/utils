import simpleId from '../lib/simple-id';

describe('simple-id', () => {
  it('should return a string', () => {
    const result = simpleId();
    expect(typeof result).toBe('string');
  });

  it('should return a string length of 10', () => {
    const result = simpleId();
    expect(result.length).toBe(10);
  });

  it('should return a string containing a underscore at the beginning', () => {
    const result = simpleId();
    expect(result.charAt(0)).toBe('_');
  });

  it('should return a string not contain a underscore at the beginning when pass "noUnderscore" option', () => {
    const result = simpleId({ noUnderscore: true });
    expect(result.charAt(0)).not.toBe('_');
    expect(result.length).toBe(9);
  });
});
