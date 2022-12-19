// CPU = x | Player = o
// TODO: User input, who starts first?
// Random Choice
// Difficult / Human vs Human

// Gameboard set to start
let gameBoard = [
    ['x',null,'x'],
    ['o','o','o'],
    [null,'o',null]
  ]

// Gameboard set to start
let gameBoard1 = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
  ]

let steps = ['1','2','3','4','5','6','7','8','9']

const playerTurn = true

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
        if (board[index1][index2] === null){
        board[index1][index2] = playerString
        console.log(`Assign ${playerString}: [${index1}] [${index2}]`)
    }
        else if (board[index1][index2] !== null){
        index1 = randomThreebyThree()
        index2 = randomThreebyThree()
        console.log(`Around we go again [${index1}] [${index2}]`)}
        
        }
        // board[index1][index2] = playerString
        // console.log(`Assigned ${playerString}: [${index1}] [${index2}]`)
    }

function randomMove(board,playerString) {
    index1 = randomThreebyThree()
    index2 = randomThreebyThree()
    if (board[index1][index2] === null){
        board[index1][index2] = playerString
        console.log(`${playerString} played on [${index1}] [${index2}]`)
    } else {console.log('grid has already been played')}
}

function boardClick(grid,board,playerToken) {
    msg = `${grid} clicked`
    console.log(msg)
    alert(msg)
    let move = grid
    switch (move) {
        case 'MM':
            board[1][1] = playerToken
            console.log(`played on ${grid} (switch function)`)
            debug(gameBoard1, 'basic')
            break
        case 'TL':
            board[0][0] = playerToken
            console.log(`played on ${grid} (switch function)`)
            debug(gameBoard1, 'basic')
            break
        case 'TM':
            board[0][1] = playerToken
            console.log(`played on ${grid} (switch function)`)
            debug(gameBoard1, 'basic')
            break
        case 'TR':
            board[0][2] = playerToken
            console.log(`played on ${grid} (switch function)`)
            debug(gameBoard1, 'basic')
            break
        case 'ML':
            board[1][0] = playerToken
            console.log(`played on ${grid} (switch function)`)
            debug(gameBoard1, 'basic')
            break
        case 'MR':
            board[1][2] = playerToken
            console.log(`played on ${grid} (switch function)`)
            debug(gameBoard1, 'basic')
            break
        case 'BL':
            board[2][0] = playerToken
            console.log(`played on ${grid} (switch function)`)
            debug(gameBoard1, 'basic')
            break
        case 'BM':
            board[2][1] = playerToken
            console.log(`played on ${grid} (switch function)`)
            debug(gameBoard1, 'basic')
            break
        case 'BR':
            board[2][2] = playerToken
            console.log(`played on ${grid} (switch function)`)
            debug(gameBoard1, 'basic')
            break
        default:
            console.log('Click area not defined')
    }
}

// DEBUG: Output's value of gameBoard
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

// debug(gameBoard1,'basic')
// randomMove(gameBoard1,'x')
// randomMove(gameBoard1,'x')
// randomMove(gameBoard1,'y')
// randomMove(gameBoard1,'x')
debug(gameBoard1,'basic')

// Event Listners
let mm = document.querySelector("#MM")
mm.addEventListener("click",boardClick.bind(this,'MM',gameBoard1,'x'),false)

let tl = document.querySelector("#TL")
tl.addEventListener("click",boardClick.bind(this,'TL',gameBoard1,'x'),false)

let tm = document.querySelector("#TM")
tm.addEventListener("click",boardClick.bind(this,'TM',gameBoard1,'x'),false)

let tr = document.querySelector("#TR")
tr.addEventListener("click",boardClick.bind(this,'TR',gameBoard1,'x'),false)

let ml = document.querySelector("#ML")
ml.addEventListener("click",boardClick.bind(this,'ML',gameBoard1,'x'),false)

let mr = document.querySelector("#MR")
mr.addEventListener("click",boardClick.bind(this,'MR',gameBoard1,'x'),false)

let bl = document.querySelector("#BL")
bl.addEventListener("click",boardClick.bind(this,'BL',gameBoard1,'x'),false)

let bm = document.querySelector("#BM")
bm.addEventListener("click",boardClick.bind(this,'BM',gameBoard1,'x'),false)

let br = document.querySelector("#BR")
br.addEventListener("click",boardClick.bind(this,'BR',gameBoard1,'x'),false)