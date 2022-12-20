/**
 * Gameboard for tested
 */
let gameBoard = [
    ['x', 'o', 'x'],
    ['o', 'o', 'o'],
    [null, 'o', null]
]

/**
 * Blank gameboard, used to rest the game
 */
let newGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

/**
 * Map out the array to grid cordinates to array points
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
 * Variables to keep track of a players ones score
 */
let scorePlayerOne = 0
/**
 * Variables to keep track of a players twos score
 */
let scorePlayerTwo = 0
/**
 * Uses a text representation of the players token (set to x)
 */
let playerOneToken = 'x'
/**
 * Uses a text representation of the players token (set to o)
 */
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
// Event listeners for output
let win = document.querySelector("#game-status")
let domTurn = document.querySelector("#game-status")
let playerOneDOM = document.querySelector("#player-one-score")
let playerTwoDOM = document.querySelector("#player-two-score")
// Boolean value to keep track of who is playing
let turnPlayer = true // playerOne = true vs playerTwo = false
let turn = 0 // counts what turn the game is up to
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
    playerOneDOM.innerHTML = `Player 1 Score ${scorePlayerOne}`
    scorePlayerTwo = 0
    playerTwoDOM.innerHTML = `Player 2 Score ${scorePlayerTwo}`
    mm.innerHTML = "MM: [1][1]"
    tl.innerHTML = "TL: [0][0]"
    tm.innerHTML = "TM: [0][1]"
    tr.innerHTML = "TR: [0][2]"
    ml.innerHTML = "ML: [1][0]"
    mr.innerHTML = "MR: [1][2]"
    bl.innerHTML = "BL: [2][0]"
    bm.innerHTML = "BM: [2][1]"
    br.innerHTML = "BR: [2][2]"
    console.log('refreshboard()')
}

/**
 * Changes the ID tag game-status to show game over and refreshes the board
 */
function endGame(winner) {
    if (winner === playerOneToken){
        win.innerHTML = `Game over, congrats ${playerOneToken}`
        scorePlayerOne++
        playerOneDOM.innerHTML = `Player 1 Score ${scorePlayerOne}`
     } else if (winner === playerTwoToken) {
        win.innerHTML = `Game over, congrats ${playerTwoToken}`
        scorePlayerTwo++
        playerTwoDOM.innerHTML = `Player 2 Score ${scorePlayerTwo}`
    }else {
        console.log('You have found a bug')
        debug(selectedBoard,'info')
    }
    // refreshBoard() - pending, still need to test this function
}

/**
 * Find out if a player or CPU has won (token is hardcoded)
 * @param {array} board The gameboard
 * @returns true (represents that the game is over)
 */
