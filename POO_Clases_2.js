// Clases y Herencia

class Animal {
  /* El constructor es un método especial que
 ejecuta en el momento de instanciar la clase*/
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  // Métodos

  sonar() {
    console.log('Hago sonidos por que estoy vivo');
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}

class Gato extends Animal {
  /*Con el método super() se manda a llamar
  el constructor de la clase padre*/
  constructor(nombre, genero, tamanio) {
    super(nombre, genero);
    this.tamanio = tamanio;
    this.raza = null;
  }

  sonar() {
    console.log('Soy un gato y mi sonido es un maullido');
  }

  maullar() {
    console.log('Miauu Miauu!!!');
  }

  static cazar() {
    //Un método estático se puede ejecutar sin necesidad de instanciar la clase
    console.log('Soy especialista en la caza de ratones');
  }

  //Los getters y setters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase

  get getRaza() {
    return this.raza;
  }

  set setRaza(raza) {
    this.raza = raza;
  }
}

Gato.cazar(); //Ejecución del método estático

const felix = new Gato('Felix', 'Macho', 'Mediano');

console.log(felix);
felix.saludar();
felix.sonar();
felix.maullar();

// Ejecución Getters y Setters -  se utilizan como si fueran atributos ya que JS los maneja así

console.log(felix.getRaza);
felix.setRaza = 'Angora';
console.log(felix.getRaza);
