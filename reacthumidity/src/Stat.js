import React from 'react';
import ReactDOM from 'react-dom';
import './Stat.css';
import 'tachyons';


const Stat = ({humidity}) => {
	return(
		<div className='stat'>
			<p>{humidity * 100 + '%'}</p>
		</div>
		)
}


export default Stat;