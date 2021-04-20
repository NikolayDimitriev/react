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
    pageTitle: 'React components'
  };

  changeTitleHandler = (newTitle = '') => {
    this.setState({
      pageTitle: newTitle
    })
  }

  handlerInput = event => {
    this.setState({
      pageTitle: event.target.value
    })
  }
  
  render() {
    return(
      <div style={{textAlign: 'center'}} className="App">

        <h1>{this.state.pageTitle}</h1>

        <input type="text" onChange={this.handlerInput}/> 

        <button 
          onClick={this.changeTitleHandler.bind(this, 'Change!')}>
          Change title
        </button>

        { 
          this.state.cars.map((car, index) => {
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

      </div>
    );
  }
}

export default App;