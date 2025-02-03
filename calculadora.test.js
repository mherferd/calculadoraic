const { sumar, restar, raiz, dividir, multiplicar } = require('./calculadora');

//SUMAS
test('Suma 2 + 3 y devuelve 5', () => {
    expect(sumar(2, 3)).toBe(5);
});

test('Suma 7 + 13 y devuelve 20', () => {
    expect(sumar(7, 13)).toBe(20);
});


//RESTAS
test('Resta 5 - 3 y devuelve 2', () => {
    expect(restar(5, 3)).toBe(2);
});

test('Resta 7 - 13 y devuelve -6', () => {  
    expect(restar(7, 13)).toBe(-6);
});


//MULTIPLICACION
test('Multiplica 5 * 3 y devuelve 15', () => {
    expect(multiplicar(5, 3)).toBe(15);
});


//DIVISION
test('Divide 6 / 3 y devuelve 2', () => {
    expect(dividir(6, 3)).toBe(2);
});


//RAIZ CUADRADA
test('Raiz cuadrada de 9 y devuelve 3', () => {
    expect(raiz(9)).toBe(3);
});



