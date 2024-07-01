import Bienvenida, { saludar } from './modulos_2.mjs';
import { aritmetica as op } from './modulos_3.mjs';
// El 'as' me permite poner un alias y hacer más simple el llamado

saludar();
let bienvenida = new Bienvenida();
bienvenida;

console.log('Operaciones Aritméticas');

let a = 25;
let b = 19;

op.suma(a, b);
op.resta(a, b);
op.mult(a, b);
op.div(a, b);
op.mod(a, b);
