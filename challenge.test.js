const { test, expect } = require('@jest/globals');
const isSolved = require('./challenge').isSolved;

describe('Gana el X', () => {
    test('X gano horizontalmente', () => {
        expect(isSolved([[1,1,1],
                         [2,1,2],
                         [1,2,2]])).toBe(1);
    });
    test('X gano verticalmente', () => {
        expect(isSolved([[2,1,1],
                         [1,1,2],
                         [2,1,2]])).toBe(1);
    });
    test('X gano diagonalmente de derecha a izquierda', () => {
        expect(isSolved([[2,2,1],
                         [2,1,2],
                         [1,1,2]])).toBe(1);
    });
    test('X gano diagonalmente de izquierda a derecha', () => {
        expect(isSolved([[1,2,2],
                         [2,1,2],
                         [2,1,1]])).toBe(1);
    });
    test('X gano aunque falten completar casilleros', () => {
        expect(isSolved([[0,0,1],
                         [2,1,0],
                         [1,2,0]])).toBe(1);
    });
})

describe('Gana el O', () => {
    test('O gano horizontalmente', () => {
        expect(isSolved([[1,1,1],
                         [2,2,2],
                         [1,1,2]])).toBe(2);
    });
    test('O gano verticalmente', () => {
        expect(isSolved([[1,2,2],
                         [1,1,2],
                         [2,1,2]])).toBe(2);
    });
    test('O gano diagonalmente de derecha a izquierda', () => {
        expect(isSolved([[1,1,2],
                         [1,2,2],
                         [2,1,1]])).toBe(2);
    });
    test('O gano diagonalmente de izquierda a derecha', () => {
        expect(isSolved([[2,1,1],
                         [1,2,1],
                         [1,2,2]])).toBe(2);
    });
    test('O gano aunque falten completar casilleros', () => {
        expect(isSolved([[0,0,2],
                         [1,2,0],
                         [2,1,0]])).toBe(2);
    });
})

describe('No gana nadie', () => {
    test('no hay casilleros libres y no gano nadie', () => {
        expect(isSolved([[1,2,1],
                         [2,1,2],
                         [2,1,2]])).toBe(0);
    });
    test('faltan completar casilleros y no gano nadie', () => {
        expect(isSolved([[0,0,1],
                         [0,1,2],
                         [2,1,0]])).toBe(-1);
    });
})