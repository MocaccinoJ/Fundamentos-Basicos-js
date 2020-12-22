class Persona {
    constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido; 
    this.altura = altura;
    }
    saludar(fn){
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn (nombre, apellido)

        }
    }

    soyAlto(){
        return this.altura > 1.7
    }
}   

class Desarrollador extends Persona {
    constructor (nombre, apellido, altura) {
        super(nombre, apellido, altura)
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar (fn) {
        // var nombre = this.nombre;
        // var apellido = this.apellido;
        
        var {nombre, apellido} = this;
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrolador`);
        if (fn) {
            fn(nombre, apellido, true)
        }
    }

}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)
    if(esDev){
        console.log(`Ah mirá, no sabía que eras desarrollador`)
    }
}
    
    
var jose = new Persona('Jose', 'Moncada', 1.64);
var jhonnatan = new Desarrollador ('Jhonnatan', 'Moncada', 1.79)
var maria = new Persona ('Maria', 'Garcia', 1.55)
    
jose.saludar(responderSaludo);
jhonnatan.saludar(responderSaludo);
maria.saludar(responderSaludo);