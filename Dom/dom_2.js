const boton = document.getElementById('agregarCampo');

boton.addEventListener('click', () => {
  const nuevoCampo = document.createElement('input');
  nuevoCampo.type = 'text';
  nuevoCampo.placeholder = 'Nuevo campo de texto';
  document.getElementById('formContainer').appendChild(nuevoCampo);
});

// _________________________________________________________
// const input = document.getElementById('nombre');

// document.getElementById('mostrarNombre').addEventListener('click', () => {
//   alert(`El nombre es: ${input.value}`);
// });

// document.getElementById('cambiarNombre').addEventListener('click', () => {
//   // input.value = "Nombre cambiado";
//   alert(`El nombre es: ${input.value}`);
// });
