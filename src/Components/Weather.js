import React, { Component } from 'react'

class Weather extends Component {
    render() {
        return (
            <div className = "weather__info">
                {
                    this.props.temperature && <p className = "weather__key">Temperature: 
                        <span className = "weather__value">{this.props.temperature}</span>
                    </p>
                }
                
                {
                    this.props.weatherState && <p className = "weather__key">Weather:  
                        <span className = "weather__value">{this.props.weatherState}</span>
                    </p>
                }
                
                {
                    this.props.humidity && <p className = "weather__key">Humidity:  
                        <span className = "weather__value">{this.props.humidity}</span>
                    </p>
                }
                
                {   this.props.windDirection && <p className = "weather__key"> Wind Direction:  
                        <span className = "weather__value">{this.props.windDirection}</span> 
                    </p> 
                }
                
            </div>
        )
    }
}

export default Weather
