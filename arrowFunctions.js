// Cuando la función solo tiene una instrucción, puedo omitir las {} y usar solo 1 linea
const saludar = (nombre) => console.log(`Hola ${nombre}, bienvenido!`);
// Si la función solo recibe 1 parámetro puedo omitir los ()
saludar('Juan');

const sumar = (a, b) => a + b; // El return esta implicito
console.log(sumar(2, 6));

const funcionDeVariasLineas = () => {
  console.log('Uno');
  console.log('Dos');
  console.log('Tres');
};

funcionDeVariasLineas();

const numeros = [1, 2, 3, 4, 5];

numeros.forEach((el, index) =>
  console.log(`${el} esta en la posición ${index}`)
);
// El método forEach recibe una función como parámetro

/*Al usar funciones flecha debo tener cuidado con el contexto, ya que estas heredan
las caracteristicas del objeto padre como lo es el objeto windows si estoy en el navegador*/
