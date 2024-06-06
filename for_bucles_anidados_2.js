console.log("Con if")
console.log()
for (let i = 1; i <= 10; i++) {
  if (i == 1) {
    console.log('Gold medal');
  } else if (i == 2) {
    console.log('Silver medal');
  } else if (i == 3) {
    console.log('Bronze medal');
  } else {
    console.log(i);
  }
}

console.log()
console.log("Con switch")
console.log()
for (let j = 1; j < 11; j++) {
  switch (j) {
    case 1:
      console.log('Gold medal');
      break;
    case 2:
      console.log('Silver medal');
      break;
    case 3:
      console.log('Bronze medal');
      break;
    default:
      console.log(j);
      break;
  }
}
