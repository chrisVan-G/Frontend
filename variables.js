// Variables

let petDog = 'Rex';
let petCat = 'Pepper';
console.log(petDog);
console.log(petCat);
console.log("My pet dog's name is " + petDog);
console.log("My pet cat's name is " + petCat);
let catSound = 'purr';
let dogSound = 'woof';
console.log(petDog, 'says', dogSound);
console.log(petCat, 'says', catSound);
catSound = 'meow';
console.log(petCat, 'now says', catSound);
console.log();
// scope var-global(ambito global) let-local(ambito de bloque)

// Ambitos de bloque

console.log('Uso de var');
var musica = 'Rock';
console.log('Variable música antes del bloque', musica);
{
  // Esto es un bloque
  var musica = 'Pop';
  console.log('Variable música dentro del bloque', musica);
}
console.log('Variable música después del bloque', musica);
console.log('__________________________________________');
console.log('Uso de let');
let musica2 = 'Rock';
console.log('Variable música antes del bloque', musica2);
{
  // Esto es un bloque
  let musica2 = 'Pop';
  console.log('Variable música dentro del bloque', musica2);
}
console.log('Variable música después del bloque', musica2);
//Lo recomandable es usar let porque respeta los scope de bloque
