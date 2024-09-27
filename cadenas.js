// Strings - Cadenas de texto

let userName = ''; // Las comillas se conocen como delimitadores
userName = 'Paul';

let greeting = 'Hello,';

console.log(greeting, userName);

//Como en el Inglés hay apostrofes (') es mejor usar comillas dobles ("")
console.log("This isn't my userName");

userName = 'Max';

console.log(greeting, userName);

//Características clave de las cadenas

// Propiedad de longitud
console.log(
  'La longitud del nombre de usuario es de ',
  userName.length,
  'caracteres'
);

//Para leer cada carácter individual en un índice específico en una cadena, comenzando desde cero, puedo usar el método charAt()
console.log('El carácter de la posición cero es', userName.charAt(0));

// El método concat() une dos cadenas:

let w = 'Wo'.concat('rl').concat('d');
console.log('Union con el método concat', w);

//indexOf devuelve la ubicación de la primera posición que coincide con un carácter:

console.log('Posición del carácter W es', w.indexOf('W'));
console.log('Posición del carácter r es', w.indexOf('r'));

//lastIndexOf encuentra la última coincidencia; de lo contrario, funciona igual que indexOf.

console.log('Posición del carácter l es', w.lastIndexOf('l'));
console.log('Posición del carácter d es', w.lastIndexOf('d'));

//El método split corta la cadena en una matriz de subcadenas:

let s =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea molestias corrupti facilis minus ut nihil laboriosam dicta nesciunt, sunt tempore, quo illo quas reiciendis veritatis aliquam, expedita repudiandae earum a';
console.log(s.split(' '));
console.log('El párrafo contiene la palabra amet: ', s.includes('amet')); //Valida si esta la palabra
console.log(s.trim()); //Elimina los espacios en blanco

//También hay algunos métodos para cambiar las mayúsculas y minúsculas de las cadenas. Por ejemplo:

console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());

let vocales = 'aeiou';
console.log(vocales.match(/a/)); //devuelve todas las ocurrencias de una expresión regular dentro de una cadena
console.log(vocales.match(/d/));

const search = /[A-Z]/g; //Busca las letras mayúsculas en el párrafo
const found = s.match(search);
console.log(found);

//Interpolación de variables

//Template Strings

console.log('--------------Template String--------------');
let saludo = `Hola mi nombre es ${userName}`;
console.log(saludo);

let ul =
  '<ul> <li>Primera</li><li>Verano</li><li>Otoño</li><li>Invierno</li><ul/>';
console.log(ul);

let ul2 = `
  <ul>
    <li>Primera</li>
    <li>Verano</li>
    <li>Otoño</li>
    <li>Invierno</li>
  <ul/>`;
console.log(ul2);
console.log();

let ul3 = '<ul>';
ul3 += '<li>Primera</li>';
ul3 += '<li>Verano</li>';
ul3 += '<li>Otoño</li>';
ul3 += '<li>Invierno</li>';
ul3 += '<ul/>';
console.log(ul3);
