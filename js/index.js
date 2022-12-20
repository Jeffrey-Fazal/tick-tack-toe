/**
 * Gameboard for tested
 */
let gameBoard = [
    ['x', 'o', 'x'],
    ['o', 'o', 'o'],
    [null, 'o', null]
]

/**
 * A blank gameboard
 */
let newGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

/**
 * Map out the array to grid cordinates
 */
let boardMap = [
    ['TL', 'TM', 'TR'],
    ['ML', 'MM', 'MR'],
    ['BL', 'BM', 'BR']
]
/**
 * Assigns selectedBoard to whichever board you want to start with
 */
let selectedBoard = newGameBoard
/**
 * Variables to keep track of a players score
 */
let scorePlayerOne = 0
let scorePlayerTwo = 0
/**
 * Uses a text representation of the players token
 */
let playerOneToken = 'x'
let playerTwoToken = 'o'
// Event listeners for gameboard grids
const mm = document.querySelector("#MM")
const tl = document.querySelector("#TL")
const tm = document.querySelector("#TM")
const tr = document.querySelector("#TR")
const ml = document.querySelector("#ML")
const mr = document.querySelector("#MR")
const bl = document.querySelector("#BL")
const bm = document.querySelector("#BM")
const br = document.querySelector("#BR")
// Event listners for buttons
const btnWinner = document.querySelector('#find-winnner')
const btnReset = document.querySelector('#reset-board')
const btnRandomMove = document.querySelector('#random-move')
// Boolean value to keep track of who is playing
let turnPlayer = true // playerOne = true vs playerTwo = false

/**
 * Resets variables
 */
function refreshBoard() {
    let reset = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
    selectedBoard = reset
    scorePlayerOne = 0
    scorePlayerTwo = 0
    mm.innerHTML = ""
    tl.innerHTML = ""
    tm.innerHTML = ""
    tr.innerHTML = ""
    ml.innerHTML = ""
    mr.innerHTML = ""
    bl.innerHTML = ""
    bm.innerHTML = ""
    br.innerHTML = ""
    console.log('refreshboard()')
}

/**
 * Find out if a player or CPU has won (token is hardcoded)
 * @param {array} board The gameboard
 * @returns true (represents it's now players turn)
 */
function findWinner(board) {
    if (board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'x') {
        console.log('x wins : Top Row')
        return true
    } else if (board[0][0] === 'o' && board[0][1] === 'o' && board[0][2] === 'o') {
        console.log('o wins : Top Row')
        return true
    } else if (board[1][0] === 'o' && board[1][1] === 'o' && board[1][2] === 'o') {
        console.log('o wins : Middle Row')
        return true
    } else if (board[1][0] === 'x' && board[1][1] === 'x' && board[1][2] === 'x') {
        console.log('x wins : Middle Row')
        return true
    } else if (board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'x') {
        console.log('x wins  : Bottom Row')
        return true
    } else if (board[2][0] === 'o' && board[2][1] === 'o' && board[2][2] === 'o') {
        console.log('o wins : Bottom Row')
        return true
    } else if (board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x') {
        console.log('x wins  : Left Diagonal')
        return true
    } else if (board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o') {
        console.log('o wins  : Left Diagonal')
        return true
    } else if (board[0][2] === 'o' && board[1][1] === 'o' && board[2][0] === 'o') {
        console.log('o wins : Right Diagonal')
        return true
    } else if (board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x') {
        console.log('x wins : Right Diagonal')
        return true
    } else if (board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x') {
        console.log('x wins : Middle Down')
        return true
    } else if (board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o') {
        console.log('o wins : Middle Down')
        return true
    } else if (board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x') {
        console.log('x wins : Left Down')
        return true
    } else if (board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o') {
        console.log('o wins : Left Down')
        return true
    } else if (board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x') {
        console.log('x wins : Right Down')
        return true
    } else if (board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o') {
        console.log('o wins : Right Down')
        return true
    } else { console.log('Draw/Continue') }
    return false
}

/**
 * Randomly generates a number between 0-2 to be used on the board
 * @returns An number between 0-2
 */
function randomThreebyThree() {
    return Math.floor(Math.random() * (3 - 1 + 1)) + 0;
}
/**
 * Randomly generates a choice and plays on the gird
 * @param {array} board The gameboard
 * @param {string} playerToken The token to be used
 */
function randomChoice(board, playerToken) {
    index1 = randomThreebyThree()
    index2 = randomThreebyThree()
    console.log(`First random indexes: ${playerToken}: [${index1}] [${index2}]`)
    while (board[index1][index2] !== null) {
        console.log('reroll')
        index1 = randomThreebyThree()
        index2 = randomThreebyThree()
        console.log(`New roll [${index1}] [${index2}]`)
    }
    board[index1][index2] = playerToken
    console.log(`Played on [${index1}] [${index2}]`)
    gridItem = boardMap[index1][index2]
    console.log(`grid item: ${gridItem}`)
    boardClick(gridItem, selectedBoard, playerTwoToken)
    turnPlayer = true
}
/**
 * Triggers when a user clicks and plays a token 
 * @param {string} grid The grid cordinates expresses as a string
 * @param {array} board The gameboard
 * @param {string} playerToken  The players token
 * @param {*} start Unused
 * @returns true/false (representing the players turn)
 */
