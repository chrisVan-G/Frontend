/*
5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/

const invertirCadena = (cadena = '') => {
  let cadena_2 = cadena.split('');
  if (!cadena) {
    return console.warn(
      'El valor ingresado no corresponde a una cadena de texto'
    );
  } else console.info(`${cadena_2.reverse().join('')}`);
};

const invertirCadena_2 = (cadena_3 = '') =>
  !cadena_3
    ? console.warn('No ingresaste una cadena de texto')
    : console.info(cadena_3.split('').reverse().join(''));

invertirCadena('Hola Mundo');
invertirCadena();
invertirCadena_2('Se trata de aprender paso a paso, sin desesperar');
invertirCadena_2();
console.log();

/*
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

const textoEnCadena = (cadena_4 = '', buscar = '') => {
  if (!cadena_4) return console.warn('No ingresaste el texto completo');
  if (!buscar) return console.warn('No ingresaste la palabra a evaluar');

  let i = 0,
    contador = 0;

  while (i !== -1) {
    i = cadena_4.indexOf(buscar, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }

  return console.info(`La palabra ${buscar} se repite ${contador} veces`);
};

textoEnCadena();
textoEnCadena('hola mundo adios mundo', 'mundo');
textoEnCadena('', 'mundo');
textoEnCadena('hola mundo adios mundo');
console.log();
/*
7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

const validarPalindromo = (cadena_5 = '') => {
  let cadena_6 = cadena_5.split('').reverse().join('');
  !cadena_5
    ? console.warn('Por favor ingresa una cadena de texto')
    : console.info(cadena_5.toLowerCase() === cadena_6.toLocaleLowerCase());
  // ? console.info(`La palabra ${cadena_5} es un palindromo`)
  // : console.info(`La palabra ${cadena_5} NO es un palindromo`);
};

const palindromo = (palabra = '') => {
  if (!palabra) return console.warn('No ingresaste una palabra o frase');

  palabra = palabra.toLowerCase();
  let alReves = palabra.split('').reverse().join('');

  return palabra === alReves
    ? console.info(
        `Si es palíndromo, palabra original ${palabra}, palabra al revés ${alReves}`
      )
    : console.info(
        `No es palíndromo, palabra original ${palabra}, palabra al revés ${alReves}`
      );
};

validarPalindromo('Salas');
validarPalindromo('somos');
validarPalindromo('Ana');
validarPalindromo('Pilar');
validarPalindromo('');
validarPalindromo();
console.log();
palindromo('Salas');
palindromo('somos');
palindromo('Ana');
palindromo('Pilar');
palindromo('');
palindromo();
console.log();

/*
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

const eliminarPatron = (cadena_7 = '', patron = '') => {
  if (!cadena_7) return console.warn('No ingresaste la cadena de texto');
  if (!patron) return console.warn('No ingresaste el patron a evaluar');

  let regEx = /\d/gi;
  patron = cadena_7.match(regEx);

  return console.info(patron.join(', '));
};

const eliminarCaracteres = (text = '', patt = '') =>
  !text
    ? console.warn('No ingresaste un texto')
    : !patt
    ? console.warn('No ingresaste un patrón de carácteres')
    : console.info(text.replace(new RegExp(patt, 'ig'), ''));

eliminarPatron('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz');
eliminarPatron('xyz1, xyz2, xyz3, xyz4 y xyz5');
eliminarPatron('', 'xyz');
eliminarPatron();
console.log();
eliminarCaracteres('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz');
eliminarCaracteres('xyz1, xyz2, xyz3, xyz4 y xyz5');
eliminarCaracteres('', 'xyz');
eliminarCaracteres();
