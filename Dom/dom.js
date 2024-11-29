const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  const emailRegex = /^[^\s@]+@[^\s@+\.[^\s@]+$/;
  const password = document.getElementById('password').value;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  //Reiniciar el mensaje de error
  errorMessage.textContent = '';

  if (email === '' || password === '') {
    errorMessage.textContent = 'Todos los campos son obligatorios';
    event.preventDefault(); //Evitar el envio del formulario
  } else if (!emailRegex.test(email)) {
    errorMessage.textContent = 'Por favor, ingresa un correo válido';
    event.prevenDefault();
  } else if (!passwordRegex.test(password)) {
    errorMessage.textContent =
      'La contraseña debe contener al menos 8 carácteres, una letra mayúscula y un número';
    event.prevenDefault();
  }
});
