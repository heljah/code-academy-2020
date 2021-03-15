// clock class showing the time
import React from 'react';

class Clock extends React.Component {
    state = {date: new Date()};

    componentDidMount() {
        setInterval(() => this.setState({date: new Date()}), 1000)
    }


  
    render() {
        return (
            <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
export default Clock;