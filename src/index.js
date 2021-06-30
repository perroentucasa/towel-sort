// You should implement your task here.

module.exports = function towelSort(matrix) {
    let resultArr = [];
    if (!matrix) {
        return resultArr;
    }

    for (let i = 0; i < matrix.length; i++) {
        i % 2 == 0
            ? (resultArr = [...resultArr, ...matrix[i]])
            : (resultArr = [...resultArr, ...matrix[i].reverse()]);
    }

    return resultArr;
};
