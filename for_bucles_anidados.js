console.log('Dias laborales durante 2 semanas');

for (let i = 1; i < 3; i++) {
  {
    for (let j = 1; j < 6; j++) console.log('Semana ' + i + ' día ' + j);
  }
}
console.log();

console.log('Meses de verano');
for (let year = 2023; year < 2025; year++) {
  console.log(year);
  for (let month = 6; month < 9; month++) {
    console.log('-----------------' + month);
  }
}
console.log();

console.log('Tablas de multiplicar');
for (let i = 1; i < 11; i++) {
  for (let j = 1; j < 11; j++) {
    console.log(i + ' x ' + j + ' = ' + i * j);
  }
  console.log();
}
