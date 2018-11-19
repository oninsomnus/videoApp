import React, { Component } from 'react';
import Playlist from './playlist.js';

class Categoria extends Component {
	render(){
		const categorie = this.props.data.categories;
		//console.log(this.props.data.categories);
		return(
			<div>
				{
					categorie.map((playlist)=>{
						return <Playlist data={playlist} key={playlist.id} />
					})
				}				
			}
			</div>

		)
	}
}

export default Categoria;