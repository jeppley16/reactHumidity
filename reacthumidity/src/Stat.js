import React from 'react';
import ReactDOM from 'react-dom';
import './Stat.css';
import 'tachyons';


const Stat = ({humidity}) => {

	const percentage = humidity * 100 + '%';
	return(
		<div className='stat'>
			<p>{percentage}</p>
		</div>
		)
}


export default Stat;