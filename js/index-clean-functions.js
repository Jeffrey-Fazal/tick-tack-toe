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
/**
 * Shows who's turn it is (true = playOne)
 */
let playerOneTurn = true
/**
 * Starts the turn counter at 0
 */
let turn = 0
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
/**
 * Resets the board back to default placeholders
 */
function boardReset() {
    let resetBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
    selectedBoard = resetBoard

    mm.innerHTML = ""
    tl.innerHTML = ""
    tm.innerHTML = ""
    tr.innerHTML = ""
    ml.innerHTML = ""
    mr.innerHTML = ""
    bl.innerHTML = ""
    bm.innerHTML = ""
    br.innerHTML = ""

    playerOneDOM.innerHTML = `Player 1 Score ${scorePlayerOne}`
    playerTwoDOM.innerHTML = `Player 2 Score ${scorePlayerTwo}`
}
/**
 * 
 * @param {boolean} newGame true = resets all data | false = refreshes board
 * @param {boolean} player true = player one won | false = player two won 
*/
function resetGame(newGame, player) {

    if (newGame === true) {
        scorePlayerOne = 0
        scorePlayerTwo = 0
    } else if (newGame === false) {
        if (player === true) {
            scorePlayerOne++
        } else if (player === false) {
            scorePlayerTwo++
        }
    }
    alert(player === true ? 'Player One Won' : 'Player Two Won')
    boardReset()
}
function emptySpot () {
    if(selectedBoard[index1][index2] === null) {
        // we can play
        return true
        }else {
            prompt('This spot has already been taken')
        }
    }
/**
 * Determins who the winner is and uses the resetGame function to add to the score/clean the board
 */
function winCondition() {
    // Top row wins [0][0],[0][1],[0][2]
    if (selectedBoard[0][0] === playerOneToken && selectedBoard[0][1] === playerOneToken && selectedBoard[0][2] === playerOneToken) {
        resetGame(false, true)
    } else if (selectedBoard[0][0] === playerTwoToken && selectedBoard[0][1] === playerTwoToken && selectedBoard[0][2] === playerTwoToken) {
        resetGame(false, false)
        // Middle Row Wins [1][0],[1][1],[1][2]
    } else if (selectedBoard[1][0] === playerTwoToken && selectedBoard[1][1] === playerTwoToken && selectedBoard[1][2] === playerTwoToken) {
        resetGame(false, false)
    } else if (selectedBoard[1][0] === playerOneToken && selectedBoard[1][1] === playerOneToken && selectedBoard[1][2] === playerOneToken) {
        resetGame(false, true)
        // Bottom Row Wins [2][0],[2][1],[2][2]
    } else if (selectedBoard[2][0] === playerOneToken && selectedBoard[2][1] === playerOneToken && selectedBoard[2][2] === playerOneToken) {
        resetGame(false, true)
    } else if (selectedBoard[2][0] === playerTwoToken && selectedBoard[2][1] === playerTwoToken && selectedBoard[2][2] === playerTwoToken) {
        resetGame(false, false)
        // Left Diagonal Wins [0][0],[1][1],[2][2]
    } else if (selectedBoard[0][0] === playerOneToken && selectedBoard[1][1] === playerOneToken && selectedBoard[2][2] === playerOneToken) {
        resetGame(false, true)
    } else if (selectedBoard[0][0] === playerTwoToken && selectedBoard[1][1] === playerTwoToken && selectedBoard[2][2] === playerTwoToken) {
        resetGame(false, false)
        // Right Diagonal Wins [0][2],[1][1],[2][0]
    } else if (selectedBoard[0][2] === playerTwoToken && selectedBoard[1][1] === playerTwoToken && selectedBoard[2][0] === playerTwoToken) {
        resetGame(false, false)
    } else if (selectedBoard[0][2] === playerOneToken && selectedBoard[1][1] === playerOneToken && selectedBoard[2][0] === playerOneToken) {
        resetGame(false, true)
        // Middle Down wins [0][1],[1][1],[2][1]
    } else if (selectedBoard[0][1] === playerOneToken && selectedBoard[1][1] === playerOneToken && selectedBoard[2][1] === playerOneToken) {
        resetGame(false, true)
    } else if (selectedBoard[0][1] === playerTwoToken && selectedBoard[1][1] === playerTwoToken && selectedBoard[2][1] === playerTwoToken) {
        resetGame(false, false)
        // Left Down wins [0][0],[1][0],[2][0]
    } else if (selectedBoard[0][0] === playerOneToken && selectedBoard[1][0] === playerOneToken && selectedBoard[2][0] === playerOneToken) {
        resetGame(false, true)
    } else if (selectedBoard[0][0] === playerTwoToken && selectedBoard[1][0] === playerTwoToken && selectedBoard[2][0] === playerTwoToken) {
        resetGame(false, false)
    } else if (selectedBoard[0][2] === playerOneToken && selectedBoard[1][2] === playerOneToken && selectedBoard[2][2] === playerOneToken) {
        // Right Down wins [0][2],[1][2],[2][2]
        resetGame(false, true)
    } else if (selectedBoard[0][2] === playerTwoToken && selectedBoard[1][2] === playerTwoToken && selectedBoard[2][2] === playerTwoToken) {
        resetGame(false, false)
    }
}
/**
 * Randomly generates a number between 0-2 to be used on the board
 * @returns An number between 0-2
 */
