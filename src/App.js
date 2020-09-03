import React, { Component } from 'react'
import './App.css';
import Title from './Components/Title'
import Form from './Components/Form'
import Weather from './Components/Weather'

class App extends Component {
  state = {
    temp : undefined, 
    windDirection : undefined,
    weatherState : undefined, 
    humidity : undefined, 
    id: undefined
}


getWeather = async ( e ) => {
    e.preventDefault();
    const location = e.target.elements.location.value;
    const apiCall = await fetch(`https://www.metaweather.com/api/location/search/?query=${location}`)
    const data = await apiCall.json();
    console.log(data);
}


  render() {
    return (
      <div className="App">
        <Title />
  
        <Form  getWeather={this.getWeather}/>
  
        <Weather />
      </div>
    )
  }
}

export default App

