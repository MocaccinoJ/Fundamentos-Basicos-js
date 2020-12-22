// const API_URL = 'https://swapi.dev/api/';
// const PERSONAS_URL ='people/:id';

// const lukeUrl = `${API_URL}${PERSONAS_URL.replace(':id',1)}`; 
// const opts = {crossDomain: true};
// const onPeopleResponse = function(character) {
//     console.log(`Hola, yo soy ${character.name}`);
// }
// // ejecutando un callback


// $.get(lukeUrl, opts, onPeopleResponse);


const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const opts = {crossDomain: true};

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;
const onPeopleResponse = function (character) {
    console.log(`Hola, soy ${character.name}`)
    }; 

$.get(lukeUrl, opts, onPeopleResponse);