function randomThreebyThree() {
    return Math.floor(Math.random() * (3 - 1 + 1)) + 0;
}
/**
 * Randomly generates a choice (does not play the choice yet)
 */
function randomChoice() {
    index1 = randomThreebyThree()
    index2 = randomThreebyThree()
    while (selectedBoard[index1][index2] !== null) {
        index1 = randomThreebyThree()
        index2 = randomThreebyThree()
    }
    gridItem = boardMap[index1][index2] 
    playToken(gridItem,playerTwoToken)
    turn = turn + 1
}

/**
 * Plays a given token when called
 * @param {string} grid The grid cordinates expresses as a string
 * @param {string} playerToken  The players token
 */
function playToken(grid, playerToken) {
    switch (grid) {
        case 'MM':
            selectedBoard[1][1] = playerToken
            mm.innerHTML = playerToken
            break
        case 'TL':
            selectedBoard[0][0] = playerToken
            tl.innerHTML = playerToken
        case 'TM':
            selectedBoard[0][1] = playerToken
            tm.innerHTML = playerToken
            break
        case 'TR':
            selectedBoard[0][2] = playerToken
            tr.innerHTML = playerToken
            break
        case 'ML':
            selectedBoard[1][0] = playerToken
            ml.innerHTML = playerToken
            break
        case 'MR':
            selectedBoard[1][2] = playerToken
            mr.innerHTML = playerToken
            break
        case 'BL':
            selectedBoard[2][0] = playerToken
            bl.innerHTML = playerToken
            break
        case 'BM':
            selectedBoard[2][1] = playerToken
            bm.innerHTML = playerToken
            break
        case 'BR':
            selectedBoard[2][2] = playerToken
            br.innerHTML = playerToken
            break
        default:
            console.log('Click area not defined')
            break
    }
}

// Grid Event Listners
mm.addEventListener("click", playToken.bind(this, 'MM', playerOneToken), false)
tl.addEventListener("click", playToken.bind(this, 'TL', playerOneToken), false)
tm.addEventListener("click", playToken.bind(this, 'TM', playerOneToken), false)
tr.addEventListener("click", playToken.bind(this, 'TR', playerOneToken), false)
ml.addEventListener("click", playToken.bind(this, 'ML', playerOneToken), false)
mr.addEventListener("click", playToken.bind(this, 'MR', playerOneToken), false)
bl.addEventListener("click", playToken.bind(this, 'BL', playerOneToken), false)
bm.addEventListener("click", playToken.bind(this, 'BM', playerOneToken), false)
br.addEventListener("click", playToken.bind(this, 'BR', playerOneToken), false)

// Button Event Listners 
btnWinner.addEventListener("click", winCondition)
btnReset.addEventListener("click", boardReset)
btnRandomMove.addEventListener("click", randomChoice)