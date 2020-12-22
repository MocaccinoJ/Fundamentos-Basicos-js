var jose = {
    nombre: 'Jose',
    apellido: 'Moncada',
    edad: 23,
    peso: 63
}

console.log(`Al iniciar el año ${jose.nombre} pesa ${jose.peso} kg`)

const INCREMENTO_PESO = 0.3;

const  aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = jose.peso - 3
var dia = 0;

while (jose.peso > META) {
    
if (comeMucho()) {
    //aumentar
    aumentarDePeso(jose);
}else if (realizaDeporte()) {
    //bajar de peso
    adelgazar(jose);
}
dia +=1;
}

console.log(`Al final del año, ${jose.nombre} pesa ${jose.peso.toFixed(2)} kg`)
console.log(`Pasaron ${dias} hasta que ${jose.nombre} adlegazó 3kg`)