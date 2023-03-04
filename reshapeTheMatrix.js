/*
566. Reshape the Matrix
In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different 
size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of 
the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as 
they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; 
Otherwise, output the original matrix.

Example 1:
Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]

Example 2:
Input: mat = [[1,2],[3,4]], r = 2, c = 4
Output: [[1,2],[3,4]]
*/

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {

    let result = []
    let flattendedMat = []
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            flattendedMat.push(mat[i][j])
        }
    }

    if (r * c !== flattendedMat.length) {
        return mat
    }

    for (let i = 0; i < r; i++) {
        let row = []
        for (let j = 0; j < c; j++) {
            row.push(flattendedMat.shift())
        }
        result.push(row)
    }

    return result
};

// Best solution
var matrixReshape = function (mat, r, c) {

    if (mat.length * mat[0].length != r * c) return mat

    // flat turns it into a one deminsional array while keeping order. 
    let flattenedArr = mat.flat()

    let resultArr = [];
    while (flattenedArr.length) {
        resultArr.push(flattenedArr.splice(0, c))
    }
    return resultArr;
};

console.log(matrixReshape([[1, 2], [3, 4]], 2, 4))