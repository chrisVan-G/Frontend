let nombre = 'Paco',
  edad = 22;

const persona = {
  nombre: nombre,
  edad: edad,
  caminar: function () {
    console.log('Mueve los pies');
  },
};

console.log(persona);
persona.caminar();

//Simplificación con los objetos literales

const persona_2 = {
  nombre,
  edad,
  caminar() {
    console.log('Mueve los pies');
  },
};

console.log(persona_2);
persona_2.caminar();
