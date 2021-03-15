import React from 'react';

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

class Random extends React.Component {
    state = {
        randomNumber: randomIntFromInterval(this.props.min, this.props.max),
    };

    componentDidMount() {
        this.id = setInterval(this.calculateAgain, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }

    calculateAgain = (props) => this.setState({randomNumber: randomIntFromInterval(this.props.min, this.props.max)});
  
    render() {
        return <p>{this.state.randomNumber}</p>;
    }
}
export default Random;
