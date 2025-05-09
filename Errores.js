//Manejo de errores try-catch

try {
  console.log('(1) En el try se adiciona el código a evaluar');
  variableX; // Variable no declarada
  console.log(
    'Si ocurre un error antes de este punto, este console, no se ejecuta'
  );
} catch (error) {
  console.log('(2) El catch captura los errores que ocurrán en el try');
  console.log(error);
} finally {
  console.log('(3) Finally se ejecutará siempre al final del bloque try-catch');
}
