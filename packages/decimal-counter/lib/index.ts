function decimalCounter(number: string | number): number {
  const hasDecimal = /[.,]/gi;
  const numberString = `${number}`;

  if (!hasDecimal.test(numberString)) {
    return 0;
  }

  const regex = /[.,](\d*)/gi;

  let arr;
  let result = 0;

  while ((arr = regex.exec(numberString)) !== null) {
    result = arr[1];
  }

  return `${result}`.length;
}

export default decimalCounter;
