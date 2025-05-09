// Parámetros REST

function sumar(a, b, ...c) {
  let resultado = a + b;

  c.forEach(function (n) {
    resultado += n;
  });

  return resultado;
}

console.log(sumar(1, 2));
console.log(sumar(1, 2, 3));
console.log(sumar(1, 2, 3, 4));
console.log(sumar(1, 2, 3, 4, 5));
console.log(sumar(1, 2, 3, 4, 5, 6));
console.log(sumar(1, 2, 3, 4, 5, 6, 7));

// Operador de propagación o spread

const arr = [1, 2, 3, 4, 5],
  arr_2 = [6, 7, 8, 9, 0];

const arr_3 = [...arr, ...arr_2];
console.log(arr_3);
