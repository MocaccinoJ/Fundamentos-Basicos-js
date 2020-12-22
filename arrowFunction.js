var jose = {
    nombre: 'Jose',
    apellido: 'Moncada',
    edad: 23,
    ingeniero: false,
    cantante: false,
    dj: false,
    gamer: true,
    guitarrista: false
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `);
    if(persona.ingeniero){
        console.log('Ingeniero');
    }
    if(persona.cantante){
        console.log('Cantante');
    }
    if(persona.dj){
        console.log('JD');
    }
    if(persona.gamer){
        console.log('Gamer');
    }
    if(persona.guitarrista){
        console.log('guitarrista');
    }
    
}

const MAYORIA_DE_EDAD = 18;
//arrow function 
const  esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD;


function imprimirSiesMayordeEdad(persona) {
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad!`)
    } else {
        console.log('Aún no eres mayor de edad!')
    }
    
}

const permitirAcceso = (persona) =>{
    if (!esMayorDeEdad(persona)){
        console.log(`${persona.nombre}, no eres mayor de edad!`)
    } else {
        console.log(`${persona.nombre}, eres mayor de edad!`)
    }
}
