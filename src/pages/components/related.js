import React from 'react';
import logo from '../../../images/covers/logo.png';
import './related.css';

function Related (props) {
	return (
		<div className='related'>
			<img src={logo} width={250} />
		</div>
	)
}

export default Related;