import React, { Component } from 'react'

class Form extends Component {

    state = {
        location : '',
    }


    setValue = ({target}) =>
    {
        this.setState({
           [target.name] : target.value
        })
    }

    childGetWeather = (e) => {
        e.preventDefault()
        
//this.props.onLoad(this.state.location)
        this.props.onGetWeather(this.state.location)
    }
    render() {
        return (
            <div>
                <form onSubmit = {this.childGetWeather}>
                    <label className="weather__value">Please Enter a Location </label>
                    <input type="text" value={this.state.location} name="location" onChange={this.setValue}  placeholder="City..."/>
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default Form
