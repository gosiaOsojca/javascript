// https://leetcode.com/problems/valid-parentheses/
var isValid = function (s) {
    let regExpValue = /\[\]|\{\}|\(\)/;
    while (s.match(regExpValue)) {
        s = s.replace(regExpValue, '');
    }
    return s ? false : true;
};






var isValid = function (s) {
    let Output = true;

    while (s.includes('[]') || s.includes('{}') || s.includes('()')) {
        s = s.replace(/\[\]|\{\}|\(\)/, '');
    }

    if (s !== '') {
        Output = false;
    }

    return Output;
};
