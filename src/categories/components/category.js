import React from 'react'
import Playlist from '../../playlists/components/playlist.js'
import './category.css';

function Category(props){
	return(
		<div className="Category">
			<h2 className="Category-title">{props.title}</h2>
			<p className="Category-description">{props.description}</p>
					<Playlist playlist={props.playlist} 
						handleOpenModal = {props.handleOpenModal}
					/>
		</div>
	)
}

export default Category