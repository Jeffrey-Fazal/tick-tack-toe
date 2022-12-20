/**
 * A blank gameboard to start the game
 * @type {array} a 3x3 array
 */
let newGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
  ]

/**
 * Refreshes the board and score 
 */
function refreshBoard(){
    let reset = [
        [null,null,null],
        [null,null,null],
        [null,null,null]
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
 * Finds if the win condition is met
 * @param {array} board The gameboard that will be tested
 * @returns true/false
 */
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
/**
 * Generates a random number for the index of the board
 * @returns random number between 0 -2
 */
    function randomThreebyThree() {
        return Math.floor(Math.random() * (3 - 1 + 1)) + 0;
    }
    /**
     * Chooses a random free spot to play on
     * @param {array} board gameboard
     * @param {string} playerString the token the cpu will use either x or y
     */
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
    /**
     * Checks which part of the grid has been clicked and plays a value
     * @param {sting} grid The exact position that is clicked on the gameboard
     * @param {array} board gameboard
     * @param {string} playerToken the token the cpu will use either x or y
     * @param {*} start Unused argument
     * @returns turn
     */
    function boardClick(grid,board,playerToken,start) {
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
                return turnPlayer
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
        }console.log(`boardClick Output:: turnPlayer = ` + turn)
    }
    /**
     * Starts the loop for gameplay
     * @returns nothing
     */
    function gameStart() {
        for (let i = 0 ; i < 9; i++) {
        x = findWinner(selectedBoard)
        if (x === true) {
            console.log(`Game over on loop ${i} condition ${x}`)
            return
        } if (turnPlayer === true){
            randomChoice(selectedBoard,playerTwoToken)
            console.log(`gamestart output: turnPlayer = ${turnPlayer}`)
            turnPlayer = false
        }console.log('broken out of loop')
    }
    }