import React from 'react';
import ReactDOM from 'react-dom';
import './Indicator.css';
import 'tachyons';


const Indicator = ({humidity}) => {

		let reading = humidity;
		let indicatorLevel = '';

		if (reading === 0) {
			indicatorLevel = 90;
		} else if (reading > 0 && reading <= 0.39) {
			indicatorLevel = -45;
		} else if (reading > 0.39 && reading <= 0.60) {
			indicatorLevel = 0;
		} else if (reading > 0.60 && reading <= 0.80) {
			indicatorLevel = 45;
		} else {
			indicatorLevel = 90;
		}


	return(
		<div className='indicator'
			style={{
				position: 'absolute',
				width: '5%',
				height: '7%',
				background: '#004D7F',
				borderRadius: '50%',
				left: '50%',
				top: '45%',
				transform: `rotate(${indicatorLevel}deg)`}}></div>
		)
}



export default Indicator;