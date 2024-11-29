const animal = {
  nombre: 'copito',
  especie: 'perro',
  edad: 1,
};

for (const propiedad in animal) {
  console.log(`Key: ${propiedad}, Value: ${animal[propiedad]}`);
}

// for in me permite recorrer todas las propiedades de un arreglo
