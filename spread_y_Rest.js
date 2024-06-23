// Uso de Spread y Rest

// Unir matrices y objetos usando el operador rest. Mediante el uso del operador spread,
// es fácil concatenar matrices:

const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];
const fruitsAndBerries = [...fruits, ...berries];
console.log(fruitsAndBerries);

// También es fácil unir objetos:

const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = { ...flying, ...car };
console.log(flyingCar);

//Agregue nuevos miembros a las matrices sin usar el método push()
// spread para agregar fácilmente uno o más miembros a una matriz existente:

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

// Convierta una cadena en una matriz usando el operador spread
// Dada una cadena, es fácil distribuirla en elementos de matriz separados:

const greeting = 'Hello';
const arrayOfChars = [...greeting];
console.log(arrayOfChars);

// Copiar un objeto o una matriz en uno separado
// copiar un objeto en un objeto completamente por separado utilizando el operador de spread

const car1 = {
  speed: 200,
  color: 'yellow',
};
const car2 = { ...car1 };
car1.speed = 201;
console.log(car1, car2);
console.log(car1.speed, car2.speed);
car2.color = 'orange';
console.log(car1, car2);

// Puede copiar una matriz en una matriz completamente separada utilizando también el operador de
// spread, como este:

const fruits3 = ['apples', 'pears'];
const fruits4 = [...fruits3];
fruits3.pop();
console.log(fruits3, 'not', fruits4);
