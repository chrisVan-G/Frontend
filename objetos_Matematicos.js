/* Características clave de objetos matemáticos

Objeto Math

Constantes numéricas
Estas son algunas de las constantes numéricas integradas que existen en el objeto Math: 

El número PI: Math.PI 

La constante de Euler: Math.E 

El logaritmo natural de 2: Math.LN2

Métodos de redondeo
Estos incluyen: 

 Math.ceil(): redondea hacia arriba al entero más cercano 

 Math.floor(): redondea hacia abajo al entero más cercano 

 Math.round(): redondea hacia arriba al entero más cercano si el decimal es 0,5 o superior; de lo contrario, redondea hacia abajo al entero más cercano 

 Math.trunc(): recorta el decimal y deja solo el entero

Métodos aritméticos y de cálculo
Aquí hay una lista no exhaustiva de algunos métodos aritméticos y de cálculo comunes que existen en el objeto Math: 

Math.pow(2,3): calcula el número 2a la potencia de 3, el resultado es 8 

Math.sqrt(16): calcula la raíz cuadrada de 16, el resultado es 4 

Math.cbrt(8): encuentra la raíz cúbica de 8, el resultado es 2 

Math.abs(-10): devuelve el valor absoluto, el resultado es 10 

Métodos logarítmicos: Math.log(), Math.log2(), Math.log10() 

Devuelve los valores mínimo y máximo de todas las entradas: Math.min(9,8,7) devuelve 7, Math.max(9,8,7) devuelve 9.

 Métodos trigonométricos: Math.sin(), Math.cos(), Math.tan(), etc.

*/
console.log('Math random');

Math.random();
let decimal = Math.random();
console.log('Decimal aleatorio =>', decimal);
console.log('Decimal aleatorio de 1-10 =>', decimal * 10);
console.log('Decimal aleatorio de 1-100 =>', decimal * 100);
console.log('Entero aleatorio de 1-10 =>', Math.round(decimal * 10));
console.log('Entero aleatorio de 1-100 =>', Math.round(decimal * 100));

console.log();
console.log('Math Ceil');

Math.ceil();
let rounded = Math.ceil(0.0001);
console.log(rounded);
let rounded_2 = Math.ceil(0.5);
console.log(rounded_2);
let rounded_3 = Math.ceil(0.99);
console.log(rounded_3);
let rounded_4 = Math.ceil(1.01);
console.log(rounded_4);
let rounded_5 = Math.ceil(1.5);
console.log(rounded_5);
let rounded_6 = Math.ceil(2.99);
console.log(rounded_6);

// Otra forma de hacerlo
console.log('Aplicación de random y ceil');
let decimal_2 = Math.random() * 10;
let rounded_7 = Math.ceil(decimal_2);
console.log(rounded_7);
