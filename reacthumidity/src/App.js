import React, { Component } from 'react';
import Humidity from './Humidity';
import { cities } from './cities';



class App extends Component {
	constructor() {
		super()
		this.state = {
			city: cities,
			humidity: ''
		}
	}
	render() {
	return (
		<div>
			<Humidity city={cities[0].city} humidity={this.state.humidity} />
		</div>
	);
	}
}


export default App;