const fetch = require('node-fetch');
const readlineSync = require('readline-sync');

async function fetchPerson (id) {
    const response1 = await fetch(`https://swapi.dev/api/people/${id}/`);
    const person = await response1.json();
    const film1 = person.films[0];
    const response2 = await fetch(`${film1}`);
    const filmi = await response2.json();
    return filmi
}

fetchPerson(readlineSync.question('May I have the id of your character? '))
    .then((film) => console.log(film.title))
