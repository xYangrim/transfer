function placeShip() {
    const shipLengths = [2, 3, 3, 4, 5];

    for (let length of shipLengths) {
        let col, row, direction;

        do {
            direction = Math.floor(Math.random() * 2);

            col = Math.floor(Math.random() * boardSize);
            row = Math.floor(Math.random() * boardSize);
        } while(!isValidPlacement(col, row, length, direction));

        for(i = 0; i < length; i++) {
            if(direction === 0) {
                board[col][row + i] = true;
            } else {
                board[col + 1][row] = true;
            }
        }
    }
}

function isValidPlacement(startCol, startRow, length, direction) {
    if(
        (direction === 0 && startCol + length > boardSize) ||
        (direction === 1 && startRow + length > boardSize)
    ) {
        return false;
    }

    for(let i = 0; i < length; i++) {
        if(direction === 0 && board[startRow][startCol + i]) {
            return false;
        } else if (direction === 1 && board[startRow + i][startCol]) {
            return false;
        }
    }
    return true;
}