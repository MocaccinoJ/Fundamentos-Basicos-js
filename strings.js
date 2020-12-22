var nombre;
var apellido;

nombre = 'Jose';
apellido = 'Moncada';

var nombreEnMayuscula = nombre.toUpperCase();
var apellidoEnMinuscula = apellido.toLowerCase();
var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length;
var nombreCompleto = nombre + ' ' + apellido;
//nueva forma de concatenar
var nombreCompleto1 = `${nombre} ${apellido.toUpperCase()}`;
var str = nombre.substr(1,4);

console.log(nombreEnMayuscula + ' ' + apellidoEnMinuscula);
console.log(primeraLetraDelNombre);
console.log(cantidadDeLetrasDelNombre);

//devolver la última letra del nombre

var ubicarUltimaLetra = nombre.length -1;
var ultimaLetra = nombre.charAt(ubicarUltimaLetra);
console.log(ultimaLetra);