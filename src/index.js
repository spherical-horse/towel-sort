// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    const result = [];
    matrix.forEach((element, index) => {
        if (index % 2 === 1) {
            element = element.reverse();
        }
        element.forEach(item => {
            result.push(item);
        });
    });
    return result;
}

const matrix = [
    [1, 2, 4],
    [5, 6, 7, 8],
    [9, 12, 13],
];

// console.log(module.exports(matrix));