import React, { Component } from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };
class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
      }
    
      handleChange(e) {
        // this.setState({this.props.onChangeTemperature : e.target.value});
        // this.props.onTemperatureChange(e.target.value);
        this.props.onChangeTemperature(e.target.value);
      }
    
      render() {
        const scale = this.props.scale;
        const temperature = this.props.temperature;

        return (
          <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input value={temperature}   onChange={this.handleChange} />
          </fieldset>
        );
      }
}

export default TemperatureInput;