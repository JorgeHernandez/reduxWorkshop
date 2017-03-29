import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

export class WeatherList extends Component {
	renderWeather(cityData){
		var temps = cityData.list.map(weather=>weather.main.temp);
		var pressures = cityData.list.map(weather=>weather.main.temp);
		var humidities = cityData.list.map(weather=>weather.main.humidity);
		return(
			<tr key={cityData.city.name}>
				<td>{cityData.city.name}</td>
				<td>
					<Chart data={temps} color="red" />
				</td>
				<td>
					<Chart data={pressures} color="green" />
				</td>
				<td>
					<Chart data={humidities} color="blue" />
				</td>
			</tr>
		);
	}
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<th>City</th>
					<th>Temperature</th>
					<th>Pressure</th>
					<th>Humidity</th>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps(state){
	return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);