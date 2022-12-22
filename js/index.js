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
const boardMaxValueus = 3

let selectedBoard = newGameBoard

let scorePlayerOne = 0
let scorePlayerTwo = 0

let playerOneToken = '<img class="player-icons" src="./images/check-mark.png" alt="playerOneIcon">'
let playerTwoToken = '<img class="player-icons" src="./images/cancel.png" alt="playerTwoIcon"></img>'

let playerOneTurn = true
let playerToken = playerOneToken
let turn = 0

let human = true

const delay = ms => new Promise(res => setTimeout(res, ms));

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

const click = new Audio('audio/click.mp3')
const laugh = new Audio('audio/loose.mp3')
const fanFare = new Audio('audio/win.mp3')

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

async function resetGame(newGame, playerOnevictor) {
    if (newGame === true) {
        scorePlayerOne = 0
        scorePlayerTwo = 0
    } else if (newGame === false) {
        if (playerOnevictor === true) {
            scorePlayerOne++
            fanFare.play()
            await delay(499)
            alert('Player One Won')
        } else if (playerOnevictor === false) {
            scorePlayerTwo++
            laugh.play()
            await delay(499)
            alert('Player Two Won')
        }
    }
    boardReset()
}
function emptySpot(gridItem) {
    // function returns true/false based on if the grid is empty.
    for (let i = 0; i < boardMap.length; i++) {
        let index = boardMap[i].indexOf(gridItem);
        if (index > -1) {
            let index1 = i
            let index2 = index
            if (selectedBoard[index1][index2] !== null) {
                alert('That spot has been taken, try another move.')
                return turn
            } return false
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
    } // Player manually restarts game for draw?
    click.play()
}
function randomThreebyThree() {
    return Math.floor(Math.random() * (3 - 1 + 1)) + 0;
}
function randomChoice(person) {
    if (person === false) {
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
        winCondition()
    } else if (person === true) {
        // Skips CPU turn
    } else {prompt('There is a problem in random choice')}
}

function playToken(grid) {
    // two variables to work with: playeroneturn = true is player ones turn
    // human = false (cpu is playing)
    if (playerOneTurn === true){
        playerToken = playerOneToken
        }else if (playerOneTurn === false){
        playerToken = playerTwoToken
        }playerOneTurn = !playerOneTurn
        console.log('playerone turn changed to: ' + playerOneTurn)
        switch (grid) {
    
            case 'MM':
                rtnSpot = emptySpot(grid)
                if (rtnSpot === false){
                selectedBoard[1][1] = playerToken
                mm.innerHTML = playerToken}
                winCondition()
                randomChoice(human)
                break
            case 'TL':
                rtnSpot = emptySpot(grid)
                if (rtnSpot === false){
                selectedBoard[0][0] = playerToken
                tl.innerHTML = playerToken}
                winCondition()
                randomChoice(human)
                break
            case 'TM':
                rtnSpot = emptySpot(grid)
                if (rtnSpot === false){
                tm.innerHTML = playerToken}
                winCondition()
                randomChoice(human)
                break
            case 'TR':
                rtnSpot = emptySpot(grid)
                if (rtnSpot === false){
                selectedBoard[0][2] = playerToken
                tr.innerHTML = playerToken}
                winCondition()
                randomChoice(human)
                break
            case 'ML':
                rtnSpot = emptySpot(grid)
                if (rtnSpot === false){
                selectedBoard[1][0] = playerToken
                ml.innerHTML = playerToken}
                winCondition()
                randomChoice(human)
                break
            case 'MR':
                rtnSpot = emptySpot(grid)
                if (rtnSpot === false){
                selectedBoard[1][2] = playerToken
                mr.innerHTML = playerToken}
                winCondition()
                randomChoice(human)
                break
            case 'BL':
                rtnSpot = emptySpot(grid)
                if (rtnSpot === false){
                selectedBoard[2][0] = playerToken}
                bl.innerHTML = playerToken
                winCondition()
                randomChoice(human)
                break
            case 'BM':
                rtnSpot = emptySpot(grid)
                if (rtnSpot === false){
                selectedBoard[2][1] = playerToken
                bm.innerHTML = playerToken}
                winCondition()
                randomChoice(human)
                break
            case 'BR':
                rtnSpot = emptySpot(grid)
                if (rtnSpot === false){
                selectedBoard[2][2] = playerToken
                br.innerHTML = playerToken}
                winCondition()
                randomChoice(human)
                break
            default:
                prompt('Please report error: 101 (no grid) to the Github issue page')
                break
        }
    }

    // Grid Event Listners



tl.addEventListener("click", playToken.bind(this, 'TL', playerToken), false)
tm.addEventListener("click", playToken.bind(this, 'TM', playerToken), false)
tr.addEventListener("click", playToken.bind(this, 'TR', playerToken), false)
ml.addEventListener("click", playToken.bind(this, 'ML', playerToken), false)
mm.addEventListener("click", playToken.bind(this, 'MM', playerToken), false)
mr.addEventListener("click", playToken.bind(this, 'MR', playerToken), false)
bl.addEventListener("click", playToken.bind(this, 'BL', playerToken), false)
bm.addEventListener("click", playToken.bind(this, 'BM', playerToken), false)
br.addEventListener("click", playToken.bind(this, 'BR', playerToken), false)

// Button Event Listners 
btnReset.addEventListener("click", function () {location.reload()})

// Event Listner for toggle
document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('#define-human');

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            human = false;
            scorePlayerOne = 0
            scorePlayerTwo = 0
            boardReset()
        } else {
            human = true
            scorePlayerOne = 0
            scorePlayerTwo = 0
            boardReset()
        }
    });
});