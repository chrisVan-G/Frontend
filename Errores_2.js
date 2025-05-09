try {
  let numero = "t";

  if (isNaN(numero)) {
    throw new Error('El valor ingresado no es un número');
  }

  console.log(`El resultado de la operación es: ${numero * numero}`);
} catch (error) {
  console.log(`Se produjo el siguiente ${error}`);
}
