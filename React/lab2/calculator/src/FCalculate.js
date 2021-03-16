import { useState } from "react";


function FCalculate() {
    let [number1, setNumber1] = useState(0);
    let [number2, setNumber2] = useState(0);
    let [operation, setOperation] = useState("+");
    let [result, setResult] = useState(false);

    let operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
    }

    const click = (event) => {
        event.preventDefault();
        setResult(operations[operation](number1, number2));

    };
  
    return (
        <form onSubmit={click}>
            <input
            type="number"
            onChange={(event) => setNumber1(Number(event.target.value))}
            name="number1"
            placeholder="number 1"
            />
            <input
                type="number"
                onChange={(event) => setNumber2(Number(event.target.value))}
                name="number2"
                placeholder="number 2"
            /><br></br>
            <input type="radio" onChange={(event) => setOperation(event.target.value)} id="+" name="calculate" value="+"/>
            <label>+</label><br/>
            <input type="radio" onChange={(event) => setOperation(event.target.value)} id="-" name="calculate" value="-"/>
            <label>-</label><br/>
            <input type="radio" onChange={(event) => setOperation(event.target.value)} id="x" name="calculate" value="*"/>
            <label>*</label><br/>
            <button type="submit" onClick={click}>Calculate</button>
            <p>Result = {result}</p>
        </form>
    );
}

export default FCalculate;