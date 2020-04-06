function binaryEasy(numConvertFirst) {  // Uses the toString method to convert a decimal number to a representative binary string.
    return numConvertFirst.toString(2);
}

console.log(binaryEasy(10))

function binarySome(numConvertSecond) { // Uses a for loop to convert a decimal number to a representative binary string by appending to an empty string, so long as the decimal is less that 2 ^ 32.
    var numBinary = "";
    if (numConvertSecond == 0) {
        numBinary = "0";
        return numBinary;
    }
    for (var i = 32; i > -1; i--) {
        if (numConvertSecond >= (2 ** i)) {
            numConvertSecond -= 2 ** i;
            numBinary += "1";
        } else if (numBinary != "") {
            numBinary += "0";
        }
    }
    return numBinary;
}

console.log(binarySome(10));

function binaryAny(numConvertThird) { // Uses a for loop to convert a decimal number to a representative binary string by appending to an empty string.
    var numBinarySecond = "";
    if (numConvertThird == 0) {
        numBinarySecond = "0";
        return numBinarySecond;
    }
    for (var i = (Math.ceil(Math.log2(numConvertThird))); i > -1; i--) {
        if (numConvertThird >= (2 ** i)) {
            numConvertThird -= 2 ** i;
            numBinarySecond += "1";
        } else if (numBinarySecond != "") {
            numBinarySecond += "0";
        }
    }
    return numBinarySecond;
}

console.log(binaryAny(10));