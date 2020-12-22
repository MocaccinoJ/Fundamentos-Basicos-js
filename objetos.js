var jose = {
    nombre: 'Jose',
    apellido: 'Moncada',
    edad: 23
}

var dario = {
    nombre: 'Dario',
    apellido: 'Moncada',
    edad: 22
}

function nombreMayus( { nombre } ){
console.log(nombre.toUpperCase());
}

nombreMayus(jose);
nombreMayus(dario);
nombreMayus({ nombre: 'Pepe' });
nombreMayus();

//desestructuración de los objetos en js

function nombreMayus( persona ){
    //var nombre = persona.nombre
    var { nombre } = persona.nombre;
    console.log(nombre.toUpperCase());
    }


//Hola, me llamo josé y tengo 23 años

function imprimirNombreYEdad(persona) {
console.log(`Hola, me llamo ${persona.nombre} y tengo ${persona.edad} años.`)
}