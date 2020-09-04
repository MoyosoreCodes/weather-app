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
    error: undefined
}


getWeather = async ( e ) => {
    e.preventDefault();
    const location = e.target.elements.location.value;
    const apiCall = await fetch(`https://www.metaweather.com/api/location/search/?query=${location}`);
    const data = await apiCall.json();
    var details = await fetch(`https://www.metaweather.com/api/location/${data[0].woeid}/`);
     var result = await details.json()

     if (location){
       console.log(details)
      this.setState({
        temp: result.consolidated_weather[0].the_temp,
        weatherState: result.consolidated_weather[0].weather_state_name, 
        humidity: result.consolidated_weather[0].humidity,
        windDirection: result.consolidated_weather[0].wind_direction,
        error : undefined
      })

     }else{
      this.setState({
        temp: undefined,
        weatherState: undefined, 
        humidity: undefined,
        windDirection: undefined,
        error : "Please Enter a Location"
      })
       
     }


}


  render() {
    return (
      <div className="App">
        <div className = "wrapper">
          <div className = "main">
            <div className = "container">
              <div className = "row">
                <div className = "col-xs-5 title-container">
                      <Title />
                </div>
                <div className = "col-xs-7 form-container"> 
                <Form  getWeather={this.getWeather}/>
  
                  <Weather 
                    temperature = {this.state.temp}
                    weatherState = {this.state.weatherState}
                    humidity = {this.state.humidity}
                    windDirection = {this.state.windDirection}
                  />
                </div>

              </div>
            </div>

          </div>
        </div>

  
       
      </div>
    )
  }
}

export default App

