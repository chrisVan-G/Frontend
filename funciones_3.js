// Función: bloque de código autocontenido, se define una vez y se ejecuta en cualquier momento

// Funciones Declaradas

// Declaración de funciones

function ejemploFuncion() {
  console.log('Estudiando funciones');
}

function funcionQueDevuelveValor() {
  return 'La función retorna una cadena de texto';
}

function otraFuncion() {
  console.log('A');
  console.log('B');
  console.log('C');
}

function ejecucionDeRetorno() {
  console.log('A');
  return 16;
  console.log('B');
  console.log('C');
}

function saludar(nombre = 'Paco', edad = 14) {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}

// Invocación de la función

ejemploFuncion();

let valorDeFuncion = funcionQueDevuelveValor();
console.log(valorDeFuncion);

otraFuncion();

let valorDeFuncion_2 = ejecucionDeRetorno();
console.log(valorDeFuncion_2);

saludar('Pepe', 21);
saludar(); // Para su ejecución asigne los valores en los argumentos

console.log('______________________________________');

// Funciones declaradas vs funciones expresadas

// Función declarada

funcionDeclarada(); // Hoisting es un comportamiento de JavaScript que mueve las declaraciones de variables y funciones al principio de su ámbito de ejecución

function funcionDeclarada() {
  console.log(
    'Esto es una función declarada, puede invocarse en cualquier parte del código incluso antes de que la función sea declarada'
  );
}

funcionDeclarada();

// Función expresada

// Función anónima (que no tiene nombre)

console.log('________________________________________');

// funcionExpresada();

const funcionExpresada = function () {
  console.log(
    'Esto es una función expresada es decir una función que se le ha asignado como valor a una variable si invocamos esta función antes de su definición, javascript nos dirá Cannot access funcionExpresada before initialization '
  );
};

funcionExpresada();
