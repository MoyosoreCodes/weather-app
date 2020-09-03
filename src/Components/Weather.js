import React, { Component } from 'react'

class Weather extends Component {
    render() {
        return (
            <div>
                <p>Temperature: {this.props.temperature}</p>
                <p>Weather: {this.props.weatherState}</p>
                <p>Humidity: {this.props.humidity}</p>
                <p>Wind Direction: {this.props.windDirection}</p>
            </div>
        )
    }
}

export default Weather
