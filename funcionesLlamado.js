// Llamado de funciones y recursividad
// Se conoce como recursividad, cuando una función se llama a sí misma
// Recursividad también es una forma alternativa de ejecutar un código repetitivo sin el uso de bucles

let counter = 3;
function ejemplo() {
  console.log(counter);
  counter = counter - 1;
  if (counter === 0) return;
  ejemplo();
}
ejemplo();
