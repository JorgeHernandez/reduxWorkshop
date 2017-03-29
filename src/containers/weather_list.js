import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export class WeatherList extends Component {
	renderWeather(cityData){
		var temps = cityData.list.map(weather=>weather.main.temp);
		return(
			<tr key={cityData.city.name}>
				<td>{cityData.city.name}</td>
				<td>
					<Sparklines height={120} width={180} data={temps}>
						<SparklinesLine color="red" />
					</Sparklines>
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