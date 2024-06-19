/*Crear clases
Imagine que debe codificar una clase Train.
Una vez que haya codificado esta clase, podrá usar la palabra clave new para crear instancias de objetos 
de la clase Train.
Sin embargo, por ahora, primero debe definir la clase Train usando la siguiente sintaxis:
*/

class Train_without_builder {}

/*
Entonces, usa la palabra clave class, luego especifica el nombre de la clase, con la primera letra en 
mayúscula, y luego agrega una llave de apertura y cierre.
Entre las llaves, el primer fragmento de código que debe definir es el constructor:
*/

class Train_with_builder {
  constructor() {}
}

/*
El constructor se usará para generar propiedades en la futura instancia del objeto de la clase Train.
Por ahora, digamos que solo hay dos propiedades que cada instancia del objeto de la clase Train debe 
tener en el momento en que se crea su instancia: color y lightsOn.
*/

class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
}

/*

Observe la sintaxis del constructor. El constructor es una función especial en la clase Train.

En primer lugar, observe que no hay una palabra clave function. Además, observe que la palabra clave 
constructor se usa para definir esta función. Usted proporciona los parámetros de la función constructor 
dentro de un paréntesis de apertura y cierre, al igual que en las funciones normales. Los nombres de los 
parámetros son color y lightsOn.  

A continuación, dentro de la estructura de la función constructor, asignó el valor del parámetro color 
pasado a this.color y el valor del parámetro lightsOn pasado a this.lightsOn.

¿Qué representa esta palabra clave aquí?
Es la instancia del objeto futuro de la clase Train.
Esencialmente, este es todo el código que debe escribir para lograr dos cosas: 
Este código me permite construir nuevas instancias de la clase Train. 
Cada instancia del objeto de la clase Train que construyo tendrá sus propias propiedades 
personalizadas de color y lightsOn.
Ahora, para crear una nueva instancia de la clase Train, debo usar la siguiente sintaxis:

*/

let myFirstTrain = new Train('red', false);

/*Al igual que con cualquier otra variable, ahora puede, por ejemplo, registrar en la consola el objeto 
myFirstTrain: */

console.log(myFirstTrain);

/* Puede continuar creando instancias de la clase Train. Incluso si le da exactamente las mismas propiedades, siguen siendo 
objetos separados. */

var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('green', true);
console.log(mySecondTrain);
console.log(myThirdTrain);

/*
Sin embargo, esto no es todo lo que las clases pueden ofrecer.
También puede agregar métodos a las clases, y estos luego serán compartidos por todos los objetos de 
instancia futuros de mi clase Train.
Por ejemplo:
*/

class Tren {
  constructor(color, lucesActivadas) {
    this.color = color;
    this.lucesActivadas = lucesActivadas;
  }

