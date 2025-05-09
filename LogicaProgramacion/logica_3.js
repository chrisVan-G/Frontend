/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/

const numeroAleatorio = () => {
  let min = 501,
    max = 600;
  console.info(Math.round(Math.random() * (max - min + 1) + min));
};

let aleatorio = () => console.info(Math.round(Math.random() * 100 + 500));

aleatorio();
numeroAleatorio();
console.log();

/*10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/

const capicua = (numero = 0) => {
  numero = String(numero);
  let alReves = numero.split('').reverse().join('');
  alReves = Number(alReves);
  numero = Number(numero);
  !numero
    ? console.warn('Por favor ingrese un número')
    : numero === alReves
    ? console.info(`El número ${numero} es capicua`)
    : console.info(`El número ${numero} NO es capicua`);
};

const capicua_2 = (numero_2 = 0) => {
  if (!numero_2) return console.warn('No ingresaste un número');
  if (typeof numero_2 !== 'number')
    return console.error(`El valor "${numero_2}" ingresado, NO es un número`);

  numero_2 = numero_2.toString();
  let alReves_2 = numero_2.split('').reverse().join('');

  return parseInt(numero_2) === parseInt(alReves_2)
    ? console.info(
        `Si es capicúa, número original ${numero_2}, número al revés ${alReves_2}`
      )
    : console.info(
        `No es capicúa, número original ${numero_2}, número al revés ${alReves_2}`
      );
};

aleatorio = Math.round(Math.random() * 1000);

capicua('');
capicua();
capicua(1001);
capicua(161);
capicua(333);
capicua(aleatorio);

capicua_2('');
capicua_2();
capicua_2(1001);
capicua_2(161);
capicua_2(333);
capicua_2(aleatorio);
capicua_2(212.212);
console.log();

/*11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, se define como el producto de todos los números enteros 
positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/

const factorial = (n = undefined) => {
  if (n === undefined) return console.warn('No ingresaste un número');
  if (typeof n !== 'number')
    return console.error(`El valor "${n}" ingresado, NO es un número`);
  if (n === 0) return console.error('El número no puede ser 0');
  if (Math.sign(n) === -1)
    return console.error('El número no puede ser negativo');

  let factorial = 1;

  for (let i = n; i > 1; i--) {
    // factorial = factorial * i;
    factorial *= i;
  }

  return console.info(`El factorial de ${n} es ${factorial}`);
};

factorial();
factorial('5');
factorial([1, 2, 3]);
factorial(0);
factorial(-5);
factorial(5);
factorial(8);
factorial(12);
