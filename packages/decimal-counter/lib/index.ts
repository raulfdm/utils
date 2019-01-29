function decimalCounter(number: string | number): number {
  const hasDecimal = /[.,]/gi;
  const numberString = `${number}`;

  if (!hasDecimal.test(numberString)) {
    return 0;
  }
  
  const regex = /[.,](\d*)/;
  const [_, result] = numberString.match(regex);

  return result.length;
}

export default decimalCounter;
