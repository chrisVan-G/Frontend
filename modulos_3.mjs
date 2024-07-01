// Operaciones básicas

function suma(a, b) {
  let result = a + b;
  console.log('El resultado de la SUMA es:', result);
}

function resta(a, b) {
  let result = a - b;
  console.log('El resultado de la RESTA es:', result);
}

function mult(a, b) {
  let result = a * b;
  console.log('El resultado de la MULT es:', result);
}

function div(a, b) {
  let result = a / b;
  console.log('El resultado de la DIV es:', result);
}

function mod(a, b) {
  let result = a % b;
  console.log('El resultado de el MOD es:', result);
}

export let aritmetica = {
  // Serán exportados en este objeto
  suma,
  resta,
  mult,
  div,
  mod,
};
