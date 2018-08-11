import React, { Component } from 'react';
import TemperatureInput from '../Temperature/TemperatureInput';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = { temperature: '', scale: 'c' };
    }

    handleCelsiusChange(temperature) {
        this.setState({ scale: 'c', temperature });

    }

    handleFahrenheitChange(temperature) {
        this.setState({ scale: 'f', temperature });

    }
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const c = scale === 'c' ? tryConvert(temperature,toCelsius) : temperature;
        const f = scale === 'f' ? tryConvert(temperature,toFahrenheit) : temperature;
        return (
            <div className="Life Sate">
                <TemperatureInput scale='c' temperature={c} onChangeTemperature={this.handleFahrenheitChange} />
                <TemperatureInput scale='f' temperature={f}  onChangeTemperature={this.handleCelsiusChange} />
            </div>
        );
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
export default Calculator;