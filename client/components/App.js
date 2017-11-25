import React from 'react'
import Radium from 'radium'
import MovieList from './MovieList'

class App extends React.Component {
	render() {
		return (
			<div>
				<MovieList />
			</div>
		)
	}
}

export default Radium(App)