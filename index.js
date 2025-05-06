const Gameboard = (function () {
  const gameboard = new Array(9)

  const getField = function (n) {
    return gameboard[n]
  }

  const setField = function (n, sign) {
    gameboard[n] = sign
  }

  return { getField, setField }
})()

const Player = function (sign) {
  this.sign = sign

  const getSign = function () {
    return sign
  }

  return { getSign }
}

const gameController = (function () {
  const player1 = Player('X')
  const player2 = Player('O')

  let currentPlayer = player1

  const makeMove = function (field) {
    Gameboard.setField(field, currentPlayer.getSign())
    currentPlayer = currentPlayer === player1 ? player2 : player1
  }

  return { makeMove }
})()

const displayController = (function () {
  const printBoard = function () {
    let row = ''
    for (let i = 0; i < 9; i++) {
      if (Gameboard.getField(i)) {
        row += Gameboard.getField(i)
      } else {
        row += ' '
      }
      if ((i + 1) % 3 === 0) {
        console.log(row)
        row = ''
      }
    }
  }

  return { printBoard }
})()
