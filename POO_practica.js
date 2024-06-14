class Persona {
  oficio() {
    console.log('Trabajo diario!');
  }
}

class Secretaria extends Persona {
  oficio() {
    console.log('Manejo de la agenda de compromisos, gestionar eventos');
  }
}

class Medico extends Persona {
  oficio() {
    console.log('Atender, tratar y recuperar la salud de los enfermos');
  }
}

let recursosHumanos = new Secretaria();
let medicoInternista = new Medico();
recursosHumanos.oficio();
medicoInternista.oficio();
