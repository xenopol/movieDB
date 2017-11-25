import React from 'react'
import Radium from 'radium'
import MovieListItem from '../MovieListItem'

class MovieList extends React.Component {
	state = {
		isLoading: false,
		movies: []
	}

	componentDidMount() {
		this.setState({ isLoading: true })

		fetch('http://testdom.me/api/getMovies')
			.then(response => response.json())
			.then(movies => {
				this.setState({ movies: movies, isLoading: false })
			})
	}

	addMovie = () => {
		const data = {
			name: this.inputName.value,
			length: Number(this.inputLength.value),
			genre: this.inputGenre.value
		}
		const url = 'http://testdom.me/api/addMovie'
		const request = new Request(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		})
		fetch(request)
			.then(response => console.log(response))
	}


	render() {
		const { isLoading, movies } = this.state
		if (isLoading) {
			return <p>Loading...</p>
		}

		return (
			<div>
				<h1>MovieList</h1>
				<div>
					<label htmlFor='name'>Name</label>
					<input id='name' type="text" ref={ node => this.inputName = node } />
				</div>
				<div>
					<label htmlFor='length'>Length</label>
					<input id='length' type="text" ref={ node => this.inputLength = node } />
				</div>
				<div>
					<label htmlFor='genre'>Genre</label>
					<input id='genre' type="text" ref={ node => this.inputGenre = node }/>
				</div>

				<button onClick={ this.addMovie }>Add movie</button>
				{
					movies.map((movie, i) => (
						<MovieListItem
							key={ i }
							name={ movie.name }
							length={ movie.length }
							genre={ movie.genre }
						/>))
				}
			</div>
		)
	}
}

export default MovieList