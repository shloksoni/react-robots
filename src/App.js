import React,{Component}from 'react';
import  CardList from './CardList';
import {robots} from './robots';
import SearchBox from './searchbox';
import Scroll from './Scroll';


class App extends Component  {
	 constructor(){
	 	super();
		this.state={
			robots : robots,
			searchfield : '',
		}

	}
	onSearchChange = (event) => {
		this.setState  ({robots : robots,
				searchfield: event.target.value})
		
		
		
		

	}
	render(){const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		
		
	return(
		<div className="tc">
		<h1>Robofriends </h1>
		<SearchBox  searchchange = {this.onSearchChange} />
		<Scroll>
		< CardList robots={filteredRobots} />
		</Scroll>
		</div>
		) ;
	}
}
export default App;