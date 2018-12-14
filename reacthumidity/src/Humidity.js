import React from 'react';
import ReactDOM from 'react-dom';
import './Humidity.css';
import 'tachyons';

const Humidity = () => {
	return (
		<div className='humidifier'>
			<div className='tank'>
				<div className='waterLevel'></div>
			</div>
				<div className='operations'>
					<div className='stats tc'>
						<h2>Humidity:</h2>
						<p>56%</p>
					</div>
				</div>
				<div className='base'></div>
		</div>
		);
}

export default Humidity;