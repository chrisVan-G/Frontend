var divisaUno = 100;
var divisaDos = 0;
var tasaCambio = 1.2;

function convertirDivisa(cantidad, tasa) {
  return cantidad * tasa;
}

divisaDos = convertirDivisa(divisaUno, tasaCambio);
console.log(divisaDos);

// El paradigma de la programación funcional(FP)

// Existen varios estilos de codificación, también conocidos como paradigmas

// En la programación funcional, usamos muchas funciones y variables.

function getTotal(a, b) {
  return a + b;
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);
console.log(total);

// Cuando escribimos un código FP, mantenemos los datos y la funcionalidad por separado y pasamos los datos a las funciones solo cuando queremos que algo se calcule.

function getDistance(mph, h) {
  return mph * h;
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

// En la programación funcional, las funciones devuelven nuevos valores y luego usan esos valores en otra parte del código.
function getDistance(mph, h) {
  return mph * h;
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <====== THIS HERE!

// Otro estilo es la programación orientada a objetos (OOP). En este estilo, agrupamos los datos y la funcionalidad como propiedades y métodos dentro de los objetos.
//Por ejemplo, si tengo un objeto virtualPet, puedo darle una propiedad sleepy y un método nap():

var virtualPet = {
  sleepy: true,
  nap: function () {},
};

//En OOP, los métodos actualizan las propiedadesalmacenadas en el objeto en lugar de generar nuevos valores de retorno.
//Por ejemplo, si verifico la propiedad sleepy en el objeto virtualPet, puedo confirmar que está configurado en true.
//Sin embargo, una vez que ejecuté el método nap() en el objeto virtualPet, ¿cambiará el valor de la propiedad sleepy?

var virtualPet = {
  sleepy: true,
  nap: function () {
    this.sleepy = false;
  },
};
console.log(virtualPet.sleepy); // true
virtualPet.nap();
console.log(virtualPet.sleepy); // false
