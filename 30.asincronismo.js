
const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const opts = {crossDomain: true};



function obtenerPersonaje(id, callback) {
    const url =  `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    $.get(url, opts, function (character) {
        console.log(`Hola, soy ${character.name}`)
        });
}

obtenerPersonaje(1, function() {
    obtenerPersonaje(2, function() {
        obtenerPersonaje(3)
    })
});
