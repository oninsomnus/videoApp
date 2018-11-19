import React from 'react';
import { VolumeIcon } from '../../icons/components/play.js'
import './volume.css'

function Volume(props) {
  return (
    <button
      className="Volume"
      onClick={props.handleVolumeMuted}
    >
      <VolumeIcon
		color="white"
		size={20}
      />
      <div className="Volume-range">
        <input
          type="range"
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumeChange}
          value={props.volume}
        />
      </div>
    </button>
  )
}

export default Volume;