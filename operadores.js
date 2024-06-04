// Manejo de operadores

console.log('Resultado operdores aritméticos y de comparación');

let a = 12;
let b = 33;
let c = 16;

console.log();
console.log(a + b + c);
console.log(a + b + c + 21 + 100);
console.log(b - a);
console.log(a * c);
console.log(b / a);
console.log(a > c);
console.log(c < b);
console.log(a == c); //El operador de igualdad: ==
console.log(10 ** 2); //Potencias
console.log(9 % 8); //El operador de módulo: %
console.log();

console.log('Resultado operdores lógicos');
console.log();
//Operador lógico NOT: !
console.log(!true);
console.log(a == c || c - 4 == a); //Operador lógico OR: ||
console.log(b != c); //El operador de desigualdad: !=
console.log(a && b == c); //Operador lógico AND: &&

// Operador de igualdad estricta (===)

console.log(100 == '100');
console.log(100 === '100'); //Compara el valor y tipo de dato

// Operador de desigualdad estricta (!==)
console.log(1 !== '1');

//El operador de asignación de suma: +=

let i = 16;
i += 5;
console.log(i);

//El operador de asignación de concatenación: += (es el mismo que el anterior. Abordaremos más profundamente esto más adelante)

//Concatenacion
console.log('Inter' + 'net');
