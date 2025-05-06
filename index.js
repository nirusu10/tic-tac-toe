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

  const _checkRows = function () {
    return (
      (Gameboard.getField(0) &&
        Gameboard.getField(0) === Gameboard.getField(1) &&
        Gameboard.getField(1) === Gameboard.getField(2)) ||
      (Gameboard.getField(3) &&
        Gameboard.getField(3) === Gameboard.getField(4) &&
        Gameboard.getField(4) === Gameboard.getField(5)) ||
      (Gameboard.getField(6) &&
        Gameboard.getField(6) === Gameboard.getField(7) &&
        Gameboard.getField(7) === Gameboard.getField(8))
    )
  }

  const _checkCols = function () {
    return (
      (Gameboard.getField(0) &&
        Gameboard.getField(0) === Gameboard.getField(3) &&
        Gameboard.getField(3) === Gameboard.getField(6)) ||
      (Gameboard.getField(1) &&
        Gameboard.getField(1) === Gameboard.getField(4) &&
        Gameboard.getField(4) === Gameboard.getField(7)) ||
      (Gameboard.getField(2) &&
        Gameboard.getField(2) === Gameboard.getField(5) &&
        Gameboard.getField(5) === Gameboard.getField(8))
    )
  }

  const _checkDiag = function () {
    return (
      (Gameboard.getField(0) &&
        Gameboard.getField(0) === Gameboard.getField(4) &&
        Gameboard.getField(4) === Gameboard.getField(8)) ||
      (Gameboard.getField(2) &&
        Gameboard.getField(2) === Gameboard.getField(4) &&
        Gameboard.getField(4) === Gameboard.getField(6))
    )
  }

  const checkForWin = function () {
    return _checkCols() || _checkRows() || _checkDiag()
  }

  const makeMove = function (field) {
    Gameboard.setField(field, currentPlayer.getSign())
    currentPlayer = currentPlayer === player1 ? player2 : player1
    if (checkForWin()) {
      console.log('WINNER WINNER CHICKEN DINNER')
    }
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
