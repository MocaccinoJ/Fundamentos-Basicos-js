var jose = {
    nombre: 'Jose',
    apellido: 'Moncada',
    edad: 23,
    peso: 63
}

console.log(`Al iniciar el año ${jose.nombre} pesa ${jose.peso} kg`)

const INCREMENTO_PESO = 0.2;

const  aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;

for (var i = 1; i <= 365; i++) {
    var random = Math.random()
    if ( random < 0.25) {
        //aumenta de peso
        aumentarDePeso(jose);
    } else if (random < 0.5) {
        //bajar de peso
        adelgazar(jose);
    }
}

console.log(`Al final del año, ${jose.nombre} pesa ${jose.peso.toFixed(2)} kg`)