let bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true,
};

//La herencia en JavaScript se basa en el objeto del prototipo.

var eagle = Object.create(bird);
console.log('Eagle: ', eagle);

console.log('Eagle has wings: ', eagle.hasWings);
console.log('Eagle can fly: ', eagle.canFly);
console.log('Eagle has feathers: ', eagle.hasFeathers);

let penguin = Object.create(bird);
console.log('penguin has wings: ', penguin.hasWings);
penguin.canFly = false;
console.log('penguin: ', penguin);
console.log('penguin has feathers: ', penguin.hasFeathers);
console.log('penguin can fly: ', penguin.canFly);
