/**
 * @author André Malpica <andremalpica@ieee.org>
 
 * @description Verifica si se terminó una partida de Tic-tac-toe verificando el estado del tablero

 * Se convierte el array en un string para poder hacer uso de las expresiones regulares.

 * El formato una vez parseado es: 122-121-112.

 * Luego se comprueba si matchea con los distintos tipos de victoria que existen en el tic-tac-toe: 
    - 111 o 222 si ganó horizontalmente
    - 1...1...1 o 2...2...2 si ganó verticalmente (los puntos son chars que no interesan incluido el '-')
    - 1..1..1 o 2..2..2 si ganó diagonalmente de derecha a izquierda (empezando desde arriba)
    - 1....1....1 o 2....2....2 si ganó diagonalmente de izquierda a derecha (empezando desde arriba)

 * @param  board {Array} Viene como un array 3x3: 0 si el casillero esta vacio, 1 si contiene una X y 2 si contiene un O

 * @return  {Number} Retorna un numero que depende de las siguientes condiciones:
        - -1 si el tablero todavía tiene casilleros vacios y no ganó nadie 
        - 1 si "X" ganó
        - 2 si "O" ganó
        - 0 si no se cumplieron las otras condiciones (ej. hubo empate) 

 */
function isSolved(board) {
    let boardSt = board.join('-').replace(/,/g,'');
    
    if(/222|2..2..2|2...2...2|2....2....2/.test(boardSt)) {
        return 2;
    }
    else if(/111|1..1..1|1...1...1|1....1....1/.test(boardSt)) {
        return 1;
    } 
    else if(/0/.test(boardSt)) {
        return -1;
    }
    else return 0;
}

module.exports.isSolved = isSolved;