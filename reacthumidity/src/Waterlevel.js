import React from 'react';
import ReactDOM from 'react-dom';
import './Waterlevel.css';
import 'tachyons';

const Waterlevel = ({humidity}) => {

	const percentage = humidity * 100 + '%';
	return (
		<div className='waterLevel' 
			style={{
				height: `${percentage}`,
				width: '100%',
				position: 'absolute',
				background: '#93f1fb',
				bottom: '20%',
				clipPath: "polygon(0% 25%, 13% 15%, 26% 24%, 33% 15%, 42% 25%, 55% 14%, 64% 25%, 75% 14%, 84% 25%, 100% 14%, 99% 99%, 0% 99%)",
				WebkitClipPath: "polygon(0% 25%, 13% 15%, 26% 24%, 33% 15%, 42% 25%, 55% 14%, 64% 25%, 75% 14%, 84% 25%, 100% 14%, 99% 99%, 0% 99%)"
			}}></div>	
		)
}

export default Waterlevel;



