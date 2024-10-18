// Las matrices(arreglos) son objetos. Un arreglo es una colección de elementos

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Posición cero de la matriz', numeros[0]);
console.log('Longitud de la matriz', numeros.length);

// los métodos incorporados más utilizados en las matrices son los métodos push() y pop()

// Para agregar nuevos elementos a una matriz, puedo usar el método push():

numeros.push(11);
console.log(numeros);
numeros.push(12, 13, 14, 15, 16, 17);
console.log(numeros);

//Para eliminar el último elemento de una matriz, puedo usar el método pop():

numeros.pop();
console.log(numeros);

// Más sobre arreglos, puedo tener un arreglo como elemento de otro arreglo

const x = ['alfa', 1, true, ['A', 'E', 'I', 'O', 'U', [10, 20, 30]]];

console.log(x);
console.log('Longitud del arreglo x =', x.length);
console.log('Elemento de la posición 1 arreglo x =', x[1]);
console.log('Elemento de la posición 3 arreglo x =', x[3]);
console.log('Arreglo x posición 3 arregloAnidado posición 2 =', x[3][2]);
console.log(
  'Arreglo x posición 3 arregloaAnidado(1) posición 5 arregloAnidado(2) posición 2 =',
  x[3][5][2]
);

// Formas de llenar elementos en un arreglo

const y = Array.of('c', 'd', 'b', 'a', 15, 17, 19);
console.log(y);

const z = Array(30).fill(false);
console.log(z);

// Ejecutar una función por cada elemento del arreglo
console.log();
const colores = ['Rojo', 'Verde', 'Azul'];
colores.forEach(function (i, index) {
  console.log(`<li id="${index}">${i}</li>`);
});
