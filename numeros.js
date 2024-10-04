let a = 2;
let b = new Number(1);
let c = 7.19;
let d = '5.6';

console.log(a, b);
console.log('Redondea y deja solo un decimal', c.toFixed(1));
console.log('Cinco decimales', c.toFixed(5));
console.log('Deja solo la parte entera', parseInt(c));
console.log('Muestra el entero y el flotante', parseFloat(c));
console.log('Tipos de datos', typeof c, typeof d);
console.log('Suma de a + b =', a + b);
console.log('Concatenación', c + d);
console.log('Suma incompleta', c + parseInt(d)); //Esta suma no utilizó todos los numeros decimals que acompañan los enteros
console.log('Refundición o casting - Suma completa', c + parseFloat(d));

console.log('La comparación da como resultado =>', Number('123') === 123);
let e = Number('123');
console.log('Suma de a + e =', a + e);
