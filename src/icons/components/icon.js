import React from 'react';

function Icon(props) {
	const {
		color, 
		size,
	} = props
	return(
		<svg
			fill={props.color}
			height={props.size}
			width={props.size}
			viewBox="0 0 32 32"
		>
			{props.children}
		</svg>
	)
}

export default Icon