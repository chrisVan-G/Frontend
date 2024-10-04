// Operador de igualdad estricta (===)

let verdadero = true;
let falso = false;
let v = Boolean(true);
let f = Boolean(false);

console.log(verdadero, falso, v, f);
console.log(typeof verdadero, typeof falso);

// Valores que tienden a true o false

console.log(Boolean(0));
console.log(Boolean(-7));
console.log(Boolean(''));
console.log(Boolean(' '));

// Para más, consultar truthy and falsy en mdn

let x = 1;
let apagado = true;

if (x != 0) {
  apagado = false;
}
console.log(apagado);
