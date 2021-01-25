const arr = [-1, 0, 1, 1.5, 2, 3, 4];

function breakableForEach(array, callback) {
  let breakFlag = false;
  function breakFn() {
    breakFlag = true;
  };
  for (let index = 0; index <= array.length; index++) {
    if (!breakFlag) {
      callback(array[index], breakFn);
    }
  }
}

function loopFunction(val, breakFunction) {
  console.log(val);
  if (val >= 2) {
    breakFunction();
  }
}

breakableForEach(arr, loopFunction);