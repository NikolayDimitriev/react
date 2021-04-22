import React from 'react';

class Counter extends React.Component {
    state = {
        counter: 0
    }

    render() {
        return [
            <h2 key={'1'}>Counter: {this.state.counter}</h2>,
            <button key={'2'} onClick={() => this.setState({counter: this.state.counter + 1})}>+</button>,
            <button key={'3'} onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
        ]
    }
}

export default Counter