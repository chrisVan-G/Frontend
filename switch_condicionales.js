let a = 45;
let b = 16;

let operacion = 3;

switch (operacion) {
  case 1:
    console.log('El resultado de la SUMA es', a + b);
    break;
  case 2:
    console.log('El resultado de la RESTA es', a - b);
    break;
  case 3:
    console.log('El resultado de la MULTI es', a * b);
    break;
  case 4:
    console.log('El resultado de la DIV es', a / b);
    break;
  default:
    console.log('Operación no valida');
}
