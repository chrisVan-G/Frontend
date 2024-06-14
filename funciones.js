/*
function suma() {
  //sin parámetros
  let a = 12;
  let b = 56;
  let c = a + b;
  console.log(c);
}
suma(); //sin argumentos
console.log();

function suma_2(a, b) {
  //con parámetros
  let c = a + b;
  console.log(c);
}
suma_2(15, 22); //con argumentos
*/

function letterFinder(word, match) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] == match) {
      console.log('Found the', match, 'at', i);
    } else {
      console.log('---No match found at', i);
    }
  }
}
letterFinder('test', 't');

console.log('__________________________________________________________');

//Devolver valores de las funciones

//Muchas funciones devuelven el valor undefined de manera predeterminada

console.log('Hello');

function consoleLog(val) {
  console.log(val);
  return val;
}
consoleLog('Hello');

function doubleIt(num) {
  return num * 2;
}

consoleLog(doubleIt(8));

function objectMaker(val) {
  return {
    prop: val,
  };
}
consoleLog(objectMaker('Rojo'));

doubleIt(10).toString();
consoleLog(objectMaker(doubleIt(100)));
