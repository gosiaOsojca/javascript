// TASK #2
var isValid = function (s) {
    let regExpValue = /\[\]|\{\}|\(\)/;
    while (s.match(regExpValue)) {
        s = s.replace(regExpValue, '');
    }
    return s ? false : true;
};
// END TASK #2



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
