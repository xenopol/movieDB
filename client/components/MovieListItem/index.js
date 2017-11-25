import React from 'react'
import Radium from 'radium'

const styles = {
	movie: {
		background: 'tomato',
		margin: 20,
		padding: 15,
	}
}

const MovieListItem = ({
	name,
	length,
	genre
}) => (
		<div style={ styles.movie }>
		<h1>{ name }</h1>
		<p>{ length }</p>
		<p>{ genre }</p>
	</div>
)

export default Radium(MovieListItem)