import React from 'react';
import classes from './Car.module.css';
import withClass from '../hoc/withClass.js';
import PropTypes from 'prop-types';

class Car extends React.Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        if (this.props.index === 0) {
            this.inputRef.current.focus()
        }
    }
    
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
                    ref = {this.inputRef}
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

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    index: PropTypes.number,
    onDelete: PropTypes.func,
    onChangeName: PropTypes.func
}

export default withClass(Car, classes.Car);