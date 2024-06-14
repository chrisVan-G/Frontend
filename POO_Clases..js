class Car {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }
  //Dentro de la clase no se utiliza la palabra clave function, solo el nombre del método
  turboOn() {
    console.log('turbo is on!');
  }
}

const car1 = new Car('Red', 120);
car1.turboOn();

/* Principios de la programación orientada a objetos

Los cuatro principios fundamentales de la OOP son herencia, encapsulación, abstracción y polimorfismo. 
Lo que hay que recordar acerca de los objetos es que tienen una estructura jerárquica
la base original o la superclase para todo es la clase Object; todos los objetos se derivan de esta clase. 
Esto nos permite utilizar el método Object.create() para crear o generar instancias de objetos de nuestras clases.
*/

class Animal {
  /* ...class code here... */
}

var myDog = Object.create(Animal);
console.log(Animal);

//Un método más común para crear objetos a partir de clases es usar la palabra clave new. Cuando se usa un método
//constructor predeterminado o vacío, JavaScript llama implícitamente a la superclase Object para crear la instancia.

class Animal_2 {
  /* ...class code here... */
}
var myDog = new Animal_2();
console.log(Animal_2);

//Principios de la OOP: Herencia

/*
Hay una clase base de “Animal”.

Hay otra clase, una subclase que hereda de “Animal”, y el nombre de esta clase es “Bird”.

A continuación, hay otra clase, que hereda de “Bird”, y esta clase es “Eagle”.

Por lo tanto, en el ejemplo anterior, estoy dando forma a objetos del mundo real mediante la construcción de relaciones entre Animal, 
Bird y Eagle. Cada una de ellas son clases separadas, lo que significa que son planos separados para instancias de objetos específicos 
que se pueden construir según sea necesario.
Para configurar la relación de herencia entre las clases en JavaScript, puedo usar la palabra clave extends, como en class B extends A.
Aquí hay un ejemplo de una jerarquía de herencia en JavaScript:

*/

class Animal_3 {
  /* ...class code here... */
}
class Bird extends Animal_3 {
  /* ...class code here... */
}
class Eagle extends Bird {
  /* ...class code here... */
}

//Principios de la OOP: Encapsulación

/*
En los términos más simples, la encapsulación tiene que ver con hacer que la implementación de un código esté “oculta” para otros 
usuarios, en el sentido de que no tienen que saber cómo funciona mi código para “consumirlo”.
Por ejemplo, cuando ejecuto el siguiente código:
*/

let a = 'abc'.toUpperCase();
console.log(a);

//Principios de la OOP: Abstracción
/*

Principios de la OOP: Polimorfismo
El polimorfismo es una palabra derivada del idioma griego que significa “múltiples formas”. Una traducción alternativa podría ser: 
“algo que puede tomar muchas formas”.
Entonces, para entender de qué se trata el polimorfismo, consideremos algunos objetos de la vida real.
Una puerta tiene un timbre. Podría decirse que el timbre es una propiedad del objeto puerta. Este timbre se puede tocar. 
¿Cuándo tocaría alguien el timbre de la puerta? Obviamente, para que alguien se presente en la puerta.

Ahora considere un timbre en una bicicleta. Una bicicleta tiene un timbre. Podría decirse que el timbre es una propiedad del objeto 
bicicleta. Este timbre también se puede tocar. Sin embargo, la razón, la intención y el resultado de que alguien toque el timbre de 
una bicicleta no son los mismos que tocar el timbre de una puerta.

Los conceptos anteriores se pueden codificar en JavaScript de la siguiente manera:

*/

const bicycle = {
  bell: function () {
    return 'Ring, ring! Watch out, please!';
  },
};
const door = {
  bell: function () {
    return 'Ring, ring! Come here, please!';
  },
};

//Entonces, puedo acceder al método bell() en el objeto bicycle usando la siguiente sintaxis:

bicycle.bell(); // "Get away, please"

//También puedo acceder al método bell() en el objeto door usando esta sintaxis:

door.bell(); // "Come here, please"

/*
En este punto, se puede concluir que exactamente el mismo nombre del método puede tener exactamente la intención opuesta, según el 
objeto para el que se use.
Ahora, para hacer que este código sea verdaderamente polimórfico, agregaré otra declaración de función:
*/

function ringTheBell(thing) {
  console.log(thing.bell());
}

/*

Ahora he declarado una función ringTheBell(). Acepta un parámetro thing que espero que sea un objeto; es decir, el objeto bicycle o el 
objeto door.
Así que ahora, si llamo a la funciónringTheBell() y le paso bicycle como único argumento, este es el resultado:
*/

ringTheBell(bicycle); // Ring, ring! Watch out, please!

//Sin embargo, si invoco la función ringTheBell() y le paso el objeto door, obtendré el siguiente resultado:

ringTheBell(door); // "Ring, ring! Come here, please!"

/*
Ahora ha visto un ejemplo de exactamente la misma función que produce resultados diferentes, según el contexto en el que se usa.
Aquí hay otro ejemplo, el operador concatenation usado llamando al método integrado concat().
Si uso el método concat() en dos cadenas, se comporta exactamente igual que si usara el operador +. 
*/
'abc'.concat('def'); // 'abcdef'

//También puedo usar el método concat() en dos matrices. Este es el resultado:

['abc'].concat(['def']); // ['abc', 'def']

//Considere usar el operador + en dos matrices con un miembro cada uno:

['abc'] + ['def']; // ["abcdef"]

/*
Esto significa que el método concat() posee un comportamiento polimórfico, ya que se comporta de manera diferente según el contexto; 
en este caso, según los tipos de datos que le doy.
Para reiterar, el polimorfismo es útil porque permite a los desarrolladores crear objetos que pueden tener exactamente la misma 
funcionalidad; es decir, funciones con exactamente el mismo nombre, que se comportan exactamente igual. Sin embargo, al mismo tiempo, 
puede anular algunas partes de la funcionalidad compartida o incluso toda la funcionalidad en otras partes de la estructura de la OOP.
Aquí hay un ejemplo de polimorfismo usando clases en JavaScript:
*/

class Bird {
  useWings() {
    console.log('Flying!');
  }
}
class Eagle extends Bird {
  useWings() {
    super.useWings();
    console.log('Barely flapping!');
  }
}
class Penguin extends Bird {
  useWings() {
    console.log('Diving!');
  }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

/*
Las subclases Penguin y Eagle heredan de la superclase Bird. La subclase Eagle hereda el método useWings() de la clase Bird, 
pero lo amplía con un registro de consola adicional. La subclase Penguin no hereda la clase useWings(); en cambio, tiene su propia 
implementación, aunque la clase Penguin en sí misma amplía la clase Bird.  
*/
