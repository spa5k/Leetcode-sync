/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    const totalCells = rows * cols;
    const path = [];
    let [leftBound, rightBound, topBound, bottomBound] = [cStart, cStart + 1, rStart, rStart];

    const addToPath = (row, col) => {
        if (row >= 0 && row < rows && col >= 0 && col < cols) {
            path.push([row, col]);
        }
    };

    const traverseEast = (start, end) => {
        for (let i = start; i <= end; i++) addToPath(topBound, i);
    };

    const traverseWest = (start, end) => {
        for (let i = start; i >= end; i--) addToPath(bottomBound, i);
    };

    const traverseSouth = (start, end) => {
        for (let i = start; i <= end; i++) addToPath(i, rightBound);
    };

    const traverseNorth = (start, end) => {
        for (let i = start; i >= end; i--) addToPath(i, leftBound);
    };

    addToPath(rStart, cStart);

    while (path.length < totalCells) {
        if (topBound >= 0) traverseEast(Math.max(0, leftBound + 1), Math.min(cols - 1, rightBound));
        bottomBound++;
        if (path.length >= totalCells) break;

        if (rightBound < cols) traverseSouth(Math.max(0, topBound + 1), Math.min(rows - 1, bottomBound));
        leftBound--;
        if (path.length >= totalCells) break;

        if (bottomBound < rows) traverseWest(Math.min(cols - 1, rightBound - 1), Math.max(0, leftBound));
        topBound--;
        if (path.length >= totalCells) break;

        if (leftBound >= 0) traverseNorth(Math.min(rows - 1, bottomBound - 1), Math.max(0, topBound));
        rightBound++;
        if (path.length >= totalCells) break;
    }

    return path;
};
