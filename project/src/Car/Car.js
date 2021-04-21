import './Car.css'
import Radium from 'radium'
import React from 'react';

class Car extends React.Component {
    render() {
        const inputClasses = ['input'];
        if (this.props.name !== '') {
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }
        
        if (this.props.name.length > 4) {
            inputClasses.push('bold')
        }
        
        const style = {
            boxShadow: '0px 4px 5px 0px rgba( 0, 0, 0, .14)',
            border: '1px solid #ccc',
            ':hover': {
                border: '1px solid #aaa',
                boxShadow: '0px 4px 15px 0px rgba( 0, 0, 0, .25)',
                cursor: 'pointer'
            }
        }
        
        return (
            <div className="Car" style={style}>
                <h2>Car name: {this.props.name}</h2>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input 
                    type="text" 
                    value={this.props.name} 
                    onChange={this.props.onChangeName}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}

export default Radium(Car);