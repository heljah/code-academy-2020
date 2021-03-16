// Show a list of starwars people in UI
import { useState, useEffect } from "react";
import axios from "axios";

export default function People() {
    let [people, setPeople] = useState([]);
    useEffect(() => {
        async function fetchIt() {
            let hr = await axios.get("https://swapi.dev/api/people/");
            setPeople(hr.data.results);
        }
        fetchIt();
    }, []);
    return (
        <ul>
            {people.map((person, index) => (
            <li key={index}>{person.name}</li>
            ))}
        </ul>
    );
}