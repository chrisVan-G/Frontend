/*12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) 
o no, pe. miFuncion(7) devolverá true.*/

const nprimo = (n = undefined) => {
  if (n === undefined) return console.error('Por favor ingrese un número');
  if (typeof n !== 'number')
    return console.error('El valor esperado en la entrada es de tipo númerico');
  if (n < 2)
    return console.error(
      `El número "${n}" no puede ser procesado, deben ser numeros naturales y mayores a 1`
    );
  if (n - Math.floor(n) !== 0)
    return console.error(
      `El valor ingresado "${n}" no es válido, por favor ingresar números enteros, no decimales`
    );

  let divisible = false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      divisible = true;
      break;
    }
  }

  return divisible
    ? console.info(`El número ${n} NO es un número primo`)
    : console.info(`El número ${n} es un número primo`);
};

nprimo();
nprimo(18);
nprimo(-2);
nprimo(0);
nprimo('');
nprimo(Math.round(Math.random() * 100));
nprimo(Math.random() * 100);
console.log();

// Un número natural es un número entero positivo

/*13) Programa una función que determine si un número es par o impar, 
pe. miFuncion(29) devolverá Impar.*/

const npar = (np = undefined) => {
  if (np === undefined) return console.error('Por favor ingrese un número');
  if (typeof np !== 'number')
    return console.error(`El valor "${np}" ingresado no es un número`);

  return np % 2 === 0
    ? console.info(`El número ${np} es par`)
    : console.info(`El número ${np} NO es par`);
};

npar();
npar(true);
npar('123');
npar([]);
npar({});
npar(0);
npar(-1);
npar(Math.round(Math.random() * 1000));
console.log();

/*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
pe. miFuncion(0,"C") devolverá 32°F.*/

const conversor = (temp = undefined, grados = undefined) => {
  if (temp === undefined)
    return console.warn(`No ingresaste los grados a convertir`);
  if (typeof temp !== 'number')
    return console.warn(
      `El valor ingresado "${temp}" no es válido, por favor ingresa un número`
    );
  if (grados === undefined)
    return console.warn(`No ingresaste el tipo de grado a convertir`);
  if (typeof grados !== 'string')
    return console.warn(
      `El valor ingresado "${grados}" no es válido, por favor ingresa una cadena de texto`
    );
  let c, f, x;
  grados = grados.toUpperCase();

  switch (grados) {
    case 'C':
      x = 9 / 5;
      f = [temp * x + 32];
      console.log(`${temp} °C equivalen a ${Math.round(f)} °F`);
      break;
    case 'F':
      x = 5 / 9;
      c = [temp - 32] * x;
      console.log(`${temp} °F equivalen a ${Math.round(c)} °C`);
      break;
  }
};

conversor();
conversor('2');
conversor(18);
conversor('', 'C');
conversor(45, 1);
conversor(0, 'C');
conversor(0, 'F');
conversor(Math.round(Math.random() * 1000), 'f');
conversor(Math.round(Math.random() * 1000), 'c');