  palancaLuces() {
    this.lucesActivadas = !this.lucesActivadas;
  }
  estadoLuces() {
    console.log('Luces encendidas: ', this.lucesActivadas);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

/*

Ahora, hay cuatro métodos en su clase Train:  toggleLights(), lightsStatus(),  getSelf() y getPrototype().

El método toggleLights utiliza el operador lógico not, !. Este operador cambiará el valor almacenado en la 
propiedad lightsOn del futuro objeto de instancia de la clase Train; de ahí el !this.lightsOn. 
Y el operador = a su izquierda significa que se asignará a this.lightsOn, lo que significa que se convertirá 
en el nuevo valor de la propiedad lightsOnen ese objeto de instancia dado.

El método lightsStatus() en la clase Train solo informa el estado actual de la variable lightsOn de una 
instancia de un objeto  determinado.El método getSelf() imprime las propiedades en la instancia del objeto 
al que se llama.

La consola getPrototype() registra el prototipo de la instancia del objeto de la clase Train. El prototipo 
contiene todas las propiedades compartidas por todas las instancias del objeto de la clase Train. 
Para obtener el prototipo, utilizará el método Object.getPrototypeOf() incorporado de JavaScript y 
le pasará este objeto; es decir, la instancia del objeto dentro de la cual se invoca este método.
Ahora puede construir un nuevo tren usando esta clase de Train actualizada:
*/

let tren = new Tren('red', false);

//Y ahora, puede ejecutar cada uno de sus métodos, uno tras otro, para confirmar su comportamiento:

tren.palancaLuces();
tren.estadoLuces();
tren.getSelf();
tren.getPrototype();

/*
El resultado de llamar a toggleLights() es el cambio de verdadero a falso y viceversa para la propiedad 
lightsOn.
El resultado de llamar a lightsStatus() es el registro en la consola del valor de la propiedad lightsOn.

El resultado de llamar a getSelf() es que la consola registre toda la instancia del objeto en el que se 
llama al método getSelf(). En este caso, el objeto devuelto es el objeto train4. Tenga en cuenta que este 
objeto se devuelve solo con las propiedades (“datos”) con las que se creó con la función constructor() de 
la clase Train. Esto se debe a que todos los métodos de la clase Train no se encuentran en ninguno de los 
objetos de instancia de la clase Train; en cambio, están en el prototipo, como se confirmará en el siguiente 
párrafo.

Por último, el resultado de llamar al métodogetPrototype() es el registro de la consola de todas las 
propiedades del prototipo. Cuando se usa la sintaxis de clase en JavaScript, esto da como resultado que 
solo se almacenen métodos compartidos en el prototipo, mientras que la función constructor() configura el 
mecanismo para guardar valores específicos de la instancia (“datos”) en el momento de la instanciación del 
objeto.
Por lo tanto, en conclusión, la sintaxis de clase en JavaScript nos permite separar claramente los datos del 
objeto individual, que existen en la instancia del objeto en sí, de la funcionalidad (métodos) del objeto 
compartido, que existen en el prototipo y son compartidos por todas las instancias del objeto.
Sin embargo, esta no es toda la historia.
Es posible implementar polimorfismo usando clases en JavaScript, mediante la herencia de la clase base y 
luego la anulación del comportamiento heredado. Para entender cómo funciona esto, lo mejor es utilizar un 
ejemplo.
En el código siguiente, observará que se codifica otra clase, que se denomina HighSpeedTrain y hereda de la
clase Train.
Esto convierte a la clase Train en una clase base o en la superclase de la clase HighSpeedTrain. Dicho de 
otra manera, la clase HighSpeedTrain se convierte en la subclase de la clase Train porque hereda de ella.
Para heredar de una clase a una nueva subclase, JavaScript proporciona la palabra clave extends, que funciona 
de la siguiente manera: */

//class HighSpeedTrain extends Train {}

/*
Como en el ejemplo anterior, la sintaxis de la subclase es coherente con la forma en que se define la clase 
base en JavaScript. La única adición aquí es la palabra clave extends y el nombre de la clase de la que hereda 
la subclase.
Ahora puede describir cómo funciona HighSpeedTrain. Nuevamente, puede comenzar definiendo su función de 
constructor:
*/

/*
class HighSpeedTrain extends Tren {
  constructor(passengers, highSpeedOn, color, lucesActivadas) {
    super(color, lucesActivadas);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
}*/

/*
Observe la ligera diferencia en la sintaxis en el constructor de la clase HighSpeedTrain; es decir, 
el uso de la palabra clave super.

En las clases de JavaScript, super se usa para especificar qué propiedad se hereda de la superclase en la 
subclase.En este caso, elijo heredar ambas propiedades de la superclase Train en la subclase HighSpeedTrain.

Estas propiedades son color y lightsOn.
A continuación, agregue las propiedades adicionales de la clase HighSpeedTrain dentro del constructor; 
es decir, las propiedades passengers y highSpeedOn.
Luego, dentro de la estructura del constructor, utilice la palabra clave super y pase las propiedades 
heredadas color y lightsOn que provienen de la clase Train. En las líneas subsiguientes, asigna passengers 
a this.passengers y highSpeedOn a this.highSpeedOn.
Tenga en cuenta que, además de las propiedades heredadas, también hereda automáticamente todos los métodos 
que existen en el prototipo Train; es decir, los métodos toggleLights(), lightsStatus(), getSelf() y 
getPrototype().
Ahora agreguemos otro método que será específico de la clase HighSpeedTrain: el método toggleHighSpeed().
*/
/*
class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log('High speed status:', this.highSpeedOn);
  }
}
*/
/*
Además, imagine que se dio cuenta de que no le gusta cómo funciona el método toggleLights() de la superclase 
y quiere implementarlo de manera un poco diferente en la subclase. Puede agregarlo dentro de la clase 
HighSpeedTrain. 
*/

class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log('High speed status:', this.highSpeedOn);
  }
  toggleLights() {
    super.toggleLigths();
    super.lightsStatus();
    console.log('Lights are 100% operational.');
  }
}

/*
Entonces, ¿cómo anuló el comportamiento del método toggleLights()original?
Bueno, en la superclase, el método toggleLights() se definió de la siguiente manera:
*/

/*
toggleLights() {
    this.lightsOn = !this.lightsOn;
}
*/

/*
Se dio cuenta de que el método HighSpeedTraindebería reutilizar el comportamiento existente del método 
toggleLights()original, por lo que usó la sintaxis super.toggleLights() para heredar todo el método de la 
superclase.A continuación, también hereda el comportamiento del método lightsStatus() de la superclase 
porque se da cuenta de que desea tener el estado actualizado de la propiedad lightsOn registrada en la 
consola, siempre que invoque el método toggleLights() en la subclase.
Finalmente, también agrega la tercera línea en el método toggleLights()reimplementado, a saber:
*/

//console.log('Lights are 100% operational.');

/*
Ha agregado esta tercera línea para mostrar que puedo combinar el código del método “prestado” de la 
superclase con su propio código personalizado en la subclase.
Ahora está listo para construir algunos objetos del tren.*/

var train2 = new Tren('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
