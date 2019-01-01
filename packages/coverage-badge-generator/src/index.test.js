import times from 'lodash.times';
import random from 'lodash.random';

import { generateBadge, getColorAndPercent, extractPercentage } from './index';

describe('fn: generateBadge', () => {
  it('should throw if percentage is not a number ', () => {
    expect(() => generateBadge({ percentage: false })).toThrow();
    expect(() => generateBadge({ percentage: 'hie' })).toThrow();
    expect(() => generateBadge({ percentage: '00' })).toThrow();
    expect(() => generateBadge({ percentage: {} })).toThrow();
  });
  it('should throw if color contains "#"', () => {
    expect(() => generateBadge({ percentage: 100, color: '#fff' })).toThrow();
    expect(() =>
      generateBadge({ percentage: 100, color: 'fff' })
    ).not.toThrow();
  });

  [
    {
      color: '331222',
      percentage: 100,
      get badge() {
        return `https://img.shields.io/badge/coverage-${this.percentage}%25-${
          this.color
        }.svg`;
      }
    },
    {
      color: '33111F',
      percentage: 20,
      get badge() {
        return `https://img.shields.io/badge/coverage-${this.percentage}%25-${
          this.color
        }.svg`;
      }
    },
    {
      color: '00FFDD',
      percentage: 1,
      get badge() {
        return `https://img.shields.io/badge/coverage-${this.percentage}%25-${
          this.color
        }.svg`;
      }
    }
  ].forEach((dataTest, index) => {
    describe(`case ${index + 1}`, () => {
      const result = generateBadge(dataTest);
      it('should return value includes percentage sent', () => {
        expect(result.includes(dataTest.percentage)).toBeTruthy();
      });

      it('should return value includes color sent', () => {
        expect(result.includes(dataTest.color)).toBeTruthy();
      });

      it('should URL generate match the expected', () => {
        expect(dataTest.badge).toBe(result);
      });
    });
  });
});

describe('fn: getColorAndPercent', () => {
  it('should throw if percentage is not a number', () => {
    expect(() => getColorAndPercent(false)).toThrow();
    expect(() => getColorAndPercent('hie')).toThrow();
    expect(() => getColorAndPercent('00')).toThrow();
    expect(() => getColorAndPercent({})).toThrow();
    expect(() => getColorAndPercent(100)).not.toThrow();
  });

  describe('ordinary case', () => {
    [
      {
        percentage: 10,
        color: 'FF3400'
      },
      {
        percentage: 55,
        color: 'E5FF00'
      },
      {
        percentage: 26,
        color: 'FF7B00'
      },
      {
        percentage: 93.3,
        color: '24FF00'
      },
      {
        percentage: 100,
        color: '00FF00'
      }
    ].forEach(({ percentage, color }) => {
      describe(`case: percentage: ${percentage} color: ${color}`, () => {
        const result = getColorAndPercent(percentage);
        it('should return an object', () => {
          expect(result).toBeInstanceOf(Object);
        });

        it('should contain "percentage" property', () => {
          expect(result).toHaveProperty('percentage');
        });
        it('should percentage from result match sent', () => {
          expect(result.percentage).toBe(percentage);
        });

        it('should contain "color" property', () => {
          expect(result).toHaveProperty('color');
        });
        it('should "color" from result match from data', () => {
          expect(result.color).toBe(color);
        });
      });
    });
  });

  describe('Float numbers', () => {
    times(5, () => random(100, true)).forEach(randomNumber => {
      const result = getColorAndPercent(randomNumber);
      describe(`Percentage => ${randomNumber}`, () => {
        it('should be rounded by 2', () => {
          const stringNumber = `${result.percentage}`;

          const isRounded =
            (stringNumber.length === 4 || stringNumber.length === 5) &&
            stringNumber.includes('.');

          expect(isRounded).toBeTruthy();
        });
      });
    });
  });
});

/* TODO */
describe('fn: extractPercentage', () => {
  
})

