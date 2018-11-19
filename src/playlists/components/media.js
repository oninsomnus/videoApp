import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import './media.css';
import {Play, VolumeIcon, Pause, Full} from '../../icons/components/play';
import '../../icons/components/icon.css'

class Media extends PureComponent{
	state = {
		author: 'Nombre de Autor'
	}
	// constructor(props){
	// 	super(props)
	// 	//esta funcion crea un estado cambiable, lo que hace que el valor
	// 	//del author pueda ser cambiaado en una funcion
	// 	this.state ={
	// 		author: props.author
	// 	}
	// // 	this.handleClick = this.handleClick.bind(this);
	// }

	//en esta funcion podemos cambiar el valor de un estado
	handleClick = (event) => {
	// 	//console.log(this.props.image);
	// 	this.setState({
	// 		author: 'Ricardo',
	// 	});
		this.props.openModal(this.props)
	}
	render() {
		const styles = {
			container: {
				fontSize: 20,
				fontFamily: 'Helvetica',
				textTransform: 'uppercase',
				cursor: 'pointer',
				width: 260,
				border: '1px solid red',
				textAlign: 'center'
			}
		}
		return (


			<div className="card-panel deep-purple lighten-4 Media" 
			onClick={this.handleClick}>
				<div>
					<img className="mediaImage circle center-align" src={this.props.cover} alt="" width={200} height={200}/>
					<h3 className="titulo">{this.props.title}</h3>
					<p>{this.props.author}</p>
					<div className = "playicon">
						<Play						 
							color="white"
							size={20}
						/>
						<Pause 
							color="white"
							size={20}
						/>
						<Full 
							color="white"
							size={15}
						/>
						<VolumeIcon 
							color="white"
							size={20}
						/>
					</div>
				</div>
			</div>
		)
	}
}

Media.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	type: PropTypes.oneOf(['video', 'audio'])
}
export default Media;