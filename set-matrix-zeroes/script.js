// https://leetcode.com/problems/set-matrix-zeroes/

var setZeroes = function (matrix) {
    let i;
    let j;
    let dataTable = [];
    alert(matrix[0].length);
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                let element = {
                    row: i,
                    column: j
                };
                dataTable.push(element);
            }
        }
    }
    let k;
    for (k = 0; k < dataTable.length; k++) {
        matrix[dataTable[k].row].fill(0);
        for (i = 0; i < matrix.length; i++) {
            for (j = 0; j < matrix[i].length; j++) {
                if (j === dataTable[k].column) {
                    matrix[i][j] = 0;
                }
            }
        }
    };
}