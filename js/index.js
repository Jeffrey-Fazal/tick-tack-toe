let newGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
let boardMap = [
    ['TL', 'TM', 'TR'],
    ['ML', 'MM', 'MR'],
    ['BL', 'BM', 'BR']
]
let selectedBoard = newGameBoard

let scorePlayerOne = 0
let scorePlayerTwo = 0

let playerOneToken = 'x'
let playerTwoToken = 'o'

let playerOneTurn = true
let turn = 0

// Define gameBoard grid
const tl = document.querySelector("#TL")
const tm = document.querySelector("#TM")
const tr = document.querySelector("#TR")
const ml = document.querySelector("#ML")
const mm = document.querySelector("#MM")
const mr = document.querySelector("#MR")
const bl = document.querySelector("#BL")
const bm = document.querySelector("#BM")
const br = document.querySelector("#BR")
// Define buttons
const btnWinner = document.querySelector('#find-winnner')
const btnReset = document.querySelector('#reset-board')
// const btnRandomMove = document.querySelector('#random-move')
// Define objects for output
let win = document.querySelector("#game-status")
let domTurn = document.querySelector("#game-status")
let playerOneDOM = document.querySelector("#player-one-score")
let playerTwoDOM = document.querySelector("#player-two-score")

const click = new Audio('audio/click.mp3');

function turnCounter() {
    turn = turn + 1
    click.play()
    winCondition()
    playerOneTurn = !playerOneTurn
    console.log('Player One:' + playerOneTurn)
}

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
    playerOneDOM.innerHTML = scorePlayerOne
    playerTwoDOM.innerHTML = scorePlayerTwo
}

function resetGame(newGame, playerOnevictor) {
    if (newGame === true) {
        scorePlayerOne = 0
        scorePlayerTwo = 0
    } else if (newGame === false) {
        if (playerOnevictor === true) {
            scorePlayerOne++
        } else if (playerOnevictor === false) {
            scorePlayerTwo++
        }
    }
    alert(playerOnevictor === true ? 'Player One Won' : 'Player Two Won')
    boardReset()
}

function emptySpot(gridItem) {
    for (let i = 0; i < boardMap.length; i++) {
        let index = boardMap[i].indexOf(gridItem);
        if (index > -1) {
            let index1 = i
            let index2 = index
            if (selectedBoard[index1][index2] !== null) {
                alert('That spot has been taken, try another move.')
            }
        }
    }
}

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
function randomThreebyThree() {
    return Math.floor(Math.random() * (3 - 1 + 1)) + 0;
}
function randomChoice() {
    index1 = randomThreebyThree()
    index2 = randomThreebyThree()
    while (selectedBoard[index1][index2] !== null) {
        index1 = randomThreebyThree()
        index2 = randomThreebyThree()
    }
    selectedBoard[index1][index2] = playerTwoToken

    gridItem = boardMap[index1][index2]
    stringGridLocation = gridItem.toLowerCase()
    playGrid = eval(stringGridLocation)
    playGrid.innerHTML = playerTwoToken
    turnCounter()
}
function playToken(grid, playerToken) {
    switch (grid) {
        case 'MM':
            emptySpot(grid)
            selectedBoard[1][1] = playerToken
            mm.innerHTML = playerToken
            turnCounter()
            randomChoice()
            break
        case 'TL':
            emptySpot(grid)
            selectedBoard[0][0] = playerToken
            tl.innerHTML = playerToken
            turnCounter()
            randomChoice()
            break
        case 'TM':
            emptySpot(grid)
            selectedBoard[0][1] = playerToken
            tm.innerHTML = playerToken
            turnCounter()
            randomChoice()
            break
        case 'TR':
            emptySpot(grid)
            selectedBoard[0][2] = playerToken
            tr.innerHTML = playerToken
            turnCounter()
            randomChoice()
            break
        case 'ML':
            emptySpot(grid)
            selectedBoard[1][0] = playerToken
            ml.innerHTML = playerToken
            turnCounter()
            randomChoice()
            break
        case 'MR':
            emptySpot(grid)
            selectedBoard[1][2] = playerToken
            mr.innerHTML = playerToken
            turnCounter()
            randomChoice()
            break
        case 'BL':
            emptySpot(grid)
            selectedBoard[2][0] = playerToken
            bl.innerHTML = playerToken
            turnCounter()
            randomChoice()
            break
        case 'BM':
            emptySpot(grid)
            selectedBoard[2][1] = playerToken
            bm.innerHTML = playerToken
            turnCounter()
            randomChoice()
            break
        case 'BR':
            emptySpot(grid)
            selectedBoard[2][2] = playerToken
            br.innerHTML = playerToken
            turnCounter()
            randomChoice()
            break
        default:
            prompt('Please report error: 101 - no grid to the Github issue page')
            break
    }
}

// Grid Event Listners

tl.addEventListener("click", emptySpot.bind(this, 'TL'), false)
tm.addEventListener("click", emptySpot.bind(this, 'TM'), false)
tr.addEventListener("click", emptySpot.bind(this, 'TR'), false)
ml.addEventListener("click", emptySpot.bind(this, 'ML'), false)
mm.addEventListener("click", emptySpot.bind(this, 'MM'), false)
mr.addEventListener("click", emptySpot.bind(this, 'MR'), false)
bl.addEventListener("click", emptySpot.bind(this, 'BL'), false)
bm.addEventListener("click", emptySpot.bind(this, 'BM'), false)
br.addEventListener("click", emptySpot.bind(this, 'BR'), false)

tl.addEventListener("click", playToken.bind(this, 'TL', playerOneToken), false)
tm.addEventListener("click", playToken.bind(this, 'TM', playerOneToken), false)
tr.addEventListener("click", playToken.bind(this, 'TR', playerOneToken), false)
ml.addEventListener("click", playToken.bind(this, 'ML', playerOneToken), false)
mm.addEventListener("click", playToken.bind(this, 'MM', playerOneToken), false)
mr.addEventListener("click", playToken.bind(this, 'MR', playerOneToken), false)
bl.addEventListener("click", playToken.bind(this, 'BL', playerOneToken), false)
bm.addEventListener("click", playToken.bind(this, 'BM', playerOneToken), false)
br.addEventListener("click", playToken.bind(this, 'BR', playerOneToken), false)

// Button Event Listners 
btnReset.addEventListener("click", boardReset)