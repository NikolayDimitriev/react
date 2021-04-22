import React from 'react';
import Auxiliary from '../hoc/Auxiliary.js';

class Counter extends React.Component {
    state = {
        counter: 0
    }

    render() {
        // return (
        //     <React.Fragment>
        //         <h2 key={'1'}>Counter: {this.state.counter}</h2>
        //         <button key={'2'} onClick={() => this.setState({counter: this.state.counter + 1})}>+</button>
        //         <button key={'3'} onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
        //     </React.Fragment>
        // )
        // Второй вариант
        return (
            <Auxiliary>
                <h2 key={'1'}>Counter: {this.state.counter}</h2>
                <button key={'2'} onClick={() => this.setState({counter: this.state.counter + 1})}>+</button>
                <button key={'3'} onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
            </Auxiliary>
        )
    }
}

export default Counter