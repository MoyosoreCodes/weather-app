import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit = {this.props.getWeather}>
                    <input  name = "location" placeholder ="City..."/>
                    <button>Search</button>
                </form>
                </div>
        )
    }
}

export default Form
