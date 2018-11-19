import React from 'react';
import Media from './media.js';
import Play from '../../icons/components/play';


function Playlist (props) {
	return (
		<div>
		{
			props.playlist.map((item)=>{

			return <Media openModal = {props.handleOpenModal} {...item} key={item.id} />
			})
		}
		
		</div>
	)
}



// class Playlist extends Component {
// 	render() {
// 		const playlist = this.props.data.categories[0].playlist;
// 		console.log(this.props.data);
// 		return (
// 			<div>
// 			{
// 				playlist.map((item)=>{

// 				return <Media {...item} key={item.id} />
// 				})
// 			}
			
// 			</div>
// 		)
// 	}
//}


export default Playlist;