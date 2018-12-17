import React from 'react';
import ReactDOM from 'react-dom';
import './Humidity.css';
import 'tachyons';

const Humidity = ({humidity}) => {
	return (
		<div className='humidifier'>
			<div className='tank'>
				<div className='waterLevel'></div>
			</div>
				<div className='operations'>
					<div className='dial tc'>
						<div className='dial-inner'></div>
						<div className='indicator'></div>
						<div className='stat'>
							<p>{humidity * 100 + '%'}</p>
						</div>
					</div>
				</div>
				<div className='base'></div>
		</div>
		);
}

export default Humidity;