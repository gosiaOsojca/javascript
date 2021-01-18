// TASK #1
var isPalindrome = function (s) {
    let isPalyndrom = true;
    s = s.replace(/[\W_]+/gm, '').toLowerCase();
    let stringLength = s.length;
    let halfStringLength = Math.floor(stringLength / 2);
    let i;
    for (i = 0; i < halfStringLength; i++) {
        let secondLength = stringLength - i - 1;
        if (s[i] !== s[secondLength]) {
            isPalyndrom = false;
            break;
        }
    }
    return isPalyndrom;
};

isPalindrome('race a car');
// END TASK #1