import React from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js'
import Scroll from '../components/Scroll.js'
// import { robots } from './robots'


class App extends React.Component {
	constructor() {
		super();
		this.state = {
				robots: [],
				searchField: '',
		}
		console.log("constructor")
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				let responseJson = response.json()
				console.log(responseJson)
				return responseJson
			})
			.then(users => {
				console.log(users)
				this.setState({ robots: users })
			})
		console.log("componentDidMount")
	}

	onSearchChange = (event) => {
		console.log("onSearchChange")
		this.setState({ searchField: event.target.value });
	};
	onCardClick = (event) => {
		console.log("onCardClick")
		this.setState({ searchField: event.target.id })
	}
	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		console.log("render")
		return (
			<div>
				<h1 className='f-headline lh-solid tc'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} searchField={this.state.searchField} />
				<Scroll>
					<div className='db'>
						<CardList onCardClick={this.onCardClick} robots={filteredRobots}/>
					</div>
				</Scroll>
			</div>
		);
	}
}

export default App;