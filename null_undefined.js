// null, undefined, NaN

let vocal;
console.log('Esto es un valor sin definir =>', vocal);
// undefined indica que no se ha inicializado una variable y que el valor está ausente

let letra = '';
console.log('Esto es una cadena vacia =>', letra);

let vocales = 'aeiou';
console.log(vocales.match(/a/));
console.log('Esto es un valor nulo =>', vocales.match(/d/));
// null es un valor especial que indica la ausencia de un valor

// NaN - Not a Number
let noEsUnNumero = 'hola' * 3.7;
console.log('La operación no se puede ejecutar, resultado: ', noEsUnNumero);
