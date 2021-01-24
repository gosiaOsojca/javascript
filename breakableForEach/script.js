const arr = [-1, 0, 1, 1.5 ,2, 3, 4];
let breakFlag = false;
function breakableForEach(array, callback) {
	for(let index = 0; index <= array.length; index++) {
    callback(array[index], breakFn);
    if (breakFlag) {
      break;
    }
  }
}

function loopFunction(val, breakFunction) {
  	if (val >= 2) {
  		breakFunction();
  	}
}

function breakFn() {
  breakFlag = true;
};

breakableForEach(arr, loopFunction);