import React from 'react'
import './search.css'

// function Search (props){
// 	return(
// 		<form></form>
// 	)
// }

const Search = (props) => (
	<form 
	onSubmit={props.handleSubmit}
	className='searchform'>
		<input
		ref={props.setRef} 
		className='searchinput' 
		type="text" 
		placeholder="Busca tus canciones favoritas" 
		name="search" 
		onChange = {props.handleChange}
		value={props.value}/>
	</form>
)

export default Search