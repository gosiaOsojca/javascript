// TASK #4
// SOLUTION #1
var rotate = function (nums, k) {
    let i;
    let lastIndex = nums.length - 1;
    for (i = 0; i < k; i++) {
        nums.unshift(nums[lastIndex]);
        nums.pop();
    }
    return nums;
};


// SOLUTION #2
var rotate = function (nums, k) {
    let i;
    let newArray = [];
    let arrayLength = nums.length;
    for(i = 0; i < arrayLength; i++) {
        newArray[(i + k) % arrayLength] = nums[i];
    }
    for(i = 0; i < arrayLength; i++) {
        nums[i] = newArray[i];
    }
};

// END TASK #4