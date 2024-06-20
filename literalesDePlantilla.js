/* ¿Qué son los literales de plantilla(template literals)?
Los literales de plantilla son una forma alternativa de trabajar con cadenas, lo cual se introdujo en la incorporación de ES6 
al lenguaje JavaScript.*/

`Hello, World!`; //cadena de plantilla o literal de plantilla
// `altGr + tecla ]} = `` `; // carácter de acento grave, backtiks

// Diferencias entre una plantilla y una cadena normal
// Permite la interpolación de variables:

let saludo = 'Hola';
let lugar = 'Mundo';
console.log(`${saludo} ${lugar}!`);

// las cadenas de plantillas pueden abarcar varias líneas. Por ejemplo, esta es una sintaxis perfectamente buena:

`Hello
World
!`;

//esto no se puede hacer usando literales de cadenas (es decir, cadenas delimitadas con comillas simples o dobles
// la razón por la que es posible interpolar variables en los literales de plantilla es porque esta sintaxis, de hecho, permite
// la evaluación de expresiones.
console.log(`${1 + 1 + 1 + 1 + 1} stars!`);

// Algunos casos de uso adicionales de los literales de plantilla son los literales de plantilla anidados y las plantillas etiquetadas.
// Sin embargo, están un poco más involucrados y están más allá del alcance de esta lectura.
// Si tiene curiosidad acerca de cómo funcionan, consulte la lectura adicional proporcionada al final de esta lección.
