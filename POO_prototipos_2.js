// Función constructora
function Animal(nombre, tamanio) {
  this.nombre = nombre;
  this.tamanio = tamanio;
}

Animal.prototype.sonido = function () {
  console.log('Este es mi sonido característico');
};

// Herencia prototipica

function Aves(nombre, tamanio) {
  this.super = Animal;
  this.super(nombre, tamanio);
}

Aves.prototype = new Animal();
Aves.prototype.constructor = Aves;

Aves.prototype.puedeNadar = function (puedeNadar) {
  this.puedeNadar = puedeNadar;
  if (puedeNadar === false) {
    console.log(`El ${this.nombre} no puede nadar`);
  } else if (puedeNadar === true) {
    console.log(`El ${this.nombre} puede nadar`);
  }
};

Aves.prototype.puedeVolar = function (puedeVolar) {
  this.puedeVolar = puedeVolar;
  if (puedeVolar === false) {
    console.log(`El ${this.nombre} tiene alas pero no puede volar`);
  } else if (puedeVolar === true) {
    console.log(`El ${this.nombre} puede volar`);
  }
};

function Paseriformes(nombre, tamanio) {
  this.super = Aves;
  this.super(nombre, tamanio);
}

Paseriformes.prototype = new Aves();
Paseriformes.prototype.constructor = Paseriformes;

Paseriformes.prototype.sonido = function () {
  console.log(
    `El ${this.nombre} canta y posee habilidades vocales bastante notables`
  );
};

function Sphenisciformes(nombre, tamanio) {
  this.super = Aves;
  this.super(nombre, tamanio);
}

Sphenisciformes.prototype = new Aves();
Sphenisciformes.prototype.constructor = Sphenisciformes;

Sphenisciformes.prototype.sonido = function () {
  console.log(
    `El ${this.nombre} hace sonidos que varían desde silbidos y graznidos hasta chillidos y aleteos rítmicos`
  );
};

// Instanciado del Gorrion

const gorrionComun = new Paseriformes('Gorrión Común', 'Pequenio');

console.log(gorrionComun);
gorrionComun.puedeNadar(false);
gorrionComun.puedeVolar(true);
gorrionComun.sonido();

// Instanciado del Jilguero

const jilguero = new Paseriformes('Jilguero', 'Pequenio');

console.log(jilguero);
jilguero.puedeNadar(false);
jilguero.puedeVolar(true);
jilguero.sonido();

// Instanciado del Pinguino

const pinguino = new Sphenisciformes('Pinguino', 'mediano');

console.log(pinguino);
pinguino.puedeNadar(true);
pinguino.puedeVolar(false);
pinguino.sonido();
