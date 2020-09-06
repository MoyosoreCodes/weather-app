import React, { Component } from 'react'
import './App.css';
import Title from './Components/Title'
import Form from './Components/Form'
import Weather from './Components/Weather'

class App extends Component {

  state = {
    //loading: false,
    temp : '', 
    windDirection : '',
    weatherState : '', 
    humidity : 0, 
    error: ''
}

 refresh = () => {
   this.setState({
    temp : '', 
    windDirection : '',
    weatherState : '', 
    humidity : 0, 
    error: ''
   })
 }


getWeather = async ( location ) => {
  try {

    if(location === ''){
      console.log("Location Not Entered");

      this.setState({
        //loading: false,
        temp : '', 
        windDirection : '',
        weatherState : '', 
        humidity : 0, 
        error: "Please Enter A Location"
      })
      return
    }

    this.refresh();
    
    var url = "https://www.metaweather.com/api/location";


    const getLocation = await fetch(`${url}/search/?query=${location}`);
    const locationData = await getLocation.json();
    
    var locationId = await fetch(`${url}/${locationData[0].woeid}/`);
    
    var locationIdData = await locationId.json();

    var tempValue = Math.round(locationIdData.consolidated_weather[0].the_temp).toString() + "C";
    var weatherStateValue = locationIdData.consolidated_weather[0].weather_state_name +" "+ locationIdData.consolidated_weather[0].weather_state_abbr;
    var windValue = Math.round(locationIdData.consolidated_weather[0].wind_direction).toString() +" "+ locationIdData.consolidated_weather[0].wind_direction_compass

    this.setState({
      temp: tempValue,
      weatherState: weatherStateValue, 
      humidity: locationIdData.consolidated_weather[0].humidity,
      windDirection: windValue,
      error : ''
    })
    
  } catch (errorMessage) {
      console.error("Error", errorMessage);  
      this.setState({
        error : errorMessage.toString()
      })

      if (this.state.error === "TypeError: Cannot read property 'woeid' of undefined")
      {
        this.setState({
          error: `We currently do not have any Information on ${location}`
        })
      }
  }

}


  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>

                <div className="col-xs-7 form-container"> 
                  <Form 
                  //onLoad={this.handleLoad} 
                  onGetWeather={this.getWeather}
                  />
                  
                  <Weather 
                    temperature = {this.state.temp}
                    weatherState = {this.state.weatherState}
                    humidity = {this.state.humidity}
                    windDirection = {this.state.windDirection}
                    error = {this.state.error}
                    //loading = {this.state.loading}
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

