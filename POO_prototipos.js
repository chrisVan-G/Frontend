// POO

/*
Clases - modelo a seguir
Objetos - es una instancia de una clase
 - Atributos - es una carácteristica o propiedad del objeto(son variables dentro de un objeto)
 - Métodos - son las acciones que un elemento puede realizar(son funciones dentro de un objeto) 
*/

// Función constructora

function Animal(nombre, genero) {
  this.nombre = nombre;
  this.genero = genero;
}

Animal.prototype.sonar = function () {
  console.log('Este es mi sonido carácteristico');
};

// Herencia prototipica

function Perro(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

// Perro está heredando de Animal

Perro.prototype = new Animal();
Perro.prototype.constuctor = Perro;

// Sobreescritura de métodos del prototipo padre en el hijo

Perro.prototype.sonar = function () {
  console.log('Soy un perro y mi sonido es un ladrido');
};
Perro.prototype.ladrar = function () {
  console.log('Guau Guau Guau!!');
};

const perro = new Perro('Copito', 'macho', 'Pequenio');
const perro_2 = new Perro('Sidney', 'hembra', 'grande');

console.log(perro);
console.log(perro_2);

perro.sonar();
