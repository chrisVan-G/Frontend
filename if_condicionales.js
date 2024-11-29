// Estructuras de control

/*

Permite tomar decisiones

if (condition == true){
    //Execute code
}

else {
    //Execute code
}

*/

let num = 12;

if (num % 2 == 0) {
  console.log('El número ' + num + ' es par');
} else {
  console.log('El número ' + num + ' es impar');
}

//Si necesito evaluar más  condiciones utilizo else if

let hora = 15;

if (hora >= 0 && hora <= 5) {
  console.log('Dejame dormir');
} else if (hora >= 6 && hora <= 11) {
  console.log('Buenos días');
} else if (hora >= 12 && hora <= 18) {
  console.log('Buenas tardes');
} else {
  console.log('Buenas noches');
}

if (hora < 6) {
  console.log('Dejame dormir');
} else if (hora > 5 && hora < 12) {
  console.log('Buenos días');
} else if (hora > 11 && hora < 19) {
  console.log('Buenas tardes');
} else {
  console.log('Buenas noches');
}

// Operador ternario (condicion)?verdadero:falso

console.log('Operador ternario');

let edad = 9;
let eresMayor = edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad';
console.log(eresMayor);
