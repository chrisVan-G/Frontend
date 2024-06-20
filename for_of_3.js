const auto = {
  motor: true,
};

const autoDeportivo = Object.create(auto);
autoDeportivo.velocidad = 'rapido';
console.log('Objeto auto deportivo', autoDeportivo);

for (prop in autoDeportivo) {
  console.log('for in:', prop);
}

for (prop of Object.keys(autoDeportivo)) {
  console.log('for of:', prop + ': ' + autoDeportivo[prop]);
}
