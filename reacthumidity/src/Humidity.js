import React from 'react';
import ReactDOM from 'react-dom';
import './Humidity.css';
import 'tachyons';
import Waterlevel from './Waterlevel';
import Dial from './Dial';
import Indicator from './Indicator';
import Stat from './Stat';

const Humidity = ({humidity}) => {
	return (
		<div className='humidifier'>
			<div className='tank'>
				<Waterlevel humidity={humidity}/>
			</div>
				<div className='operations'>
					<Dial />
						<Indicator />
						<Stat humidity={humidity}/>
				</div>
				<div className='base'></div>
		</div>
		);
}

export default Humidity;


