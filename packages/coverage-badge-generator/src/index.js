import '@babel/polyfill';
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

export async function extractPercentage() {
  const coverage = await import('../coverage/coverage-summary.json');
  const totalStatementsPercentage = coverage.total.statements.pct;
  return totalStatementsPercentage;
}

export function getColor(percentage) {
  const colorIndex = Math.floor((colorScheme.length * percentage) / 100);
  return {
    color: colorScheme[colorIndex].replace('#', ''),
    percentage
  };
}

export function generateBadge({ percentage, color }) {
  return `https://img.shields.io/badge/coverage-${percentage}%25-${color}.svg`;
}

extractPercentage()
  .then(getColor)
  .then(generateBadge)
  .then(console.log);
