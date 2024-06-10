//Uso del typeOf

let test = typeof '¿Qué es esto?';
let test_2 = typeof 10;
let test_3 = typeof 3.14;
let test_4 = typeof true;
let test_5 = typeof false;
let test_6 = typeof (1 < 2);
let test_7 = typeof [1, 2, 3];
let test_8 = typeof { primerPropiedad: 1 };
let test_9 = typeof function abc() {
  console.log('abc');
};

console.log(test);
console.log(test_2);
console.log(test_3);
console.log(test_4);
console.log(test_5);
console.log(test_6);
console.log(test_7);
console.log(test_8);
console.log(test_9);

var result = 'Hello'.indexOf('l');
console.log(result);
