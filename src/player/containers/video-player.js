import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout.js'
import Video from '../components/video.js'
import Title from '../components/title.js'
import PlayPause from '../components/play-pause.js'
import Timer from '../components/timer.js'
import Controls from '../components/video-player-controls.js'
import formattedTime from '../components/utilities.js'
import ProgressBar from '../components/progress-bar.js'
import Spinner from '../components/spinner.js'
import Volume from '../components/volume.js'
import FullScreen from '../components/fullscreen.js'

class VideoPlayer extends Component{
	state = {
		pause: false,
		duration: formattedTime(0),
		currentTime: formattedTime(0),
		loading: false,
		volume: 1,
		lastValue: null
	}
	togglePlay = (event) => {
		this.setState({
			pause: !this.state.pause
		})
	}
	componentDidMount(){
		this.setState({
			pause: (!this.props.autoplay)
		})
	}
	handleLoadedMetadata = event =>{
		this.video = event.target;
		this.video.volume = this.state.volume;
		this.setState({
			duration: formattedTime(this.video.duration),
			durationBar: this.video.duration,
		});
	}
	handleTimeUpdate = event =>{
		//console.log(this.video.currentTime)
		this.setState({
			currentTime: formattedTime(this.video.currentTime),
			currentTimeBar: this.video.currentTime,
		})
	}
	handleProgressChange = event => {
		this.video.currentTime = event.target.value
	}
	handleSeeking = event => {
		this.setState({
			loading: true,
		})
	}
	handleSeeked = event => {
		this.setState({
			loading: false,
		})
	}
	handleVolumeChange = event => {
		this.video.volume = event.target.value
		this.setState({
			volume: this.video.volume
		})
	}

	handleVolumeMuted = event => {
		const lastValue = this.video.volume;
		this.setState({lastValue})
		if (this.video.volume !== 0){
			this.video.volume = 0
			this.setState({
				volume: this.video.volume
			})
		} else {
			this.video.volume = this.state.lastValue
			this.setState({
				volume: this.video.volume
			})
		}
	}

	handleFullScreenClick = event => {
		if (!document.webkitIsFullScreen) {
			this.player.webkitRequestFullScreen()
		} else{
			document.webkitExitFullscreen();
		}
	}
	setRef = element => {
		this.player = element
	}
	render() {
		return(
			<VideoPlayerLayout
				setRef={this.setRef}
			>
				<Title 
					title={this.props.title}
				/>
				<Controls>
					<PlayPause
						pause={this.state.pause} 
						handleClick={this.togglePlay}
					/>
					<Timer 
						duration={this.state.duration}
						currentTime={this.state.currentTime}
					/>
					<ProgressBar 
						duration={this.state.durationBar}
						value={this.state.currentTimeBar}
						handleProgressChange={this.handleProgressChange}
					/>
					<Volume handleVolumeChange={this.handleVolumeChange} handleVolumeMuted={this.handleVolumeMuted}/>
					<FullScreen handleFullScreenClick={this.handleFullScreenClick}/>
				</Controls>
				<Spinner
					active={this.state.loading}

				/>
				<Video
					handleTimeUpdate={this.handleTimeUpdate}
					handleLoadedMetadata={this.handleLoadedMetadata}
					autoplay={this.props.autoplay}
					pause={this.state.pause}
					src={this.props.src}
					handleSeeking={this.handleSeeking}
					handleSeeked={this.handleSeeked}
				/>
			</VideoPlayerLayout>
		)
	}
}

export default VideoPlayer