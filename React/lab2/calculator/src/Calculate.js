import React from "react";

class Calculate extends React.Component {
    state = {number1: 0, number2: 0};

    click = () => {
        alert(parseInt(this.state.number1) + parseInt(this.state.number2));
    }


    changed = (event) => {
        event.target.name === "number1" ? this.setState({number1: event.target.value}) 
            : this.setState({number2: event.target.value});
    }

    render() {
        return <div>
            <input type="number" name="number1" onChange={this.changed} placeholder="number1"/>
            <input type="number" name="number2" onChange={this.changed} placeholder="number2"/>
            <br></br>
            <p>{parseInt(this.state.number1) + parseInt(this.state.number2)}</p>
        </div>;
    }
}

export default Calculate