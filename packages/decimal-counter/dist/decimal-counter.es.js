function decimalCounter(number) {
    var hasDecimal = /[.,]/gi;
    var numberString = "" + number;
    if (!hasDecimal.test(numberString)) {
        return 0;
    }
    var regex = /[.,](\d*)/gi;
    var arr;
    var result = 0;
    while ((arr = regex.exec(numberString)) !== null) {
        result = arr[1];
    }
    return ("" + result).length;
}

export default decimalCounter;
