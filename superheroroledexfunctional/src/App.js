import {Component} from 'react';

import logo from './logo.svg';
// import SearchBox from "./components/search-box/search-box";
// import CardList from "./components/card-list/card-list";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1 className="title">Superhero Roledox</h1>
    </div>
  )
}
 
// class App extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			heros: [],
// 			searchField: ''
// 		}
// 	}

// 	componentDidMount() {
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 			.then((response) => response.json())
// 			.then((users) => this.setState(() => {
// 				return {heros: users}
// 			},
// 			() => {
// 				console.log(this.state.heros);
// 			}
// 		));
// 	}

// 	onSearchChange = (event) => {
// 		const searchField = event.target.value.toLocaleLowerCase();
// 		this.setState(() => {
// 			return {searchField};
// 		});
// 	}

// 	render () {
// 		const { heros, searchField } = this.state;
// 		const { onSearchChange } = this;
// 		const filteredHeroes = heros.filter((hero) => {
// 			return hero.name.toLocaleLowerCase().includes(searchField);
// 		});
// 		return (
// 			<div className="App">
// 				<h1 className="title">Superhero Roledox</h1>
// 				<SearchBox 
// 					onChangeHandler={onSearchChange} 
// 					placeholder="Search Heroes" 
// 					className="search-box" 
// 				/>
// 				<CardList 
// 					filteredHeroes={filteredHeroes} 
// 				/>
// 			</div>
// 		);
// 	}
// }

 export default App;
