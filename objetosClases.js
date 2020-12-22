function heredaDe (prototipoHijo, prototipoPadre) {
var fn = function() {}
fn.prototype = prototipoPadre.prototype
prototipoHijo.prototype = new fn
prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido; 
    this.altura = altura;
}

Persona.prototype.saludar =  function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function ()  { 
    return this.altura > 1.7
}    

function Desarrollador (nombre, apellido) {

    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona) 

Desarrollador.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrolador`);
}


// var jose = new Persona('Jose', 'Moncada', 1.64);
// var jhonnatan = new Persona ('Jhonnatan', 'Moncada', 1.79)
// var maria = new Persona ('Maria', 'Garcia', 1.55)

// jose.saludar();
// jose.soyAlto();
// jhonnatan.soyAlto();