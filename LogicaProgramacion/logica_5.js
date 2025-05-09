/*15) Programa una función para convertir números de base binaria a decimal y viceversa, 
pe. miFuncion(100,2) devolverá 4 base 10.*/

const convertirBinarioDecimal = (n = undefined, base = undefined) => {
  if (n === undefined)
    return console.warn('No ingresaste un número a convertir');
  if (typeof n !== 'number')
    return console.error(`El valor "${n}" ingresado no es un número`);
  if (base === undefined)
    return console.warn('No ingresaste la base a convertir');
  if (typeof base !== 'number')
    return console.error(`El valor "${base}" ingresado no es un número`);

  switch (base) {
    case 2:
      console.info(`${n} base ${base} = ${parseInt(n, base)} base 10`);
      break;
    case 10:
      console.info(`${n} base ${base} = ${n.toString(base)} base 2`);
      break;
    default:
      console.error('El tipo de base a convertir no es válido');
  }
};

convertirBinarioDecimal();
convertirBinarioDecimal('2');
convertirBinarioDecimal(100);
convertirBinarioDecimal(100, '2');
convertirBinarioDecimal(100, 2);
convertirBinarioDecimal(1110010, 2);
convertirBinarioDecimal(4, 10);
convertirBinarioDecimal(114, 10);
convertirBinarioDecimal(114, 3);
console.log();

/*16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
pe. miFuncion(1000, 20) devolverá 800.*/

const valorConDescuento = (t = undefined, descuento = undefined) => {
  if (t === undefined)
    return console.warn('No ingresaste el valor total de la compra');
  if (typeof t !== 'number')
    return console.error(`El valor total "${t}" ingresado no es un número`);
  if (t === 0) return console.info('El valor total no puede ser cero');
  if (Math.sign(t) === -1)
    return console.info('El valor total no puede ser negativo');
  if (descuento === undefined)
    return console.warn('No ingresaste el descuento a aplicar');
  if (typeof descuento !== 'number')
    return console.error(
      `El valor del descuento "${descuento}" ingresado no es un número`
    );
  if (descuento < 1 || descuento > 100)
    return console.warn(
      `El valor ingresado para el descuento "${descuento}" no es válido`
    );
  let aplicacionDescuento = [(t * descuento) / 100];
  let precioFinal = t - aplicacionDescuento;

  console.info(
    `El precio total del producto es $${t} con un descuento del ${descuento}% debe pagar $${precioFinal}`
  );
};

valorConDescuento();
valorConDescuento('200');
valorConDescuento(0);
valorConDescuento(-1000);
valorConDescuento(1000, '20');
valorConDescuento(1000, -20);
valorConDescuento(1000);
valorConDescuento(1000, 25);
console.log();

/*17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/

const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn('No ingresaste la fecha');
  if (!(fecha instanceof Date))
    return console.error('El valor que ingresaste no es una fecha válida');

  let hoyMenosFecha = new Date().getTime() - fecha.getTime();
  let aniosEnMS = 1000 * 60 * 60 * 24 * 365;
  let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`
      )
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
};

calcularAnios();
calcularAnios({});
calcularAnios(true);
calcularAnios(new Date());
calcularAnios(new Date(1990, 6, 6));
calcularAnios(new Date(2033, 6, 6));
