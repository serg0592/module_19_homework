function reverse (inStr) {
    let outStr = '';
    for (let i = 1; i <= inStr.length; i++) {
        outStr = outStr + inStr[inStr.length - i];
    };
    return outStr;
}
module.exports = reverse;