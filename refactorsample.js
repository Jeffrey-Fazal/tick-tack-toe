/**'))
 * Find out if a player or CPU has won (token is hardcoded)
 * @param {array} board The gameboard
 * @returns true (represents it's now players turn)
 */
 function findWinner(board) {
    if (board[0][0] === playerOneToken && board[0][1] === playerOneToken && board[0][2] === playerOneToken) {
        console.log(`${playerOneToken} : Top Row`)
        return true
    } else if (board[0][0] === playerTwoToken && board[0][1] === playerTwoToken && board[0][2] === playerTwoToken) {
        console.log(`${playerTwoToken} wins : Top Row`)
        return true
    } else if (board[1][0] === playerTwoToken && board[1][1] === playerTwoToken && board[1][2] === playerTwoToken) {
        console.log(`${playerTwoToken} wins : Middle Row`)
        return true
    } else if (board[1][0] === playerOneToken && board[1][1] === playerOneToken && board[1][2] === playerOneToken) {
        console.log(`${playerOneToken} : Middle Row`)
        return true
    } else if (board[2][0] === playerOneToken && board[2][1] === playerOneToken && board[2][2] === playerOneToken) {
        console.log(`${playerOneToken}  : Bottom Row`)
        return true
    } else if (board[2][0] === playerTwoToken && board[2][1] === playerTwoToken && board[2][2] === playerTwoToken) {
        console.log(`${playerTwoToken} wins : Bottom Row`)
        return true
    } else if (board[0][0] === playerOneToken && board[1][1] === playerOneToken && board[2][2] === playerOneToken) {
        console.log(`${playerOneToken}  : Left Diagonal`)
        return true
    } else if (board[0][0] === playerTwoToken && board[1][1] === playerTwoToken && board[2][2] === playerTwoToken) {
        console.log(`${playerTwoToken} wins  : Left Diagonal`)
        return true
    } else if (board[0][2] === playerTwoToken && board[1][1] === playerTwoToken && board[2][0] === playerTwoToken) {
        console.log(`${playerTwoToken} wins : Right Diagonal`)
        return true
    } else if (board[0][2] === playerOneToken && board[1][1] === playerOneToken && board[2][0] === playerOneToken) {
        console.log(`${playerOneToken} : Right Diagonal`)
        return true
    } else if (board[0][1] === playerOneToken && board[1][1] === playerOneToken && board[2][1] === playerOneToken) {
        console.log(`${playerOneToken} : Middle Down`)
        return true
    } else if (board[0][1] === playerTwoToken && board[1][1] === playerTwoToken && board[2][1] === playerTwoToken) {
        console.log(`${playerTwoToken} wins : Middle Down`)
        return true
    } else if (board[0][0] === playerOneToken && board[1][0] === playerOneToken && board[2][0] === playerOneToken) {
        console.log(`${playerOneToken} : Left Down`)
        return true
    } else if (board[0][0] === playerTwoToken && board[1][0] === playerTwoToken && board[2][0] === playerTwoToken) {
        console.log(`${playerTwoToken} wins : Left Down`)
        return true
    } else if (board[0][2] === playerOneToken && board[1][2] === playerOneToken && board[2][2] === playerOneToken) {
        console.log(`${playerOneToken} : Right Down`)
        return true
    } else if (board[0][2] === playerTwoToken && board[1][2] === playerTwoToken && board[2][2] === playerTwoToken) {
        console.log(`${playerTwoToken} wins : Right Down`)
        return true
    } else { console.log('Draw/Continue') }
    return false
}
