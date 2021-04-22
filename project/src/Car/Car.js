import React from 'react';
import classes from './Car.module.css';
import withClass from '../hoc/withClass.js';

class Car extends React.Component {
    
    render() {
        const inputClasses = [classes.input];
        if (this.props.name !== '') {
            inputClasses.push(classes.green)
        } else {
            inputClasses.push(classes.red)
        }
        
        if (this.props.name.length > 4) {
            inputClasses.push(classes.bold)
        }
            
        return (
            <React.Fragment>
                <h2>Car name: {this.props.name}</h2>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input 
                    type="text" 
                    value={this.props.name} 
                    onChange={this.props.onChangeName}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
        )
    }
}

export default withClass(Car, classes.Car);