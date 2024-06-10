// Strings - Cadenas de texto

let userName = ''; // Las comillas se conocen como delimitadores
userName = 'Paul';

let greeting = 'Hello,';

console.log(greeting, userName);

//Como en el Inglés hay apostrofes (') es mejor usar comillas dobles ("")
console.log("This is'nt my userName");

userName = 'Max';

console.log(greeting, userName);

//Características clave de las cadenas

// Propiedad de longitud
console.log(userName.length);

//Para leer cada carácter individual en un índice específico en una cadena, comenzando desde cero, puedo usar el método charAt()
console.log(userName.charAt(0));

// El método concat() une dos cadenas:

let w = 'Wo'.concat('rl').concat('d');
console.log(w);

//indexOf devuelve la ubicación de la primera posición que coincide con un carácter:

console.log(w.indexOf('W'));
console.log(w.indexOf('r'));

//lastIndexOf encuentra la última coincidencia; de lo contrario, funciona igual que indexOf.

console.log(w.lastIndexOf('l'));
console.log(w.lastIndexOf('d'));

//El método split corta la cadena en una matriz de subcadenas:

let s =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea molestias corrupti facilis minus ut nihil laboriosam dicta nesciunt, sunt tempore, quo illo quas reiciendis veritatis aliquam, expedita repudiandae earum a';
console.log(s.split(' '));

//También hay algunos métodos para cambiar las mayúsculas y minúsculas de las cadenas. Por ejemplo:

greeting.toUpperCase();
greeting.toLowerCase();

let vocales = 'aeiou';
console.log(vocales.match(/a/));
console.log(vocales.match(/d/));
