import React from 'react'
import { Full } from '../../icons/components/play.js'
import './fullscreen.css'

const FullScreen = (props) => (
	<div 
		className='FullScreen'
		onClick={props.handleFullScreenClick}
	>
		<Full 
			size={20}
			color='white'
		/>
	</div>
)

export default FullScreen;