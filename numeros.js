var edad;

edad = 27;

edad = edad + 1;
edad += 1;

var peso = 75;
peso = peso -2;

peso -= 2;

var sandwich = 1;

peso = peso + sandwich;

var jugarAlFutbol= 3;

peso -= jugarAlFutbol; 
console.log(peso);

var precioDeVino = 200.3

//manera de sacar cuentas con decimales correctamente
var total = Math.round(precioDeVino *100 *3)/100;
var totalStr = total.toFixed(2);
var total2 = parseFloat(totalStr);


var pizza = 8;
var personas = 2;
var cantidadDePorcionesPorPersona = pizza/personas;
