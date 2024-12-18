//Notación de puntos

let user = {
  id: 1,
  name: 'Paco',
};

console.log(user);
console.log('the userName is', user.name);

user.age = 15;
console.log(user);

//Literales de objeto y la notación de corchetes

let house = {};
house['rooms'] = 3;
house['color'] = 'beige';
house['priceUSD'] = 12345;
console.log(house);
console.log('The house color is', house.color);

//Al usar la notación de corchetes, simplemente encierro la clave de cada propiedad como una cadena, dentro de comillas simples o dobles, al igual que con las cadenas normales

let car = {};
car.color = 'red';
car['color'] = 'blue';
car.speed = 200;
car['speed'] = 100;
console.log(car);
car['number of doors'] = 4;
console.log(car);
car['2022'] = 1901;
console.log(car);

//hay una cosa realmente útil que tiene la notación de corchetes, pero que no está disponible en la notación de puntos: Puede evaluar expresiones.
console.log();
let arrOfKeys = ['speed', 'altitude', 'color'];
let drone = {
  speed: 100,
  altitude: 200,
  color: 'red',
};
for (let i = 0; i < arrOfKeys.length; i++) {
  console.log(drone[arrOfKeys[i]]);
}

// Métodos de objetos
//un objeto consta de pares de clave-valor, conocidos como propiedades

let moto = {};
moto.marca = 'Pulsar';
moto.modelo = 2017;
moto.color = 'black';
moto.cilindraje = 180;
console.log(moto);

//Las propiedades pueden tomar muchos tipos de datos, incluidas funciones.

moto.giraLaLlave = function () {
  console.log('Motor encendido');
};
moto.LucesOn = function () {
  console.log('Luces encendidas');
};
console.log(moto);
moto.giraLaLlave();
moto.LucesOn();

//Si la función es una propiedad de un objeto, se la denomina método.

moto['Kilometraje'] = 98500;
console.log(moto);

// propiedades/atributos - funciones/métodos

// Más sobre objetos

const obj = {}; // Un objeto es una colección de claves valor

console.log('-----------------------------------------------');

obj.nombre = 'Copito';
obj.animal = 'perro';
obj.edad = 1;
obj.pasatiempos = ['morder', 'ladrar', 'orinar', 'defecar'];
obj.entrenado = false;
obj.raza = 'terrier';
obj.cuerpo = {
  patas: 4,
  orejas: 2,
  color: 'blanco',
};

obj.ladrar = function () {
  console.log('guau guau...');
};

console.log(obj);

// Se accede a los valores con notación de puntos o de corchetes

console.log(
  'El nombre de mi perro es',
  obj['nombre'],
  'y tiene',
  obj['edad'],
  'año'
);

console.log('Mi perro es de raza', obj.raza);
console.log(
  'Mi perro acostumbra',
  obj.pasatiempos[1],
  'cuando llaman a la puerta'
);
console.log(
  'cuando mi perro esta alegre, sube sus',
  obj.cuerpo.orejas,
  'orejas'
);
obj.ladrar();

obj.saltar = function () {
  console.log(`Se impulsa con sus ${this.cuerpo.patas} patas`);
};
// La palabra reservada this hace referencia al objeto en el cual se encuentra
obj.saltar();

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(obj.hasOwnProperty('raza'));
console.log(obj.hasOwnProperty('correr'));
