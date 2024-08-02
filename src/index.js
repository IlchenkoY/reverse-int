module.exports = function reverse(n) {
    const stringifyNum = Math.abs(n).toString();
    let reverseInt = "";
    for (let i = stringifyNum.length - 1; i >= 0; i -= 1) {
        reverseInt += stringifyNum[i];
    }
    return Number(reverseInt);
};
