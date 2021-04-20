import React from 'react'
import Car from './Car/Car.js'
import './App.css';

class App extends React.Component {
  state = {
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

  changeTitleHandler = (pageTitle = '') => {
    this.setState({pageTitle})
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }
  
  render() {
    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car 
            key = {index}
            name = {car.name}
            year = {car.year}
            onChangeTitle = {this.changeTitleHandler.bind(this, car.name)}
          />
        )
      })
    }

    return(
      <div style={{textAlign: 'center'}} className="App">

        <h1>{this.state.pageTitle}</h1>

        <button 
          onClick={this.toggleCarsHandler}>
          Toggle cars
        </button>

        { cars }

      </div>
    );
  }
}

export default App;