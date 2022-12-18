
let gameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

function debug() {

console.table(gameBoard)

console.log('[0][0] TL:' + gameBoard[0][0])
console.log('[0][1] TM:' + gameBoard[0][1]) 
console.log('[0][2] TR:' + gameBoard[0][2]) 

console.log('[1][0] ML:' + gameBoard[1][0]) 
console.log('[1][1] MM:' + gameBoard[1][1]) 
console.log('[1][2] MR:' + gameBoard[1][2]) 

console.log('[2][0] BL:' + gameBoard[2][0]) 
console.log('[2][1] BM:' + gameBoard[2][1]) 
console.log('[2][2] TL:' + gameBoard[2][2]) 
}

function winConditions(score) {
    if (gameBoard[0][0] && gameBoard[0][1] && gameBoard[0][2] == true){ // All top row
        console.log('win')
        return true
    } else if (gameBoard[1][0] && gameBoard[1][1] && gameBoard[1][2] == true){ // All middle row
        console.log('win')
        return true
    } else if (gameBoard[2][0] && gameBoard[2][1] && gameBoard[2][2] == true){ // All bottom row
        console.log('win')
        return true
    } else if (gameBoard[0][0] && gameBoard[1][0] && gameBoard[2][0] == true){ // All left
        console.log('win')
        return true
    } else if (gameBoard[0][0] && gameBoard[1][1] && gameBoard[2][1] == true){ // All middle
        console.log('win')
        return true
    } else if (gameBoard[0][0] && gameBoard[1][1] && gameBoard[2][2] == true){ // All left diagonal
        console.log('win')
        return true
    } else if (gameBoard[2][0] && gameBoard[1][1] && gameBoard[0][2] == true){ // All right diagonal
        console.log('win')
        return true
            } else if (gameBoard[0][2] && gameBoard[1][2] && gameBoard[2][2] == true){ // All middle
        console.log('win')
        return true
    }
    else {console.log('loose')}
    return false
}

function userInputa(input) {
    gameBoard[0][0] = false
    gameBoard[0][1] = true
    gameBoard[0][2] = true
}

// Code from: https://medium.com/wdstack/quick-blurb-generating-a-table-from-an-array-in-javascript-41386fd449a9#:~:text=//setup%20our%20table%20array
function displayBoard() {
let table = document.createElement('table');
for (let row of gameBoard) {
  table.insertRow();
  for (let cell of row) {
    let newCell = table.rows[table.rows.length - 1].insertCell();
    newCell.textContent = cell;
  }
}
document.body.appendChild(table);
}

