//Para bucles y objetos

//Un bucle for of no puede funcionar en un objeto directamente, ya que un objeto no es iterable
/*
const car = {
  speed: 100,
  color: 'blue',
};

for (prop of car) {
  console.log(prop);
}
*/

//A diferencia de los objetos, las matrices son iterables

const colors = ['red', 'orange', 'yellow'];
for (var color of colors) {
  console.log(color);
}

//Afortunadamente, puede usar el hecho de que un bucle for of se puede ejecutar en matrices para repetir objetos.

//Métodos incorporados

/*El método Object.keys() recibe un objeto como su parámetro. Recuerde, este objeto es el objeto que desea repetir. 
Todavía es demasiado pronto para explicar cómo repetirá el objeto en sí, así que por ahora, concéntrese en la matriz 
de propiedades devuelta cuando llame al método Object.keys().*/

const car2 = {
  speed: 200,
  color: 'red',
};
console.log(Object.keys(car2));

/* cuando ejecuto Object.keys() y le paso mi objeto car2, el valor devuelto es una matriz de cadenas, donde cada 
una de ellas es una clave de propiedad de las propiedades que contiene el objeto car2.*/

//Otro método útil es Object.values():

const car3 = {
  speed: 300,
  color: 'yellow',
};
console.log(Object.values(car3));

//Object.entries() devuelve una matriz que menciona tanto las claves como los valores.

const car4 = {
  speed: 400,
  color: 'magenta',
};
console.log(Object.entries(car4));

//los valores que se devuelven son matrices de 2 miembros anidadas dentro de una matriz

/* Ahora tiene todos los ingredientes que necesita para repetir las claves y los valores 
de propiedad de cualquier objeto. */

var clothingItem = {
  price: 50,
  color: 'beige',
  material: 'cotton',
  season: 'autumn',
};

for (key of Object.keys(clothingItem)) {
  console.log(key, ':', clothingItem[key]);
}

function testBracketsDynamicAccess() {
  var dynamicKey = Math.random() > 0.5 ? 'speed' : 'color';

  var drone = {
    speed: 15,
    color: 'orange',
  };

  console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();

//Notará que a veces el valor que se obtiene es 15 y, a veces, orange
//For of me permite recorrer cualquier objeto que sea iterable
