/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá 10.
*/

function miFuncion(i) {
  let number, string, boolean;
  typeof i;
  if (typeof i === 'number') {
    console.log(`La entrada esperada es de tipo texto no numérico`);
  } else if (typeof i == 'string') {
    console.log(`Esta cadena de texto contiene ${i.length} carácteres`);
  } else if (typeof i == 'boolean') {
    console.log(`La entrada esperada es de tipo texto no booleano`);
  } else if (typeof i == 'undefined') {
    console.log(`La entrada esperada es de tipo texto no indefinido`);
  } else if (typeof i == 'object') {
    console.log(`La entrada esperada es de tipo texto no objecto`);
  }
}

miFuncion('Hola Mundo');
miFuncion(123);
miFuncion(true);
miFuncion(undefined);
miFuncion(null);
console.log();

// function contarCaracteres(cadena = '') {
//   if (!cadena) {
//     console.warn('No ingresaste ninguna cadena');
//   } else {
//     console.info(`La cadena "${cadena}" tiene ${cadena.length} carácteres`);
//   }
// }

const contarCaracteres = (
  cadena = '' //Las arrow functions tienen el return implicito
) =>
  !cadena
    ? console.warn('No ingresaste ninguna cadena')
    : console.info(`La cadena "${cadena}" tiene ${cadena.length} carácteres`);

contarCaracteres();
contarCaracteres('Hola Mundo');
console.log();

/*
  2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
  pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
  */

function miFuncion_2(j, longitud) {
  let arr = j.split(' ');
  console.log(`Forma 1: ${arr[0]}`);

  console.log(`Forma 2: ${j.slice(0, longitud)}`);
}

miFuncion_2('Hola Mundo', 4);
console.log();

const recortarTexto = (cadena = '', longitud = undefined) =>
  !cadena
    ? console.warn('No ingresaste una cadena de texto')
    : longitud === undefined
    ? console.warn('No ingresaste la longitud para recortar el texto')
    : console.info('Forma 3:', cadena.slice(0, longitud));

recortarTexto('Hola Mundo', 4);
recortarTexto();
recortarTexto('Hola Mundo');
recortarTexto('', 4);
console.log();

/*
  3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, 
  pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

function miFuncion_3(k, separador) {
  let arr_2 = k.split(separador);
  console.log(arr_2);
}

const cadenaAArreglo = (cadena = '', separador = undefined) =>
  !cadena
    ? console.warn('No ingresaste una cadena de texto')
    : separador === undefined
    ? console.warn('No ingresaste el carácter separador')
    : console.info(cadena.split(separador));

cadenaAArreglo('hola que tal', ' ');
cadenaAArreglo('hola que tal');
cadenaAArreglo();
cadenaAArreglo('', '-');
miFuncion_3('hola que tal', ' ');
console.log();

/*4) Programa una función que repita un texto X veces, 
  pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
  */

function miFuncion_4(m, veces) {
  console.log(m.repeat(veces));
}

const repetirTexto = (texto = '', veces = undefined) => {
  if (!texto) return console.warn('No ingresaste un texto');
  if (veces === undefined)
    return console.warn('No ingresaste el número de repeticiones');
  if (veces === 0) return console.error('El número de veces no puede ser 0');
  if (Math.sign(veces) === -1)
    return console.error('El número de veces no puede ser negativo');

  for (let o = 1; o <= veces; o++) {
    console.info(`${texto}, ${o}`);
  }
};

repetirTexto('Hola Mundo', 3);
repetirTexto('', 20);
repetirTexto('Hola Mundo', 0);
repetirTexto('Hola Mundo', -3);
repetirTexto('Hola Mundo');
miFuncion_4('Hola Mundo ', 3);
