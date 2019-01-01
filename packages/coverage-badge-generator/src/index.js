#!/usr/bin/env node
import '@babel/polyfill';
import isNumber from 'lodash.isnumber';
import { resolve } from 'path';
import { existsSync } from 'fs-extra';

const colorScheme = [
  '#FF0000',
  '#FF1100',
  '#FF2300',
  '#FF3400',
  '#FF4600',
  '#FF5700',
  '#FF6900',
  '#FF7B00',
  '#FF8C00',
  '#FF9E00',
  '#FFAF00',
  '#FFC100',
  '#FFD300',
  '#FFE400',
  '#FFF600',
  '#F7FF00',
  '#E5FF00',
  '#D4FF00',
  '#C2FF00',
  '#B0FF00',
  '#9FFF00',
  '#8DFF00',
  '#7CFF00',
  '#6AFF00',
  '#58FF00',
  '#47FF00',
  '#35FF00',
  '#24FF00',
  '#12FF00',
  '#00FF00'
];

export function extractPercentage(filePath = '') {
  const resolvedPath = resolve(
    process.cwd(),
    filePath,
    'coverage-summary.json'
  );
  const existsCoverage = existsSync(resolvedPath);

  if (!existsCoverage) {
    throw new Error(
      `Could not find coverage-summary.json file at ${resolvedPath}`
    );
  }

  return import(resolvedPath)
    .then(summary => {
      const totalStatementsPercentage = summary.total.statements.pct;
      return totalStatementsPercentage;
    })
    .catch(console.error);
}

export function getColorAndPercent(percentage) {
  if (!isNumber(percentage)) {
    throw new Error('percentage must be a number');
  }
  const roundedPercentage = parseFloat(percentage.toFixed(2));
  const colorIndex = Math.floor((colorScheme.length * roundedPercentage) / 100);

  // Avoid index 30 === undefined
  const currentColor =
    colorIndex === colorScheme.length
      ? colorScheme[colorIndex - 1]
      : colorScheme[colorIndex];

  return {
    color: currentColor.replace('#', ''),
    percentage: roundedPercentage
  };
}

export function generateBadge({ percentage, color }) {
  if (!isNumber(percentage)) {
    throw new Error('percentage must be a number');
  }

  if (color.includes('#')) {
    throw new Error('Invalid color');
  }
  return `https://img.shields.io/badge/coverage-${percentage}%25-${color}.svg`;
}

extractPercentage('coverage/').then(console.log);
// .then(getColorAndPercent)
// .then(generateBadge)
// .then(console.log);
