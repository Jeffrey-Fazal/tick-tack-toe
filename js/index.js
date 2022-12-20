// CPU = x | Player = o
// TODO: User input, who starts first?
// Random Choice
// Difficult / Human vs Human

// Gameboard set to start
let gameBoard = [
    ['x','o','x'],
    ['o','o','o'],
    [null,'o',null]
  ]

// Gameboard set to start
let newGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
  ]

  // Gameboard Map
let boardMap = [
    ['TL','TM','TR'],
    ['ML','MM','MR'],
    ['BL','BM','BR']
  ]

let selectedBoard = newGameBoard

let scorePlayerOne = 0
let scorePlayerTwo = 0
let playerOneToken = 'x'
let playerTwoToken = 'o'

const mm = document.querySelector("#MM")
const tl = document.querySelector("#TL")
const tm = document.querySelector("#TM")
const tr = document.querySelector("#TR")
const ml = document.querySelector("#ML")
const mr = document.querySelector("#MR")
const bl = document.querySelector("#BL")
const bm = document.querySelector("#BM")
const br = document.querySelector("#BR")

const btnWinner = document.querySelector('#find-winnner')
const btnReset = document.querySelector('#reset-board')
const btnRandomMove = document.querySelector('#random-move')

let turnPlayer = true // playerOne = true vs playerTwo = false

/* Doesnt work, reasignment issue or scope problem*/
function refreshBoard(){
    let reset = [
        [null,null,null],
        [null,null,null],
        [null,null,null]
      ]
    reset = selectedBoard
    scorePlayerOne = 0
    scorePlayerTwo = 0
    console.log('Variables Reset')
}

function findWinner(board){
    if(board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'x'){
        console.log('x wins : Top Row')
        return true
    }else if (board[0][0] === 'o' && board[0][1] === 'o' && board[0][2] === 'o') {
        console.log('o wins : Top Row')
        return true
    }else if (board[1][0] === 'o' && board[1][1] === 'o' && board[1][2] === 'o') {
        console.log('o wins : Middle Row')
        return true
    }else if (board[1][0] === 'x' && board[1][1] === 'x' && board[1][2] === 'x') {
        console.log('x wins : Middle Row')
        return true
    }else if (board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'x') {
        console.log('x wins  : Bottom Row')
        return true
    }else if (board[2][0] === 'o' && board[2][1] === 'o' && board[2][2] === 'o') {
        console.log('o wins : Bottom Row')
        return true
    }else if (board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x') {
        console.log('x wins  : Left Diagonal')
        return true
    }else if (board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o') {
        console.log('o wins  : Left Diagonal')
        return true
    }else if (board[0][2] === 'o' && board[1][1] === 'o' && board[2][0] === 'o') {
        console.log('o wins : Right Diagonal')
        return true
    }else if (board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x') {
        console.log('x wins : Right Diagonal')
        return true
    }else if (board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x') {
        console.log('x wins : Middle Down')
        return true
    }else if (board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o') {
        console.log('o wins : Middle Down')
        return true
    }else if (board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x') {
        console.log('x wins : Left Down')
        return true
    }else if (board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o') {
        console.log('o wins : Left Down')
        return true
    }else if (board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x') {
        console.log('x wins : Right Down')
        return true
    }else if (board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o') {
        console.log('o wins : Right Down')
        return true
    }else {console.log('Draw/Continue')}
        return false
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
        console.log('reroll')
        index1 = randomThreebyThree()
        index2 = randomThreebyThree()
        console.log(`New roll [${index1}] [${index2}]`)
    } 
    board[index1][index2] = playerString
    console.log(`Played on [${index1}] [${index2}]`)
    gridItem = boardMap[index1][index2]
    console.log(`grid item: ${gridItem}`)
    boardClick(gridItem,selectedBoard,playerTwoToken)
    turnPlayer = true
}

function boardClick(grid,board,playerToken) {
    msg = `${grid} clicked`
    console.log(msg)
    let move = grid
    switch (move) {
        case 'MM':
            board[1][1] = playerToken
            console.log(`played on ${grid} (switch function)`)
            mm.innerHTML = playerToken
            debug(board, 'basic')
            turnPlayer = false
            break
        case 'TL':
            board[0][0] = playerToken
            console.log(`played on ${grid} (switch function)`)
            tl.innerHTML = playerToken
            debug(board, 'basic')
            turnPlayer = false
            break
        case 'TM':
            board[0][1] = playerToken
            console.log(`played on ${grid} (switch function)`)
            tm.innerHTML = playerToken
            debug(board, 'basic')
            turnPlayer = false
            break
        case 'TR':
            board[0][2] = playerToken
            console.log(`played on ${grid} (switch function)`)
            tr.innerHTML = playerToken
            debug(board, 'basic')
            turnPlayer = false
            break
        case 'ML':
            board[1][0] = playerToken
            console.log(`played on ${grid} (switch function)`)
            ml.innerHTML = playerToken
            debug(board, 'basic')
            turnPlayer = false
            break
        case 'MR':
            board[1][2] = playerToken
            console.log(`played on ${grid} (switch function)`)
            mr.innerHTML = playerToken
            debug(board, 'basic')
            turnPlayer = false
            break
        case 'BL':
            board[2][0] = playerToken
            console.log(`played on ${grid} (switch function)`)
            bl.innerHTML = playerToken
            debug(board, 'basic')
            turnPlayer = false
            break
        case 'BM':
            board[2][1] = playerToken
            console.log(`played on ${grid} (switch function)`)
            bm.innerHTML = playerToken
            debug(board, 'basic')
            turnPlayer = false
            break
        case 'BR':
            board[2][2] = playerToken
            console.log(`played on ${grid} (switch function)`)
            br.innerHTML = playerToken
            debug(board, 'basic')
            turnPlayer = false
            break
        default:
            console.log('Click area not defined')
            return turnPlayer = null
    }
}

function gameStart(startPlayer) {
    for (let i = 0 ; i < 9; i++) {

    x = findWinner(selectedBoard)
    if (x === true) {
        console.log(`Game over on loop ${i} condition ${x}`)
        break
    }
    
    }console.table(selectedBoard)

}

// DEBUG: Output's value of board
function debug(board,level) {
if (level === 'basic'){
console.table(board)
} else{
console.table(board)
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

// gameStart()
// debug(selectedBoard,'basic')
randomChoice(selectedBoard,'x')
// debug(selectedBoard,'basic')

// Grid Event Listners


mm.addEventListener("click",boardClick.bind(this,'MM',selectedBoard,'x'),false)

tl.addEventListener("click",boardClick.bind(this,'TL',selectedBoard,'x'),false)

tm.addEventListener("click",boardClick.bind(this,'TM',selectedBoard,'x'),false)

tr.addEventListener("click",boardClick.bind(this,'TR',selectedBoard,'x'),false)

ml.addEventListener("click",boardClick.bind(this,'ML',selectedBoard,'x'),false)

mr.addEventListener("click",boardClick.bind(this,'MR',selectedBoard,'x'),false)

bl.addEventListener("click",boardClick.bind(this,'BL',selectedBoard,'x'),false)

bm.addEventListener("click",boardClick.bind(this,'BM',selectedBoard,'x'),false)

br.addEventListener("click",boardClick.bind(this,'BR',selectedBoard,'x'),false)

// Button Event Listners 


btnWinner.addEventListener("click",findWinner.bind(this,selectedBoard),false)

btnReset.addEventListener("click",refreshBoard.bind(this,selectedBoard),false)

btnRandomMove.addEventListener("click",randomChoice.bind(this,selectedBoard,playerTwoToken),false)