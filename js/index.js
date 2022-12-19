// CPU = x | Player = o
// TODO: User input, who starts first?
// Random Choice
// Difficult / Human vs Human

// Gameboard set to start
let gameBoard1 = [
    ['x',null,'x'],
    ['o','o','o'],
    [null,'o',null]
  ]

// // Gameboard set to start
// let gameBoard = [
//     [null,null,null],
//     [null,null,null],
//     [null,null,null]
//   ]

let turn = ['1','2','3','4','5','6','7','8','9']

function findWinner(board){
    if(board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'x'){
        console.log('x wins : Top Row')
    }else if (board[0][0] === 'o' && board[0][1] === 'o' && board[0][2] === 'o') {
        console.log('o wins : Top Row')
    }else if (board[1][0] === 'o' && board[1][1] === 'o' && board[1][2] === 'o') {
        console.log('o wins : Middle Row')
    }else if (board[1][0] === 'x' && board[1][1] === 'x' && board[1][2] === 'x') {
        console.log('x wins : Middle Row')
    }else if (board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'x') {
        console.log('x wins  : Bottom Row')
    }else if (board[2][0] === 'o' && board[2][1] === 'o' && board[2][2] === 'o') {
        console.log('o wins : Bottom Row')
    }else if (board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x') {
        console.log('x wins  : Left Diagonal')
    }else if (board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o') {
        console.log('o wins  : Left Diagonal')
    }else if (board[0][2] === 'o' && board[1][1] === 'o' && board[2][0] === 'o') {
        console.log('o wins : Right Diagonal')
    }else if (board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x') {
        console.log('x wins : Right Diagonal')
    }else if (board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x') {
        console.log('x wins : Middle Down')
    }else if (board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o') {
        console.log('o wins : Middle Down')
    }else {console.log('Draw/Continue')}
    }

// Generate a random move for 3 x 3 grid
function randomThreebyThree() {
    return Math.floor(Math.random() * (3 - 1 + 1)) + 0;
}

function randomChoice(board,playerString) {
    index1 = randomThreebyThree()
    index2 = randomThreebyThree()
    console.log(`First random indexes: ${playerString}: [${index1}] [${index2}]`)
    while (board[index1][index2] !== null){
        console.log(`Spot taken: [${index1}] [${index2}]`)
        index1 = randomThreebyThree()
        index2 = randomThreebyThree()
        if(board[index1][index2] === null){
            board[index1][index2] = playerString
            console.log(`Assign ${playerString}: [${index1}] [${index2}]`)
            break
        }
        
    }
}

function randomMove(board,playerString) {


    index1 = randomThreebyThree()
    index2 = randomThreebyThree()
    if (board[index1][index2] === null){
        board[index1][index2] = playerString
    console.log('empty')
    } else {console.log('grid has been played')}
}

// DEBUG: Output's value of gameBoard
function debug(board,level) {
if (level === 'basic'){
console.table(board)
} else{
console.log('[0][0] TL:' + board[0][0])
console.log('[0][1] TM:' + board[0][1]) 
console.log('[0][2] TR:' + board[0][2]) 

console.log('[1][0] ML:' + board[1][0]) 
console.log('[1][1] MM:' + board[1][1]) 
console.log('[1][2] MR:' + board[1][2]) 

console.log('[2][0] BL:' + board[2][0]) 
console.log('[2][1] BM:' + board[2][1]) 
console.log('[2][2] TL:' + board[2][2]) }
}

debug(gameBoard1,'basic')
randomChoice(gameBoard1,'x')
debug(gameBoard1,'basic')