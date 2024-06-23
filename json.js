//JSON es básicamente un objeto representado en forma de cadena

//Conversion de JSON a un objeto de javaScript
'{"saludo":"Hola"}';
const jsonStr = '{"saludo":"Hola"}';
JSON.parse(jsonStr);
const objetoSimple = JSON.parse(jsonStr);
objetoSimple.saludo = 'Hey';
console.log(objetoSimple);

//Conversion de un objeto de javaScript a JSON

const data = {
  nombre: 'Sam',
  apellido: 'Van',
  id: 333,
};

JSON.stringify(data);
//Probar en el navegador
//Las cadenas JSON no dben contener funciones y no permiten comentarios