function findWinner(board) {
    if (board[0][0] === playerOneToken && board[0][1] === playerOneToken && board[0][2] === playerOneToken) {
        endGame(playerOneToken)
        return true
    } else if (board[0][0] === playerTwoToken && board[0][1] === playerTwoToken && board[0][2] === playerTwoToken) {
        console.log(`${playerTwoToken} wins : Top Row`)
        endGame(playerTwoToken)
        return true
    } else if (board[1][0] === playerTwoToken && board[1][1] === playerTwoToken && board[1][2] === playerTwoToken) {
        console.log(`${playerTwoToken} wins : Middle Row`)
        endGame(playerTwoToken)
        return true
    } else if (board[1][0] === playerOneToken && board[1][1] === playerOneToken && board[1][2] === playerOneToken) {
        console.log(`${playerOneToken} wins : Middle Row`)
        endGame(playerOneToken)
        return true
    } else if (board[2][0] === playerOneToken && board[2][1] === playerOneToken && board[2][2] === playerOneToken) {
        console.log(`${playerOneToken}  wins : Bottom Row`)
        endGame(playerOneToken)
        return true
    } else if (board[2][0] === playerTwoToken && board[2][1] === playerTwoToken && board[2][2] === playerTwoToken) {
        console.log(`${playerTwoToken} wins : Bottom Row`)
        endGame(playerTwoToken)
        return true
    } else if (board[0][0] === playerOneToken && board[1][1] === playerOneToken && board[2][2] === playerOneToken) {
        console.log(`${playerOneToken}  wins : Left Diagonal`)
        endGame(playerOneToken)
        return true
    } else if (board[0][0] === playerTwoToken && board[1][1] === playerTwoToken && board[2][2] === playerTwoToken) {
        console.log(`${playerTwoToken} wins  : Left Diagonal`)
        endGame(playerTwoToken)
        return true
    } else if (board[0][2] === playerTwoToken && board[1][1] === playerTwoToken && board[2][0] === playerTwoToken) {
        console.log(`${playerTwoToken} wins : Right Diagonal`)
        endGame(playerTwoToken)
        return true
    } else if (board[0][2] === playerOneToken && board[1][1] === playerOneToken && board[2][0] === playerOneToken) {
        console.log(`${playerOneToken} wins : Right Diagonal`)
        endGame(playerOneToken)
        return true
    } else if (board[0][1] === playerOneToken && board[1][1] === playerOneToken && board[2][1] === playerOneToken) {
        console.log(`${playerOneToken} wins : Middle Down`)
        endGame(playerOneToken)
        return true
    } else if (board[0][1] === playerTwoToken && board[1][1] === playerTwoToken && board[2][1] === playerTwoToken) {
        console.log(`${playerTwoToken} wins : Middle Down`)
        endGame(playerTwoToken)
        return true
    } else if (board[0][0] === playerOneToken && board[1][0] === playerOneToken && board[2][0] === playerOneToken) {
        console.log(`${playerOneToken} wins : Left Down`)
        endGame(playerOneToken)
        return true
    } else if (board[0][0] === playerTwoToken && board[1][0] === playerTwoToken && board[2][0] === playerTwoToken) {
        console.log(`${playerTwoToken} wins : Left Down`)
        endGame(playerTwoToken)
        return true
    } else if (board[0][2] === playerOneToken && board[1][2] === playerOneToken && board[2][2] === playerOneToken) {
        console.log(`${playerOneToken} wins : Right Down`)
        endGame(playerOneToken)
        return true
    } else if (board[0][2] === playerTwoToken && board[1][2] === playerTwoToken && board[2][2] === playerTwoToken) {
        console.log(`${playerTwoToken} wins : Right Down`)
        endGame(playerTwoToken)
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
    while (board[index1][index2] !== null) {
        index1 = randomThreebyThree()
        index2 = randomThreebyThree()
    }
    board[index1][index2] = playerToken
    console.log(`Played on [${index1}] [${index2}]`)
    gridItem = boardMap[index1][index2]
    boardClick(gridItem, selectedBoard, playerTwoToken)
    turnPlayer = false
}
/**
 * Triggers when a user clicks and plays a token 
 * @param {string} grid The grid cordinates expresses as a string
 * @param {array} board The gameboard
 * @param {string} playerToken  The players token
 * @returns true/false (representing the players turn)
 */
function boardClick(grid, board, playerToken) {
    turn = false
    switch (grid) {
        case 'MM':
            board[1][1] = playerToken
            console.log(`played on ${grid} (switch function)`)
            mm.innerHTML = playerToken
            turnPlayer = true
            break
        case 'TL':
            board[0][0] = playerToken
            console.log(`played on ${grid} (switch function)`)
            tl.innerHTML = playerToken
            turnPlayer = true
            break
        case 'TM':
            board[0][1] = playerToken
            console.log(`played on ${grid} (switch function)`)
            tm.innerHTML = playerToken
            turnPlayer = turn
            break
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
 * 
 * @param {array} board The gameboard
 * @param {string} level Level of infomation required (info for minimal)
 */
function debug(board, level) {
    if (level !== 'info') {
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
mm.addEventListener("click", boardClick.bind(this, 'MM', selectedBoard, playerOneToken), false)
tl.addEventListener("click", boardClick.bind(this, 'TL', selectedBoard, playerOneToken), false)
tm.addEventListener("click", boardClick.bind(this, 'TM', selectedBoard, playerOneToken), false)
tr.addEventListener("click", boardClick.bind(this, 'TR', selectedBoard, playerOneToken), false)
ml.addEventListener("click", boardClick.bind(this, 'ML', selectedBoard, playerOneToken), false)
mr.addEventListener("click", boardClick.bind(this, 'MR', selectedBoard, playerOneToken), false)
bl.addEventListener("click", boardClick.bind(this, 'BL', selectedBoard, playerOneToken), false)
bm.addEventListener("click", boardClick.bind(this, 'BM', selectedBoard, playerOneToken), false)
br.addEventListener("click", boardClick.bind(this, 'BR', selectedBoard, playerOneToken), false)

// Button Event Listners 
btnWinner.addEventListener("click", findWinner.bind(this, selectedBoard), false)
btnReset.addEventListener("click", refreshBoard.bind(this, selectedBoard), false)
btnRandomMove.addEventListener("click", randomChoice.bind(this, selectedBoard, playerTwoToken), false)

// Start debug Functions
debug(selectedBoard)