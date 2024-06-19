const auto = {
  motor: true,
  direccion: true,
  velocidad: 'lento',
};

const autoDeportivo = Object.create(auto);
autoDeportivo.velocidad = 'rapido';
console.log('Objeto auto deportivo', autoDeportivo);

console.log('--- For-in no es confiable ---');
for (prop in autoDeportivo) {
  console.log(prop);
}
console.log('iterando sobre el objeto Y su prototipo!');
console.log();
console.log('--- For-of es confiable ---');
for (prop of Object.keys(autoDeportivo)) {
  console.log(prop + ': ' + autoDeportivo[prop]);
}

console.log('¡iterando solo sobre las PROPIEDADES PROPIAS del objeto!');
