var jose = {
    nombre: 'Jose',
    apellido: 'Moncada',
    altura: 1.64,
    cantidadDeLibros: 123
}

var andrea = {
    nombre: 'Andrea',
    apellido: 'Aldana',
    altura: 1.55,
    cantidadDeLibros: 20
}

var jhonnatan = {
    nombre: 'Jhonnatan',
    apellido: 'Moncada',
    altura: 1.70,
    cantidadDeLibros: 594
}
var alfonso = {
    nombre: 'Alfonso',
    apellido: 'Alejo',
    altura: 1.89,
    cantidadDeLibros: 432
}

var arthuro = {
    nombre: 'Arthuro',
    apellido: 'Ali',
    altura: 1.90,
    cantidadDeLibros: 123
}

var personas = [jose, andrea, jhonnatan, alfonso, arthuro]

// maneras de ubicar elementos en un array

//personas[0].altura
//personas[0]['altura']

const esAlta = ({altura}) =>  altura > 1.8;

var personasAltas = personas.filter(esAlta);
//var personasAltas = personas.filter( function(persona) {
//    return persona.altura > 1.8
//} )

const pasarAlturaACms = persona => ({
   // persona.altura = persona.altura *100;
   ...persona,
    altura: persona.altura *  100
    
})

var personasCms = personas.map(pasarAlturaACms); 

console.log(personasCms);

// var acum = 0; 
// for (var i = 0; i < personas.length; i++) {
//     acum += personas[i].cantidadDeLibros
// }

const reducer = (acum, {cantidadDeLibros}) =>  acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0);

console.log(`En total todos tienen ${totalDeLibros} libros`);