function boardClick(grid, board, playerToken, start) {
    msg = `${grid} clicked`
    console.log(msg)
    let move = grid
    turn = false
    switch (move) {
        case 'MM':
            board[1][1] = playerToken
            console.log(`played on ${grid} (switch function)`)
            mm.innerHTML = playerToken
            turnPlayer = true
            // return turnPlayer
        case 'TL':
            board[0][0] = playerToken
            console.log(`played on ${grid} (switch function)`)
            tl.innerHTML = playerToken
            turnPlayer = turn
            return turnPlayer
        case 'TM':
            board[0][1] = playerToken
            console.log(`played on ${grid} (switch function)`)
            tm.innerHTML = playerToken
            turnPlayer = turn
            return turnPlayer
        case 'TR':
            board[0][2] = playerToken
            console.log(`played on ${grid} (switch function)`)
            tr.innerHTML = playerToken
            turnPlayer = turn
            return turnPlayer
        case 'ML':
            board[1][0] = playerToken
            console.log(`played on ${grid} (switch function)`)
            ml.innerHTML = playerToken
            turnPlayer = turn
            return turnPlayer
        case 'MR':
            board[1][2] = playerToken
            console.log(`played on ${grid} (switch function)`)
            mr.innerHTML = playerToken
            turnPlayer = turn
            return turnPlayer
        case 'BL':
            board[2][0] = playerToken
            console.log(`played on ${grid} (switch function)`)
            bl.innerHTML = playerToken
            turnPlayer = turn
            return turnPlayer
        case 'BM':
            board[2][1] = playerToken
            console.log(`played on ${grid} (switch function)`)
            bm.innerHTML = playerToken
            turnPlayer = turn
            return turnPlayer
        case 'BR':
            board[2][2] = playerToken
            console.log(`played on ${grid} (switch function)`)
            br.innerHTML = playerToken
            turnPlayer = turn
            return turnPlayer
        default:
            console.log('Click area not defined')
            return turnPlayer = null
    }// check if winner and computer makes a move?
    console.log(`boardClick Output:: turnPlayer = ` + turn)
}
/**
 * The loop which starts and ends the gameplay
 * @param {boolean} 
 * @returns score (future)
 */

// function gameStart(turn) {
//     for (let i = 0; i < 9; i++) {
//         x = findWinner(selectedBoard)
//         if (x === true) {
//             console.log(`Game over on loop ${i} condition ${x}`)
//             return
//         } if (turnPlayer === true) {
//             randomChoice(selectedBoard, playerTwoToken)
//             console.log(`gamestart output: turnPlayer = ${turnPlayer}`)
//             turnPlayer = false
//         } console.log('broken out of loop')
//     }
// }

/**
 * 
 * @param {array} board The gameboard
 * @param {string} level Level of infomation required
 */
function debug(board, level) {
    if (level === 'basic') {
        console.table(board)
    } else {
        console.table(board)
        console.log('[0][0] TL:' + board[0][0])
        console.log('[0][1] TM:' + board[0][1])
        console.log('[0][2] TR:' + board[0][2])

        console.log('[1][0] ML:' + board[1][0])
        console.log('[1][1] MM:' + board[1][1])
        console.log('[1][2] MR:' + board[1][2])

        console.log('[2][0] BL:' + board[2][0])
        console.log('[2][1] BM:' + board[2][1])
        console.log('[2][2] TL:' + board[2][2])
    }
}

// Grid Event Listners
mm.addEventListener("click", boardClick.bind(this, 'MM', selectedBoard, 'x'), false)
tl.addEventListener("click", boardClick.bind(this, 'TL', selectedBoard, 'x'), false)
tm.addEventListener("click", boardClick.bind(this, 'TM', selectedBoard, 'x'), false)
tr.addEventListener("click", boardClick.bind(this, 'TR', selectedBoard, 'x'), false)
ml.addEventListener("click", boardClick.bind(this, 'ML', selectedBoard, 'x'), false)
mr.addEventListener("click", boardClick.bind(this, 'MR', selectedBoard, 'x'), false)
bl.addEventListener("click", boardClick.bind(this, 'BL', selectedBoard, 'x'), false)
bm.addEventListener("click", boardClick.bind(this, 'BM', selectedBoard, 'x'), false)
br.addEventListener("click", boardClick.bind(this, 'BR', selectedBoard, 'x'), false)

// Button Event Listners 
btnWinner.addEventListener("click", findWinner.bind(this, selectedBoard), false)
btnReset.addEventListener("click", refreshBoard.bind(this, selectedBoard), false)
btnRandomMove.addEventListener("click", randomChoice.bind(this, selectedBoard, playerTwoToken), false)

// Start debug Functions
// debug(selectedBoard,'info')

// gameStart()