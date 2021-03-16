import { useState, useEffect } from "react";
import axios from "axios";

export default function Person() {
    let [number, setNumber] = useState(1);
    let [response, setResponse ] = useState("Loading")

    const fetch = async (url) => {
        let hr = await axios.get(url)
        setResponse(hr.data.name)
    }

    useEffect(() => {
        // Stuff that happens when component is loaded (or updated if you forget the empty array!)
        if (number !== 0) fetch(`https://swapi.dev/api/people/${number}/`);
    }, [number]);

    return <>
        <p>Give me an id and I'll give you the name of the id holder.</p>
        <input
            type="number"
            onChange={(event) => setNumber(Number(event.target.value))}
            name="number"
            placeholder="id number" 
        />
        <p>{response}</p>
    </>;
  
}