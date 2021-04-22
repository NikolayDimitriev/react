import React from 'react'
import Car from './Car/Car.js'
import './App.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log('App constructor')
    this.state = {
      cars: [
        {
          name: "Ford Focus",
          year: 2018
        }, 
        {
          name: "Audi A8",
          year: 2016
        }, 
        {
          name: "Mazda 3",
          year: 2010
        }
      ], 
      pageTitle: 'React components',
      showCars: false
    };
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName = (name, index) => {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({cars})
  }

  deleteHandler = index => {
    const cars = [...this.state.cars]
    cars.splice(index, 1)
    this.setState({cars})
  }


  render() {
    console.log('App render');
    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key = {index}>
            <Car 
              name = {car.name}
              year = {car.year}
              onDelete = {this.deleteHandler.bind(this, index)}
              onChangeName = {event => this.onChangeName(event.target.value, index)}
            />
          </ErrorBoundary>
        )
      })
    }

    return(
      <div style={{textAlign: 'center'}} className="App">

        <h1>{this.props.title}</h1>

        <button 
          onClick={this.toggleCarsHandler}>
          Toggle cars
        </button>

        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '10px'
        }}>
          { cars }
        </div>

      </div>
    );
  }
}

export default App;