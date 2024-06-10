// Las matrices son objetos

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Posición cero de la matriz', numeros[0]);
console.log('Longitud de la matriz', numeros.length);

// los métodos incorporados más utilizados en las matrices son los métodos push() y pop()

// Para agregar nuevos elementos a una matriz, puedo usar el método push():

numeros.push(11);
numeros.push(11, 12, 13, 14, 15, 16, 17);
console.log(numeros);

//Para eliminar el último elemento de una matriz, puedo usar el método pop():

numeros.pop();
console.log(numeros);
