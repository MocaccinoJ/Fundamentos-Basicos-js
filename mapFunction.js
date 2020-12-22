var jose = {
    nombre: 'Jose',
    apellido: 'Moncada',
    altura: 1.64
}

var andrea = {
    nombre: 'Andrea',
    apellido: 'Aldana',
    altura: 1.55
}

var jhonnatan = {
    nombre: 'Jhonnatan',
    apellido: 'Moncada',
    altura: 1.70
}
var alfonso = {
    nombre: 'Alfonso',
    apellido: 'Alejo',
    altura: 1.89
}

var arthuro = {
    nombre: 'Arthuro',
    apellido: 'Ali',
    altura: 1.90
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