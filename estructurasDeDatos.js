// Estructuras de datos de objeto, matriz, asignación y configuración en JavaScript

// Trabajar con matrices en JavaScript
// Métodos integrados, tres métodos específicos que existen en las matrices(forEach,filter y map)

// El método forEach() permite crear un bucle de cada uno de los miembros de la matriz

const fruits = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(fruit, index) {
  console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);

// el método forEach() acepta una función que funcionará en cada elemento de la matriz.
// El primer parámetro de esa función es el elemento de la matriz actual en sí, y el segundo
// parámetro (opcional) es el índice.

// Muy a menudo, la función que debe usar el método forEach() se pasa directamente a la
// llamada del método de la siguiente manera:
console.log();
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach(function (veggie, index) {
  console.log(`${index}. ${veggie}`);
});

// El método filter() Filtra sus matrices en función de una prueba específica. Se devuelven los
// elementos de la matriz que pasan la prueba.

const nums = [0, 10, 20, 30, 40, 50];
nums.filter(function (num) {
  return num > 20;
});

// el método filter() también acepta una función y esa función realiza un trabajo en cada uno de
// los elementos de la matriz.

// El método map() este método se usa para asignar cada elemento de la matriz a otro elemento de la
// matriz, según el trabajo que se realice dentro de la función que se pasa a la asignación como parámetro.

[0, 10, 20, 30, 40, 50].map(function (num) {
  return num / 10;
});

// Trabajar con objetos en JavaScript
// Convertir un objeto en una matriz
console.log();
const result = [];
const drone = {
  speed: 100,
  color: 'yellow',
};
const droneKeys = Object.keys(drone);
droneKeys.forEach(function (key) {
  result.push(key, drone[key]);
});
console.log(result);

// Trabajar con mapas en JavaScript

// Para crear un nuevo mapa, puede usar el constructor de mapas: new Map()
// Un mapa puede ser muy similar a un objeto en JS. Sin embargo, no tiene herencia. No tiene prototipos.
// Esto hace que sea útil para el almacenamiento de datos.
console.log();
let bestBoxers = new Map();
bestBoxers.set(1, 'The Champion');
bestBoxers.set(2, 'The Runner-up');
bestBoxers.set(3, 'The third place');

console.log(bestBoxers);

// Para obtener un valor específico, debe usar el método get(). Por ejemplo:

console.log(bestBoxers.get(1));

// Trabajar con conjuntos en JavaScript. Un conjunto es una colección de valores únicos.
// El constructor Set puede, por ejemplo, aceptar una matriz. Esto significa que podemos usarlo para
// filtrar rápidamente una matriz en busca de miembros únicos.
console.log();
const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
