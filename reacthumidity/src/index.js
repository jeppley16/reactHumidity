import React from 'react';
import ReactDOM from 'react-dom';
import Humidity from './Humidity';
// import IndoorHumidity from './IndoorHumidity';
import './index.css';
import 'tachyons';
import { cities } from './cities';
// import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
		<Humidity city={cities[0].city} humidity={cities[0].humidity} />
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
