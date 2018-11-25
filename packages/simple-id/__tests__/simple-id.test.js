import simpleId from '../lib/simple-id';

describe('simple-id', () => {
  it('should return a string with id', () => {
    const result = simpleId();
    expect(result).toContain('_');
  });
});
